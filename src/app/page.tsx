"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Community />
      <Contact />
    </main>
  );
}
