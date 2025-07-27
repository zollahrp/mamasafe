"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
// import DemoVideo from "@/components/landing/DemoVideo";
// import Features from "@/components/landing/Features";
// import Timeline from "@/components/landing/Timeline";
// import Article from "@/components/landing/Article";
// import Footer from "@/components/landing/Footer";

const Video = dynamic(() => import("@/components/landing/DemoVideo"), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      {/* <DemoVideo />      */}
      {/* <Features /> */}
      {/* <Timeline />        */}
      {/* <Article />         */}
      {/* <Footer /> */}
    </div>
  );
}