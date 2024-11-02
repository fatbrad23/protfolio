"use client";

import { Cog, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Systems Engineer",
    company: "Tech Innovation Labs",
    period: "2020 - Present",
    icon: <Cog className="w-6 h-6 text-muted-foreground" />,
    achievements: [
      "Led development of custom OS kernel and system tools",
      "Architected scalable microservices infrastructure",
      "Implemented efficient memory management systems"
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Web Solutions Inc",
    period: "2018 - 2020",
    icon: <Code2 className="w-6 h-6 text-muted-foreground" />,
    achievements: [
      "Developed high-performance web applications",
      "Implemented DevOps practices and CI/CD pipelines",
      "Optimized application performance and security"
    ]
  }
];

export function Experience() {
  return (
    <section className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center"
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur hover:bg-card/60 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      {exp.title}
                    </CardTitle>
                    <CardDescription>{exp.company} • {exp.period}</CardDescription>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    {exp.icon}
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="hover:text-foreground transition-colors">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}