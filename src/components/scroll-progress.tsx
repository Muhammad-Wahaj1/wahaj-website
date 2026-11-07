'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.min(percent, 100));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div className="h-full bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500 transition-[width] duration-200" style={{ width: `${progress}%` }} />
    </div>
  );
}
