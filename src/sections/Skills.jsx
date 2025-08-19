import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/data';
import { fadeUp } from '@/lib/animations';
import { ShieldCheck, Code2, Boxes, Cpu, Database } from 'lucide-react';

function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-2xl bg-muted shadow-sm">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

export default function Skills() {
  const groupIcon = {
    Languages: <Code2 className="h-4 w-4" />,
    Frameworks: <Boxes className="h-4 w-4" />,
    Tools: <Cpu className="h-4 w-4" />,
    Fundamentals: <Database className="h-4 w-4" />,
  };

  return (
    <section id="skills" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Technical Skills" icon={<ShieldCheck />} />
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <motion.div key={group} variants={fadeUp(i * 0.06)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    {groupIcon[group]} {group}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-xl">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


