"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cpu, Code2 } from "lucide-react";

const skills = [
  {
    category: "Systems Programming",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Rust", "C/C++", "Assembly", "OS Development", "Memory Management", "Linux Kernel"]
  },
  {
    category: "Web Development",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "REST APIs"]
  },
  {
    category: "Database & Infrastructure",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MySQL", "Docker", "Kubernetes", "AWS", "Linux Systems"]
  }
];

export function Skills() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const controls = useAnimation();

  const handleCardHover = (index: number) => {
    setActiveCard(index);
    controls.start({
      scale: 1.02,
      transition: { duration: 0.2 }
    });
  };

  const handleCardLeave = () => {
    setActiveCard(null);
    controls.start({
      scale: 1,
      transition: { duration: 0.2 }
    });
  };

  return (
    <section className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center"
      >
        Technical Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onHoverStart={() => handleCardHover(index)}
            onHoverEnd={handleCardLeave}
            animate={activeCard === index ? controls : {}}
          >
            <Card className={`bg-card/50 backdrop-blur transition-all duration-300 ${
              activeCard === index ? 'shadow-lg shadow-primary/20 border-primary/30' : 'hover:bg-card/60'
            }`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      rotate: activeCard === index ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-primary"
                  >
                    {skill.icon}
                  </motion.div>
                  <CardTitle className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {skill.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span 
                      key={i}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-sm transition-colors cursor-default
                        ${activeCard === index 
                          ? 'bg-primary/20 text-primary-foreground' 
                          : 'bg-primary/10 hover:bg-primary/20'}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}