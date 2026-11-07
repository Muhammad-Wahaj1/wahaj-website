export type ProjectCategory = 'Cloud & DevOps' | 'Full-Stack Development' | 'Automation' | 'Security' | 'Other Engineering Projects';

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  summary: string;
  technologies: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'PhantomStrike',
    slug: 'phantomstrike',
    category: 'Security',
    description: 'An internal security platform developed during the Experts Cloud experience.',
    summary: 'Security reporting workflows with authentication, upload handling, and AI-assisted analysis support.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'AWS S3', 'Python'],
    featured: true
  },
  {
    title: 'Ops Hero',
    slug: 'ops-hero',
    category: 'Cloud & DevOps',
    description: 'A security automation and vulnerability assessment platform designed to streamline reporting workflows.',
    summary: 'Focused on security scanning, automation, and operational reporting with cloud storage integrations.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'AWS S3', 'OpenAI'],
    featured: true
  },
  {
    title: 'SeekhoKids',
    slug: 'seekho-kids',
    category: 'Full-Stack Development',
    description: 'A web-based educational platform built for learning workflows and user engagement.',
    summary: 'A Next.js application with modern frontend fundamentals, backend route logic, and VPS-based deployment support.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'VPS'],
    featured: true
  },
  {
    title: 'KnowHive',
    slug: 'knowhive',
    category: 'Full-Stack Development',
    description: 'A skills-based learning and tutoring platform that supports assessment workflows.',
    summary: 'Combines learning experiences with assessments and AI-assisted support for tutoring and practice flows.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
    featured: false
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
