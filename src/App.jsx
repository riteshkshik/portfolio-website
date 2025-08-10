import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Linkedin, ArrowRight, ExternalLink,
  ShieldCheck, Rocket, Trophy, School, CalendarDays, Cpu, Boxes, Database,
  Code2, BadgeCheck, ChevronRight, Menu, SunMedium, MoonStar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ---------- data ---------- */
const CONTACT = {
  name: "Ritesh Kumar Shikarwar",
  location: "Noida, UP, India",
  phone: "+91 8700567381",
  email: "riteshkshik@gmail.com",
  linkedin: "https://www.linkedin.com/in/ritesh-kumar-shikarwar-149b171b9/",
  github: "https://github.com/riteshkshik",
  photo: "https://loclse-app.s3.ap-south-1.amazonaws.com/service_provider/1754645156774-profile.jpg",
};

const SUMMARY =
  "Results-driven Full Stack developer with 2+ years of experience specializing in scalable backend systems, API development, and performance optimization. Proven track record of improving system performance by 35% and handling 10x concurrent requests through efficient architecture design and Redis caching implementation.";

const SKILLS = {
  Languages: ["JavaScript", "TypeScript", "SQL", "HTML5"],
  Frameworks: ["Node.js", "Express", "React", "MongoDB", "REST APIs", "JWT", "Redis", "KML APIs"],
  Tools: ["PM2", "Docker", "Postman", "VS Code", "Git", "GitHub", "JIRA", "NPM", "CI/CD"],
  Fundamentals: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Asynchronous Programming"],
};

const EXPERIENCE = [
  {
    company: "Execution Force Pvt. Ltd.",
    role: "Backend Developer",
    project: "LocalSe - Hyperlocal Services Discovery Platform",
    location: "Noida, UP",
    period: "May 2025 — Jul 2025",
    bullets: [
      "Built scalable backend using Node.js & Express; developed 45+ RESTful APIs.",
      "Implemented geospatial queries in MongoDB with indexing, cutting retrieval time by 40%.",
      "Boosted API performance by 35% with strategic caching for hot endpoints.",
      "Collaborated with frontend & mobile teams for smooth integrations and releases.",
      "Set up CI/CD using GitHub and PM2 for seamless deployments.",
    ],
  },
  {
    company: "Dvertex Info Systems",
    role: "Software Developer",
    project: "SafaiMitra – Waste management solution with GPS tracking and payments",
    location: "Noida, UP",
    period: "Jun 2023 — Present",
    bullets: [
      "Built advanced GPS services: path visualization, trip counting, coverage measurement.",
      "Improved backend performance by 35% via Redis caching and reduced SQL load.",
      "Handled 10x concurrent requests using PM2 cluster mode across 12 CPU cores.",
      "Designed KPI dashboard APIs for attendance, routes, trip data, and complaints.",
      "Automated PDF ID generation with QR codes for streamlined collection.",
    ],
  },
  {
    company: "Dvertex Info Systems",
    role: "Software Developer",
    project: "SurakshaMitra – SaaS platform for UP Police patrol digitization & monitoring",
    location: "Noida, UP",
    period: "Jun 2023 — Present",
    bullets: [
      "Developed real-time dashboard APIs for patrols, QR scans, and reports (30% efficiency).",
      "Built secure QR-based tracking with 10-minute cooldown enforcement.",
      "Implemented pagination increasing response speed by 60% for analytics views.",
      "Interactive map via KML APIs for scan locations and operational boundaries.",
      "Secured endpoints with JWT-based authentication.",
    ],
  },
];

const EDUCATION = [
  { school: "MGM College Of Engineering and Technology", degree: "Bachelor of Technology in Computer Science (CGPA: 7.43)", place: "Noida, UP", period: "May 2020 — Jun 2024" },
  { school: "Rajkiya Pratibha Vikas Vidyalaya", degree: "Class 12th (PCM) – 77%", place: "IP Extension, Delhi", period: "Apr 2018 — Jul 2020" },
];

const ACHIEVEMENTS = [
  { title: "700+ problems solved on LeetCode", detail: "Strong DSA practice and consistent problem-solving streak." },
  { title: "158th of 9,000+ – CodeChef November Long (Div 4)", detail: "Ranked by solving complex algorithmic challenges." },
  { title: "3223rd of 17,000+ – LeetCode Biweekly 103", detail: "Solved 3 of 4 problems within time constraints." },
];

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/* ---------- animations ---------- */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

/* ---------- navbar with persistent dark mode ---------- */
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  // init from localStorage or system preference
  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const enabled = saved ? saved === "dark" : prefersDark;
    setDark(enabled);
  }, []);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-background/85 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-extrabold text-lg tracking-tight">Ritesh.dev</a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground hover:text-foreground transition">
                {n.label}
              </a>
            ))}
            <Button asChild><a href="#contact">Hire Me</a></Button>
            <Button variant="ghost" aria-label="Toggle theme" onClick={() => setDark(d => !d)}>
              {dark ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </Button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" aria-label="Toggle theme" onClick={() => setDark(d => !d)}>
              {dark ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </Button>
            <Button variant="outline" onClick={() => setOpen(o => !o)}><Menu className="h-5 w-5" /></Button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} className="py-2 text-sm" onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <Button asChild className="w-full" onClick={() => setOpen(false)}><a href="#contact">Hire Me</a></Button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- hero with profile image + halo ---------- */
function Hero() {
  // slight magnetic hover on buttons
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 12 });
  const sy = useSpring(my, { stiffness: 120, damping: 12 });

  return (
    <section id="about" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp(0)}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-muted text-xs mb-4">
              <Rocket className="h-4 w-4" /> Full Stack / Backend Developer
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m {CONTACT.name.split(" ")[0]} — I build fast, scalable APIs & apps.
            </h1>
            <p className="mt-4 text-muted-foreground">{SUMMARY}</p>
            <div
              className="mt-6 flex flex-wrap gap-3"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mx.set((e.clientX - rect.left - rect.width / 2) / 10);
                my.set((e.clientY - rect.top - rect.height / 2) / 10);
              }}
              onMouseLeave={() => { mx.set(0); my.set(0); }}
            >
              <motion.div style={{ x: sx, y: sy }}>
                <Button asChild><a href="#contact" className="gap-2">Let’s work together <ArrowRight className="h-4 w-4" /></a></Button>
              </motion.div>
              <Button variant="outline" asChild><a href={CONTACT.github} target="_blank" rel="noreferrer" className="gap-2"><Github className="h-4 w-4" /> GitHub</a></Button>
              <Button variant="outline" asChild><a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a></Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {CONTACT.location}</span>
              <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`tel:${CONTACT.phone}`}><Phone className="h-4 w-4" /> {CONTACT.phone}</a>
              <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`mailto:${CONTACT.email}`}><Mail className="h-4 w-4" /> {CONTACT.email}</a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp(0.15)} className="relative">
            {/* soft animated halo */}
            <div className="absolute inset-0 -z-10 grid place-items-center">
              <div className="h-56 w-56 md:h-72 md:w-72 rounded-full bg-primary/20 blur-2xl pulse-soft" />
            </div>

            {/* image with ring and subtle float */}
            <div className="relative mx-auto h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden ring-4 ring-indigo-500/40 shadow-xl float-slow">
              <img
                src={CONTACT.photo}
                alt="Ritesh"
                className="h-full w-full object-contain bg-black"
              />
              {/* gradient glare */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 mix-blend-overlay" />
            </div>

            {/* name under image */}
            <div className="text-center mt-4">
              <div className="text-sm text-muted-foreground">Ritesh Kumar Shikarwar</div>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {["Node.js", "Express", "MongoDB", "Redis", "React", "JWT"].map(t => (
                  <Badge key={t} className="rounded-xl">{t}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- sections ---------- */
function sectionTitle(title, icon) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-2xl bg-muted shadow-sm">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Skills() {
  const groupIcon = {
    Languages: <Code2 className="h-4 w-4" />,
    Frameworks: <Boxes className="h-4 w-4" />,
    Tools: <Cpu className="h-4 w-4" />,
    Fundamentals: <Database className="h-4 w-4" />,
  };
  return (
    <section id="skills" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {sectionTitle("Technical Skills", <ShieldCheck />)}
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

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {sectionTitle("Professional Experience", <CalendarDays />)}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
          <div className="grid gap-8">
            {EXPERIENCE.map((job, i) => (
              <motion.div key={job.company + i} variants={fadeUp(i * 0.08)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className={`grid md:grid-cols-2 gap-6 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative md:pl-10">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1.5 h-3 w-3 rounded-full bg-indigo-500 shadow" />
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{job.role} @ {job.company}</CardTitle>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> {job.location}
                        <span className="mx-1">•</span>
                        <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{job.period}</span>
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
                          { k: "APIs", v: job.company.includes("Execution") ? "45+" : "30+" },
                          { k: "Perf Gain", v: "35%" },
                          { k: "Concurrency", v: job.company.includes("Dvertex") ? "10x" : "—" },
                          { k: "Security", v: "JWT" },
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

function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {sectionTitle("Education", <School />)}
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((e, i) => (
            <motion.div key={i} variants={fadeUp(i * 0.06)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{e.school}</CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {e.place}
                    <span className="mx-1">•</span>
                    <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{e.period}</span>
                  </div>
                </CardHeader>
                <CardContent><p>{e.degree}</p></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {sectionTitle("Achievements", <Trophy />)}
        <div className="grid md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={a.title} variants={fadeUp(i * 0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> {a.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{a.detail}</p></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 mb-6"><Mail className="h-5 w-5" /><h2 className="text-2xl md:text-3xl font-bold">Contact</h2></div>
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border p-6 md:p-10 bg-gradient-to-br from-neutral-100/70 via-background to-neutral-100/70 dark:from-neutral-900/50 dark:to-neutral-900/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Let’s build something great.</h3>
              <p className="mt-2 text-muted-foreground">
                I’m available for full-time roles and freelance backend/Full Stack work.
                Reach out and I’ll get back within 24 hours.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`mailto:${CONTACT.email}`}><Mail className="h-4 w-4" /> {CONTACT.email}</a>
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`tel:${CONTACT.phone}`}><Phone className="h-4 w-4" /> {CONTACT.phone}</a>
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={CONTACT.linkedin}><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={CONTACT.github}><Github className="h-4 w-4" /> GitHub</a>
              </div>
            </div>
            <div>
              <form
                className="grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const subject = encodeURIComponent("New inquiry from Ritesh.dev");
                  const body = encodeURIComponent(
                    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`
                  );
                  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid gap-1">
                  <label className="text-sm" htmlFor="name">Your name</label>
                  <input id="name" name="name" className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-3 py-2 bg-background" required />
                </div>
                <div className="grid gap-1">
                  <label className="text-sm" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-3 py-2 bg-background" required />
                </div>
                <div className="grid gap-1">
                  <label className="text-sm" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-3 py-2 bg-background" required />
                </div>
                <Button className="mt-1 gap-2">Send Email <ExternalLink className="h-4 w-4" /></Button>
              </form>
            </div>
          </div>
        </motion.div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {CONTACT.name}. Built with React, Tailwind, and Framer Motion.
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
