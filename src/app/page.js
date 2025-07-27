"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Tentang from "@/components/landing/Tentang";
import Pendamping from "@/components/landing/Pendampingan";
import Fitur from "@/components/landing/Fitur";

import Footer from "@/components/landing/Footer";

// const Video = dynamic(() => import("@/components/landing/DemoVideo"), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Tentang />
      <Pendamping />
      <Fitur />

      <Footer />
    </div>
  );
}