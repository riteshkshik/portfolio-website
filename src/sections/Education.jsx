import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarDays, School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EDUCATION } from '@/data';
import { fadeUp } from '@/lib/animations';

function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-2xl bg-muted shadow-sm">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Education" icon={<School />} />
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((e, i) => (
            <motion.div key={i} variants={fadeUp(i * 0.06)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{e.school}</CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {e.place}
                    <span className="mx-1">•</span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {e.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{e.degree}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


