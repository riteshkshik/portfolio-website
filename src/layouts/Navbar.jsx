import React from 'react';
import { Button } from '@/components/ui/button';
import { NAV } from '@/data';
import { Menu, SunMedium, MoonStar } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-background/85 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-extrabold text-lg tracking-tight">
            Ritesh.dev
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground hover:text-foreground transition">
                {n.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contact">Hire Me</a>
            </Button>
            <Button variant="ghost" aria-label="Toggle theme" onClick={toggleTheme}>
              {isDark ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </Button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" aria-label="Toggle theme" onClick={toggleTheme}>
              {isDark ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
            </Button>
            <Button variant="outline" onClick={() => setOpen((o) => !o)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="py-2 text-sm" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <Button asChild className="w-full" onClick={() => setOpen(false)}>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}


