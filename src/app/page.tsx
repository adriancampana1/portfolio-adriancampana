"use client";
import About from "@/components/about";
import BackgroundAnimation from "@/components/backgroundAnimation";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainSection from "@/components/mainSection";
import Projects from "@/components/projects";
import SocialMedia from "@/components/socialMedia";
import WhatIDo from "@/components/whatido";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white relative">
      <BackgroundAnimation />
      <Header />

      <main className="container mx-auto px-6">
        <MainSection />
        <About />
        <WhatIDo />
        <Projects />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
}
