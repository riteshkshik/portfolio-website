import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarDays, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EXPERIENCE } from '@/data';
import { fadeUp } from '@/lib/animations';

function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-2xl bg-muted shadow-sm">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Professional Experience" icon={<CalendarDays />} />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
          <div className="grid gap-8">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.company + i}
                variants={fadeUp(i * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`grid md:grid-cols-2 gap-6 items-start ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="relative md:pl-10">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1.5 h-3 w-3 rounded-full bg-indigo-500 shadow" />
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{job.role} @ {job.company}</CardTitle>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> {job.location}
                        <span className="mx-1">•</span>
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {job.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium mb-2">{job.project}</p>
                      <ul className="space-y-2 text-sm">
                        {job.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:pl-10">
                  <Card className="bg-muted">
                    <CardContent className="pt-6">
                      <div className="text-sm text-muted-foreground mb-2">Impact</div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { k: 'APIs', v: job.company.includes('Execution') ? '45+' : '30+' },
                          { k: 'Perf Gain', v: '35%' },
                          { k: 'Concurrency', v: job.company.includes('Dvertex') ? '10x' : '—' },
                          { k: 'Security', v: 'JWT' },
                        ].map((m) => (
                          <div key={m.k} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3 text-center bg-background">
                            <div className="text-2xl font-bold">{m.v}</div>
                            <div className="text-xs text-muted-foreground">{m.k}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


