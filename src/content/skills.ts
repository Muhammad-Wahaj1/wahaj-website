export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    description: 'Core public cloud adoption and platform services.',
    items: ['Amazon Web Services', 'Microsoft Azure']
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Infrastructure automation and release engineering.',
    items: ['Terraform', 'Docker', 'CI/CD', 'Azure DevOps', 'GitHub Actions', 'Infrastructure as Code', 'Release Management']
  },
  {
    title: 'Programming',
    description: 'Primary languages used in engineering and automation.',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Frameworks',
    description: 'Modern app and service development stacks.',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI']
  },
  {
    title: 'Databases',
    description: 'Data storage and application integration knowledge.',
    items: ['PostgreSQL', 'MongoDB']
  },
  {
    title: 'Tools',
    description: 'Daily engineering and operational tooling.',
    items: ['Git', 'GitHub', 'Azure Repos', 'Linux', 'Visual Studio Code']
  }
];
