"use client";

import { Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: { 
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6 relative"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-600/10 to-primary/10 blur-3xl opacity-20"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary">
          Systems Engineer & Full-Stack Developer
        </h1>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        Crafting efficient solutions from bare metal to the cloud. Specializing in Rust, systems programming,
        and scalable architectures.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 justify-center"
      >
        <Link href="https://github.com/ani3321r" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="group hover:bg-primary/10">
            <Github className="mr-2 w-4 h-4 transition-transform group-hover:rotate-12" />
            GitHub
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}