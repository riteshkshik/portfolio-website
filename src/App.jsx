import React from 'react';
import Navbar from '@/layouts/Navbar';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import Achievements from '@/sections/Achievements';
import Contact from '@/sections/Contact';
import Projects from '@/components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}


