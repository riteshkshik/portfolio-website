import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Rocket, ArrowRight, Github, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profilePhoto from '@/assets/profile_image.png';
import { CONTACT, SUMMARY } from '@/data';
import { fadeUp, stagger } from '@/lib/animations';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const softX = useSpring(mouseX, { stiffness: 120, damping: 12 });
  const softY = useSpring(mouseY, { stiffness: 120, damping: 12 });

  return (
    <section id="about" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp(0)}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-muted text-xs mb-4">
              <Rocket className="h-4 w-4" /> Full Stack / Backend Developer
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m {CONTACT.name.split(' ')[0]} — I build fast, scalable APIs & apps.
            </h1>
            <p className="mt-4 text-muted-foreground">{SUMMARY}</p>
            <div
              className="mt-6 flex flex-wrap gap-3"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set((e.clientX - rect.left - rect.width / 2) / 10);
                mouseY.set((e.clientY - rect.top - rect.height / 2) / 10);
              }}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
            >
              <motion.div style={{ x: softX, y: softY }}>
                <Button asChild>
                  <a href="#contact" className="gap-2">
                    Let’s work together <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <Button variant="outline" asChild>
                <a href={CONTACT.github} target="_blank" rel="noreferrer" className="gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {CONTACT.location}
              </span>
              <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`tel:${CONTACT.phone}`}>
                <Phone className="h-4 w-4" /> {CONTACT.phone}
              </a>
              <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`mailto:${CONTACT.email}`}>
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeUp(0.15)} className="relative">
            <div className="absolute inset-0 -z-10 grid place-items-center">
              <div className="h-56 w-56 md:h-72 md:w-72 rounded-full bg-primary/20 blur-2xl pulse-soft" />
            </div>
            <div className="relative mx-auto h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden ring-4 ring-indigo-500/40 shadow-xl float-slow">
              <img src={profilePhoto} alt="Ritesh" className="h-full w-full object-cover bg-black scale-125 translate-y-3 -translate-x-3" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 mix-blend-overlay" />
            </div>
            <div className="text-center mt-4">
              <div className="text-sm text-muted-foreground">Ritesh Kumar Shikarwar</div>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {['Node.js', 'Express', 'MongoDB', 'Redis', 'React', 'JWT'].map((t) => (
                  <Badge key={t} className="rounded-xl">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


