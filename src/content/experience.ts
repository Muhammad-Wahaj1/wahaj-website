export type ExperienceEntry = {
  company: string;
  role: string;
  domain: string;
  period: string;
  description: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Visionet Systems Inc.',
    role: 'Associate Consultant',
    domain: 'Cloud & DevOps / Cloud Managed Services',
    period: 'Current role',
    description: [
      'Provide cloud infrastructure and operational support for customer-facing environments.',
      'Support AWS infrastructure workloads and associated operational tasks.',
      'Work with Terraform and Infrastructure as Code practices to manage environment consistency and provisioning.',
      'Support Docker-based containerization workflows and application deployment readiness.',
      'Maintain Azure DevOps pipelines and release management activities for continuous delivery.',
      'Deploy and manage resources through the Azure Portal and virtual machine operations.',
      'Support Microsoft Dynamics 365 Finance & Operations infrastructure, including lifecycle environment management.',
      'Handle database backups, restoration, refresh, and migration tasks as part of environment operations.',
      'Manage package deployments, environment maintenance, and production troubleshooting workflows.',
      'Support monitoring, service request resolution, and incident handling for production systems.'
    ],
    technologies: ['AWS', 'Azure', 'Terraform', 'Docker', 'Azure DevOps', 'CI/CD', 'D365', 'LCS']
  },
  {
    company: 'Experts Cloud',
    role: 'Software Engineer & DevOps Intern',
    domain: 'Full-stack engineering and deployment',
    period: 'Earlier role',
    description: [
      'Developed frontend and API features with React.js and FastAPI.',
      'Built and integrated REST API services with PostgreSQL data access.',
      'Contributed to CI/CD workflows and deployment automation for application delivery.',
      'Supported production troubleshooting and operational fixes.',
      'Contributed to PhantomStrike, an internal security platform.'
    ],
    technologies: ['React.js', 'FastAPI', 'PostgreSQL', 'CI/CD', 'REST APIs', 'Production Support']
  }
];
