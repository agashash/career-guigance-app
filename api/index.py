from flask import Flask, jsonify, request
from tensorflow.keras.models import load_model

from sklearn.preprocessing import StandardScaler, LabelEncoder
import pickle
import pandas as pd
import numpy as np
import logging
from flask_cors import CORS
import sys

# Redirect stdout to log file (optional)
# sys.stdout = open('log.txt', 'w')

# Set up logging
logging.basicConfig(filename='app.log', level=logging.DEBUG)

# Load the model and other resources
model = load_model('D:\\career\\api\\rnn.h5')

app = Flask(__name__)
CORS(app)

# Allow CORS for the specific origin
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Load the StandardScaler (loaded once, not in each request)
with open('D:\\career\\api\\scaler.pkl', 'rb') as file:
    scaler = pickle.load(file)

# Load LabelEncoders (loaded once, not in each request)
label_encoders = {}
columns = ['Certificate Course', 'Internship', 'Group', 'Suggested Job Role']
for col in columns:
    with open(f'D:\\career\\api\\label_encoder_{col}.pkl', 'rb') as file:
        label_encoders[col] = pickle.load(file)

# Route to test if the API is working
@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

# Prediction route
@app.route('/api/predict', methods=['POST'])
def predict():
    logging.debug("Route has been called")
    try:
        # Get JSON data from request
        json_data = request.get_json(force=True)
        logging.debug(f"Received data: {json_data}")

        # Prepare your data for prediction
        def prepare_data(json_data):
            data = pd.DataFrame([json_data])
            # Load the feature order (once at the beginning)
            with open('D:\\career\\api\\feature_order.pkl', 'rb') as f:
                feature_order = pickle.load(f)
            data = data[feature_order].values
            return data
        
        data = prepare_data(json_data)
        logging.debug(f"Prepared data: {data}")

        # Scale the data
        data = scaler.transform(data)
        
        # Make prediction
        prediction = model.predict(data)
        predicted_group_idx = np.argmax(prediction, axis=1)
        predicted_group_label = label_encoders['Group'].inverse_transform(predicted_group_idx)

        return jsonify({'predicted_group': predicted_group_label[0]})
    
    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
