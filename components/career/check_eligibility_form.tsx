"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Typography,
  Radio,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const suggestedJobRoles = {
  "A. Network Engineering and Security": [
    "Network Security Engineer",
    "Cloud Security Engineer",
    "Security Analyst",
    "Security Architect",
    "Penetration Tester",
    "Security Operations Center (SOC) Analyst",
    "Network Automation Engineer",
  ],

  "B. Software Engineer and DevOps": [
    "Full-Stack Developer",
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Cloud Architect",
    "Infrastructure as Code (IaC) Engineer",
    "Containerization Engineer",
    "Software Release Manager",
  ],

  "C. Computer Hardware Engineering": [
    "Field Service Engineer",
    "Computer Hardware Engineer",
    "Firmware Engineer",
    "Validation Engineer",
    "Manufacturing Engineer",
    "Sales Engineer",
  ],

  "D. Database Administration": [
    "Database Developer",
    "Database Administrator",
    "Data Architect",
    "Database Security Specialist",
    "Database Performance Engineer",
    "NoSQL Database Administrator",
    "Cloud Database Administrator",
  ],
};

const CheckCareerForm = () => {
  // Define a state for each input field and prediction results
  const [formData, setFormData] = useState({
    communicationEngineering: "",
    computerNetworks: "",
    softwareEngineering: "",
    operatingSystems: "",
    computerOrgAndArch: "",
    discreteStructures: "",
    experience: "",
    internship: "0", // Default to 'NO'
    digitalElectronics: "",
    certificateCourse: "",
    dataStructures: "",
  });
  const [predictionResult, setPredictionResult] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [jobRoles, setJobRoles] = useState([]);
  const handleOpen = () => setOpen(!open);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData); // Log formData to see the captured values

    let newCareerData = {
      "Certificate Course": formData.certificateCourse,
      Internship: formData.internship,
      Experience: formData.experience,
      "Communication Engineering": formData.communicationEngineering,
      "Computer Networks": formData.computerNetworks,
      "Software Engineering": formData.softwareEngineering,
      "Operating Systems": formData.operatingSystems,
      "Digital Electronics": formData.digitalElectronics,
      "Computer Organization and Architecture": formData.computerOrgAndArch,
      "Discrete Structures": formData.discreteStructures,
      "Data Structures": formData.dataStructures,
    };
    console.log("newCareerData", newCareerData);
    fetch("http://127.0.0.1:5000/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCareerData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Set the prediction result to state
        // setPredictionResult(`Prediction: ${data.predicted_group}`);
        // setJobRoles(suggestedJobRoles[group as keyof typeof suggestedJobRoles]);

        // handleOpen();
        // setError(""); // Clear any previous errors
        const group = data.predicted_group;
        console.log("group", group);
        if (group && group in suggestedJobRoles) {
          setPredictionResult(`Prediction: ${group}`);
          setJobRoles(
            suggestedJobRoles[group as keyof typeof suggestedJobRoles]
          );
          handleOpen();
          setError(""); // Clear any previous errors
        } else {
          throw new Error(
            "Invalid group received or group not in predefined list"
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setPredictionResult(""); // Clear any previous results
        setJobRoles([]);
        setError("Failed to predict career options. Please try again.");
      });
  };

  return (
    <div className="container mx-auto ">
      <Card className="mx-auto" color="transparent" shadow={false}>
        <form
          className="mt-8 mb-2 w-100 max-w-screen-lg sm:w-400 bg-purple-200 p-10"
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" color="blue-gray">
            Advanced Career Adviser
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to check your career options.
          </Typography>
          <div className="my-4 flex items-center gap-4">
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Communication Engineering
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="communicationEngineering"
                value={formData.communicationEngineering}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Computer Networks
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="computerNetworks"
                value={formData.computerNetworks}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="my-4 flex items-center gap-4">
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Software Engineering
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="softwareEngineering"
                value={formData.softwareEngineering}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Operating Systems
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="operatingSystems"
                value={formData.operatingSystems}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="my-4 flex items-center gap-4">
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Computer Organization and Architecture
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="computerOrgAndArch"
                value={formData.computerOrgAndArch}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Discrete Structures
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="discreteStructures"
                value={formData.discreteStructures}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="my-4 flex justify-evenly gap-4">
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Digital Electronics
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="digitalElectronics"
                value={formData.digitalElectronics}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Certificate Course
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="certificateCourse"
                value={formData.certificateCourse}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="my-4 flex justify-evenly gap-4">
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Data Structures
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="dataStructures"
                value={formData.dataStructures}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex-1 ...">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Experience
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="0-100"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="my-4 flex justify-evenly gap-4">
            <div className="flex-1 gap-10">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Internship
              </Typography>
              <Radio
                name="internship"
                label="YES"
                value="1" // Set value for "YES" to 1
                checked={formData.internship === "1"}
                onChange={handleChange}
              />
              <Radio
                name="internship"
                label="NO"
                value="0" // Set value for "NO" to 0
                checked={formData.internship === "0"}
                defaultChecked // You might remove this if you handle the default in your state
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex item-center gap-10">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
          </div>
          <Button className="mt-6" type="submit" fullWidth>
            CHECK CAREER OPTIONS
          </Button>
        </form>
        {/* Display prediction result or error message */}
        {predictionResult && (
          <>
            <DialogDefault
              prediction={predictionResult}
              open={open}
              handleOpen={handleOpen}
              jobRoles={jobRoles}
            />
            <Typography color="green" className="mt-4">
              {predictionResult}
            </Typography>
          </>
        )}
        {error && (
          <Typography color="red" className="mt-4">
            {error}
          </Typography>
        )}
      </Card>
    </div>
  );
};

function DialogDefault({ prediction, open, handleOpen, jobRoles }) {
  console.log("jobRoles", jobRoles);
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{prediction}</DialogHeader>
        <DialogBody>
          <ul className="flex flex-col gap-4">
            {jobRoles.map((job, index) => (
              <>
                <li id={index} className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal"> {job}</Typography>
                </li>
              </>
            ))}
          </ul>
          <Typography variant="h4" color="green">
            Wish You All THe Best .......!
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default CheckCareerForm;
