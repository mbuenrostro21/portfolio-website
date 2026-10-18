'use client'
import { useEffect, useState } from "react";

function formatLaTime(now: Date) {
  return now.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
  });
}

// Client-only so the server-rendered time never mismatches on hydration
export const LaTime = ({ className }: { className?: string }) => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatLaTime(new Date()));
    const id = setInterval(() => setTime(formatLaTime(new Date())), 30000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span className={className}>Los Angeles · {time} PT</span>;
};
