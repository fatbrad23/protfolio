"use client";

import { Terminal, Cpu, Server, ExternalLink, Github } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    title: "Custom Operating System",
    description: "A minimal OS kernel written in Asm with custom bootloader and memory management. Features include process scheduling, memory paging, and basic device drivers.",
    tags: ["Rust", "Assembly", "OS Development"],
    link: "https://github.com/ani3321r/some-assembly/tree/main/BasicOS",
    github: "https://github.com/ani3321r/some-assembly",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "System Performance Tools",
    description: "Collection of low-level system utilities written in Rust for performance monitoring and optimization. Includes memory profiling and thread analysis tools.",
    tags: ["C++", "Rust", "Systems Programming"],
    link: "https://github.com/ani3321r/rust-projects",
    github: "https://github.com/ani3321r/rust-projects",
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: "Container Orchestration Platform",
    description: "Automated container deployment platform with PostgreSQL backend, featuring automatic scaling and monitoring capabilities.",
    tags: ["Docker", "PostgreSQL", "DevOps"],
    link: "https://github.com/ani3321r/basic-saas",
    github: "https://github.com/ani3321r/basic-saas",
    icon: <Server className="w-6 h-6" />
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const controls = useAnimation();

  return (
    <section className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setActiveProject(project.title)}
            onHoverEnd={() => setActiveProject(null)}
          >
            <Card className="h-full overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      rotate: activeProject === project.title ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-primary"
                  >
                    {project.icon}
                  </motion.div>
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-2 hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 rounded-md bg-primary/10 text-xs hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="gap-2 group">
                      <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="gap-2 group">
                      Demo
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}