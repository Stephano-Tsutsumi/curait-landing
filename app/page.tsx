"use client";

import { navItems } from "@/data";

import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import App from "next/app";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import UseCases from "@/components/UseCases";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <UseCases />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
