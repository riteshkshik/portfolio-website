// src/components/Projects.jsx
import React from "react";
import { ExternalLink, Star, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function Projects() {
  const [repos, setRepos] = React.useState([]);
  const [status, setStatus] = React.useState("loading"); // 'loading' | 'ok' | 'error'

  React.useEffect(() => {
    const controller = new AbortController();
    const username = "riteshkshik";

    (async () => {
      try {
        setStatus("loading");
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub ${res.status}`);
        const data = await res.json();

        const filtered = (Array.isArray(data) ? data : [])
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
          .slice(0, 8);

        setRepos(filtered);
        setStatus("ok");
      } catch (e) {
        if (e.name !== "AbortError") setStatus("error");
      }
    })();

    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title row with icon (no external asset needed) */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Star className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Open Source Projects
            </h2>
          </div>
          <Button asChild variant="outline">
            <a
              href="https://github.com/riteshkshik?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="gap-2"
            >
              View all on GitHub <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {status === "loading" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-background p-5 animate-pulse"
              >
                <div className="h-5 w-40 bg-neutral-200 dark:bg-neutral-800 rounded mb-3" />
                <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
                <div className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="mt-4 h-8 w-28 bg-neutral-200 dark:bg-neutral-800 rounded" />
              </div>
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="text-sm text-muted-foreground">
            Couldn’t load repositories right now. Try refreshing in a minute.
          </div>
        )}

        {status === "ok" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <div
                key={repo.id}
                style={{
                  animation: `fadeUp .5s ${i * 0.05}s both cubic-bezier(0.22,1,0.36,1)`,
                }}
              >
                <Card className="hover:-translate-y-0.5 transition-transform">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{repo.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground min-h-[48px]">
                      {repo.description || "No description available."}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-4 w-4" /> {repo.stargazers_count ?? 0}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitBranch className="h-4 w-4" /> {repo.forks_count ?? 0}
                      </span>
                      {repo.language && <span>{repo.language}</span>}
                    </div>
                    <div className="mt-5">
                      <Button asChild>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="gap-2"
                        >
                          View on GitHub <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* tiny keyframes so the inline style above works without framer-motion */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);     filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
