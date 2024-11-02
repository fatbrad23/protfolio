"use client";

import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-32">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}