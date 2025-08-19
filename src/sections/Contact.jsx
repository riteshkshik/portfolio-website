import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/data';
import { fadeUp } from '@/lib/animations';

export default function Contact() {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    formData.append('access_key', accessKey || '');
    // Optional extra metadata
    formData.append('from_name', 'Ritesh.dev');
    formData.append('subject', 'New inquiry from Ritesh.dev');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }, // ensures JSON response instead of redirect
      });

      let data = null;
      try {
        data = await response.json();
      } catch (_) {
        // If response is not JSON (should not happen with Accept header), fall through
      }

      if (response.ok && data?.success) {
        setResult('Done');
        form.reset();
      } else {
        console.error('Submit Error', data || response.statusText);
        setResult('Internal Server Error');
      }
    } catch (err) {
      console.error('Network Error', err);
      setResult('Network Error');
    }
  };
  return (
    <section id="contact" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-5 w-5" />
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
        </div>
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border p-6 md:p-10 bg-gradient-to-br from-neutral-100/70 via-background to-neutral-100/70 dark:from-neutral-900/50 dark:to-neutral-900/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Let’s build something great.</h3>
              <p className="mt-2 text-muted-foreground">I’m available for full-time roles and freelance backend/Full Stack work. Reach out and I’ll get back within 24 hours.</p>
              <div className="mt-6 grid gap-3 text-sm">
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`mailto:${CONTACT.email}`}>
                  <Mail className="h-4 w-4" /> {CONTACT.email}
                </a>
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={`tel:${CONTACT.phone}`}>
                  <Phone className="h-4 w-4" /> {CONTACT.phone}
                </a>
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={CONTACT.linkedin}>
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 text-primary hover:underline" href={CONTACT.github}>
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
            <div>
              <form className="grid gap-3" onSubmit={onSubmit}>
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
                <div className="flex items-center gap-3 mt-1">
                  <Button type="submit" className="gap-2">
                    Send <ExternalLink className="h-4 w-4" />
                  </Button>
                  {result && <span className="text-sm text-muted-foreground">{result}</span>}
                </div>
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


