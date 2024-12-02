"use client";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import Section1 from "@/components/section/section1";
import Section2 from "@/components/section/section2";
import Section3 from "@/components/section/section3";
import Section4 from "@/components/section/section4";
import { ThemeProvider } from "@material-tailwind/react";

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <ThemeProvider>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <Footer />
      </ThemeProvider>
    </main>
  );
}
