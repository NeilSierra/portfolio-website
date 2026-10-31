"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AppIcon } from "./AppIcon";
import { GithubIcon } from "./SocialIcons";

interface CommitItem {
  sha: string;
  message: string;
  repo: string;
  branch: string;
  date: string;
  url: string;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface RawCommit {
  sha: string;
  html_url?: string;
  commit: {
    message: string;
    author?: {
      date: string;
    };
  };
}

// Initial fallback data for instant render without layout shift
const INITIAL_COMMITS: CommitItem[] = [
  {
    sha: "11eb0fa",
    message: "chore: update website title to Neil Sierra | Portfolio",
    repo: "portfolio-website",
    branch: "main",
    date: "2026-10-31T11:35:23Z",
    url: "https://github.com/NeilSierra/portfolio-website/commit/11eb0fa",
  },
  {
    sha: "712941f",
    message: "perf: eliminate scroll lag with one-shot animations, native wheel scrolling, content-visibility, and backdrop-blur reduction",
    repo: "portfolio-website",
    branch: "main",
    date: "2026-10-31T11:28:58Z",
    url: "https://github.com/NeilSierra/portfolio-website/commit/712941f",
  },
  {
    sha: "8ff3586",
    message: "feat: add Vercel to Tools and DevOps tech stack and footer",
    repo: "portfolio-website",
    branch: "main",
    date: "2026-10-31T11:19:06Z",
    url: "https://github.com/NeilSierra/portfolio-website/commit/8ff3586",
  },
  {
    sha: "d21435c",
    message: "chore: rename package to portfolio-website",
    repo: "portfolio-website",
    branch: "main",
    date: "2026-10-31T10:49:13Z",
    url: "https://github.com/NeilSierra/portfolio-website/commit/d21435c",
  },
];

const emptySubscribe = () => () => {};

function formatRelativeTime(dateString: string, isClient: boolean): string {
  if (!isClient) {
    return dateString.slice(0, 10);
  }
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));

    if (diffInSeconds < 60) return "Just now";
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 30) return `${diffInDays}d ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return "Recent";
  }
}

export function GithubActivity() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [commits, setCommits] = useState<CommitItem[]>(INITIAL_COMMITS);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(67);
  const [isLive, setIsLive] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("Cached");

  const loadData = async () => {
    try {
      const [commitsRes, contribRes] = await Promise.all([
        fetch("https://api.github.com/repos/NeilSierra/portfolio-website/commits?per_page=4", {
          headers: { Accept: "application/vnd.github.v3+json" },
        }).then((res) => (res.ok ? res.json() : null)),
        fetch("https://github-contributions-api.jogruber.de/v4/NeilSierra?y=2026").then((res) =>
          res.ok ? res.json() : null
        ),
      ]);

      if (Array.isArray(commitsRes) && commitsRes.length > 0) {
        const parsed: CommitItem[] = commitsRes.map((c: RawCommit) => ({
          sha: c.sha.slice(0, 7),
          message: c.commit.message.split("\n")[0],
          repo: "portfolio-website",
          branch: "main",
          date: c.commit.author?.date || "",
          url: c.html_url || `https://github.com/NeilSierra/portfolio-website/commit/${c.sha}`,
        }));
        setCommits(parsed);
      }

      if (contribRes && contribRes.contributions) {
        if (contribRes.total && contribRes.total["2026"]) {
          setTotalContributions(contribRes.total["2026"]);
        }
        const recentDays = contribRes.contributions.slice(-112);
        setContributions(recentDays);
      }

      setIsLive(true);
      setLastUpdated("Live");
    } catch {
      // Keep initial cached data if offline or rate limited
    }
  };

  useEffect(() => {
    let ignore = false;

    async function initialFetch() {
      await loadData();
      if (ignore) return;
    }

    initialFetch();

    return () => {
      ignore = true;
    };
  }, []);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await loadData();
    setIsRefreshing(false);
  };

  // Compute 16 weekly columns of 7 days
  const weeks: ContributionDay[][] = [];
  if (contributions.length > 0) {
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }
  }

  return (
    <div className="stat-card p-5 sm:p-7 md:p-8 border border-[var(--border-default)] bg-[var(--surface-base)] relative overflow-hidden">
      {/* Background blueprint grid subtle effect */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none grid-canvas" />

      <div className="relative z-10">
        {/* Module Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[var(--border-default)]">
          <div className="flex items-center gap-2 font-plex-mono text-[11px] sm:text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
            <GithubIcon className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span>GITHUB TELEMETRY</span>
            <span className="text-[var(--text-tertiary)]">{"//"}</span>
            <span className="text-[var(--text-secondary)]">REALTIME ACTIVITY</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[12px] bg-[var(--fill-subtle)] border border-[var(--border-default)] font-plex-mono text-[10px] tracking-wider uppercase font-semibold">
              <span
                className={`w-2 h-2 rounded-full ${
                  isLive ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              />
              <span className={isLive ? "text-emerald-600 dark:text-emerald-400" : "text-[var(--text-secondary)]"}>
                {lastUpdated}
              </span>
            </div>

            {/* Manual Refresh Button */}
            <button
              type="button"
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              aria-label="Refresh GitHub activity"
              title="Refresh GitHub telemetry"
              className="p-1.5 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-default)] hover:bg-[var(--surface-raised)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-50"
            >
              <svg
                className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>

            <a
              href="https://github.com/NeilSierra"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 font-plex-mono text-[11px] text-[var(--accent)] hover:underline font-semibold"
            >
              <span>@NeilSierra</span>
              <AppIcon name="external-link" className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Recent Commits Feed */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-1">
              <span className="font-plex-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
                LATEST REPOSITORY COMMITS
              </span>
              <span className="font-plex-mono text-[10px] text-[var(--text-tertiary)]">
                branch: main
              </span>
            </div>

            <div className="space-y-2.5">
              {commits.map((commit) => (
                <a
                  key={commit.sha}
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-[4px] bg-[var(--surface-default)] hover:bg-[var(--surface-raised)] border border-[var(--border-default)] hover:border-[var(--border-strong)] transition-all group focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="px-1.5 py-0.5 rounded-[3px] bg-[var(--surface-base)] border border-[var(--border-default)] font-plex-mono text-[10px] font-bold text-[var(--accent)] shrink-0">
                        {commit.sha}
                      </span>
                      <span className="font-plex-mono text-[11px] text-[var(--text-secondary)] font-medium truncate">
                        {commit.repo}
                      </span>
                    </div>
                    <span className="font-plex-mono text-[10px] text-[var(--text-tertiary)] shrink-0">
                      {formatRelativeTime(commit.date, isClient)}
                    </span>
                  </div>

                  <p className="text-[13px] text-[var(--text-primary)] font-medium leading-snug line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
                    {commit.message}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 2026 Contribution Heatmap */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-1">
              <span className="font-plex-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
                CONTRIBUTIONS // 2026
              </span>
              <span className="font-plex-mono text-[11px] text-[var(--accent)] font-bold">
                {totalContributions} Total
              </span>
            </div>

            <div className="p-4 rounded-[4px] bg-[var(--surface-default)] border border-[var(--border-default)] flex flex-col gap-3">
              {/* Telemetry Stat Cards */}
              <div className="grid grid-cols-2 gap-2 text-center pb-2 border-b border-[var(--border-default)]">
                <div className="p-2 rounded-[3px] bg-[var(--surface-base)]">
                  <span className="block font-sans text-[18px] sm:text-[20px] font-bold text-[var(--text-primary)]">
                    {totalContributions}
                  </span>
                  <span className="font-plex-mono text-[9px] uppercase tracking-wider text-[var(--text-tertiary)]">
                    2026 Commits
                  </span>
                </div>
                <div className="p-2 rounded-[3px] bg-[var(--surface-base)]">
                  <span className="block font-sans text-[18px] sm:text-[20px] font-bold text-[var(--accent)]">
                    Active
                  </span>
                  <span className="font-plex-mono text-[9px] uppercase tracking-wider text-[var(--text-tertiary)]">
                    Pipeline Status
                  </span>
                </div>
              </div>

              {/* Heatmap Grid (Last 16 Weeks) */}
              <div>
                <div className="flex items-center justify-between font-plex-mono text-[9px] text-[var(--text-tertiary)] mb-1.5 uppercase tracking-wider">
                  <span>Recent 16 Weeks Activity</span>
                  <span>Daily Grid</span>
                </div>

                <div className="overflow-x-auto pb-2 custom-scrollbar-x">
                  <div className="flex gap-[3px] min-w-max">
                    {weeks.length > 0 ? (
                      weeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-[3px]">
                          {week.map((day, dIdx) => {
                            let cellBg = "bg-[var(--fill-subtle)]";
                            if (day.level === 1) cellBg = "bg-[var(--accent)]/30";
                            else if (day.level === 2) cellBg = "bg-[var(--accent)]/55";
                            else if (day.level === 3) cellBg = "bg-[var(--accent)]/80";
                            else if (day.level === 4) cellBg = "bg-[var(--accent)]";

                            return (
                              <div
                                key={dIdx}
                                title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                                className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-[1.5px] transition-transform hover:scale-125 hover:ring-1 hover:ring-[var(--accent)] ${cellBg}`}
                              />
                            );
                          })}
                        </div>
                      ))
                    ) : (
                      // Fallback skeleton visual if contributions are loading
                      <div className="flex gap-[3px]">
                        {Array.from({ length: 16 }).map((_, wIdx) => (
                          <div key={wIdx} className="flex flex-col gap-[3px]">
                            {Array.from({ length: 7 }).map((_, dIdx) => (
                              <div
                                key={dIdx}
                                className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-[1.5px] ${
                                  (wIdx * 7 + dIdx) % 5 === 0
                                    ? "bg-[var(--accent)]/40"
                                    : "bg-[var(--fill-subtle)]"
                                }`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Heatmap Legend */}
                <div className="flex items-center justify-between pt-2 border-t border-[var(--border-default)] mt-2 font-plex-mono text-[9px] text-[var(--text-tertiary)]">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[var(--fill-subtle)]" />
                    <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[var(--accent)]/30" />
                    <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[var(--accent)]/55" />
                    <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[var(--accent)]/80" />
                    <span className="w-2.5 h-2.5 rounded-[1.5px] bg-[var(--accent)]" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
