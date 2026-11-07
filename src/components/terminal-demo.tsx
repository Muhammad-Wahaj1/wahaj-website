'use client';

import { useMemo, useState } from 'react';

const commandMap: Record<string, string> = {
  help: 'Available commands: help, about, skills, projects, experience, contact',
  about: 'Muhammad Wahaj is a Cloud & DevOps Engineer with a Computer Science background and experience across AWS, Azure, and automation workflows.',
  skills: 'Core strengths: AWS, Azure, Terraform, Docker, CI/CD, Python, TypeScript, React, PostgreSQL.',
  projects: 'Featured projects include PhantomStrike, Ops Hero, SeekhoKids, and KnowHive.',
  experience: 'Current role: Associate Consultant at Visionet Systems Inc. Past experience: Software Engineer & DevOps Intern at Experts Cloud.',
  contact: 'Use the contact page or email csmuhammadwahaj@gmail.com to reach out.',
  clear: 'clear'
};

export function TerminalDemo() {
  const [input, setInput] = useState('help');
  const output = useMemo(() => {
    const command = input.trim().toLowerCase();
    if (!command) return 'Type a command to get started.';
    if (command === 'clear') return 'Terminal cleared.';
    return commandMap[command] ?? `Command not found: ${command}. Try help.`;
  }, [input]);

  return (
    <div className="rounded-3xl border border-border bg-[#0b1220] p-5 text-sm text-slate-200 shadow-soft">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>

      <div className="space-y-2 font-mono text-[13px] leading-6">
        <p className="text-emerald-300">$ {input}</p>
        <p className="whitespace-pre-line text-slate-300">{output}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {Object.keys(commandMap).map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => setInput(command)}
            className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-200 hover:border-sky-500 hover:text-sky-300"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
}
