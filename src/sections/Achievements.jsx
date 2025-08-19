import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ACHIEVEMENTS } from '@/data';
import { fadeUp } from '@/lib/animations';

function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-2xl bg-muted shadow-sm">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Achievements" icon={<Trophy />} />
        <div className="grid md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={a.title} variants={fadeUp(i * 0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4" /> {a.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{a.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


