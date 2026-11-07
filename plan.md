# Personal Portfolio Website — Complete Project Specification

> **Project:** Personal Portfolio Website  
> **Owner:** Muhammad Wahaj  
> **Primary Identity:** Cloud & DevOps Engineer | Associate Consultant at Systems Limited  
> **Purpose:** Build a premium, modern, interactive, responsive, and production-ready personal portfolio that showcases professional experience, technical expertise, projects, certifications, and career achievements.

---

# 1. Project Vision

Build a high-quality personal portfolio that communicates technical expertise, professionalism, creativity, and engineering capabilities.

The website should:

- Establish a strong professional online presence.
- Showcase Cloud, DevOps, AWS, Azure, Terraform, Docker, CI/CD, and infrastructure experience.
- Demonstrate full-stack development capabilities through selected projects.
- Highlight professional experience and Microsoft certifications.
- Provide recruiters and potential clients with an easy way to explore work and get in touch.
- Be visually impressive without sacrificing usability, accessibility, performance, or maintainability.
- Work beautifully on desktop, tablet, and mobile.
- Be optimized for search engines and social sharing.

**Design direction:** Premium developer portfolio, minimal but visually rich, modern SaaS-inspired interface, subtle gradients, glass effects used selectively, sophisticated typography, smooth animations, and interactive technical elements.

The website must feel custom-designed rather than like a generic portfolio template.

# 2. Recommended Technology Stack

Use a modern, maintainable, production-ready technology stack.

| Category | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Animations | Framer Motion / Motion |
| Smooth scrolling | Lenis (optional) |
| 3D elements | React Three Fiber (optional, only if useful) |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Content management | MDX / structured TypeScript content |
| Theme | next-themes |
| Analytics | Google Analytics or Vercel Analytics |
| Deployment | Vercel |
| Version control | Git + GitHub |

### Technical requirements

- Use the latest stable compatible versions when implementation begins.
- Use Next.js App Router.
- Use Server Components by default.
- Use Client Components only where interactivity requires them.
- Use strict TypeScript.
- Build reusable components and layouts.
- Follow clean architecture and separation of concerns.
- Avoid unnecessary dependencies.
- Avoid excessive client-side JavaScript.
- Use optimized images and fonts.
- Keep all sensitive credentials in environment variables.
- Never expose API keys or email service credentials in frontend code.

# 3. Design System

## 3.1 Visual Identity

Create a consistent design system.

**Recommended direction:**

- Primary theme: Dark.
- Secondary theme: Light.
- Background: Deep navy/charcoal rather than pure black.
- Accent colors: Electric blue, cyan, and subtle violet.
- Text: High-contrast neutral white/gray in dark mode.
- Cards: Subtle borders and layered surfaces.
- Gradients: Restrained, primarily for highlights and visual emphasis.

Avoid making every section glow or use gradients. The design should remain sophisticated.

## 3.2 Typography

Use a modern typography combination:

- Headings: Geist or Space Grotesk.
- Body: Inter or Geist Sans.
- Monospace: JetBrains Mono.

Typography must establish a clear visual hierarchy.

## 3.3 Design Principles

- Consistent spacing and alignment.
- Strong visual hierarchy.
- Generous whitespace.
- Subtle shadows and borders.
- Smooth transitions.
- Clear interactive states.
- Consistent border radius.
- No overcrowded sections.
- No unnecessary decorative elements.
- Mobile-first responsive layouts.

## 3.4 Responsive Breakpoints

Support:

- Mobile: 320px–639px.
- Tablet: 640px–1023px.
- Desktop: 1024px–1439px.
- Large desktop: 1440px and above.

Test the layout at common screen widths, not just the default desktop resolution.

# 4. Website Architecture and Navigation

Create the following primary navigation:

1. Home
2. About
3. Experience
4. Skills
5. Projects
6. Certifications
7. Contact

Additional navigation actions:

- Download Resume.
- GitHub profile.
- LinkedIn profile.
- Theme switcher.
- Mobile navigation menu.

The navigation should be sticky or fixed, with a polished appearance.

Include active-section highlighting when scrolling through the homepage.

Use smooth anchor navigation and account for the fixed header when scrolling.

# 5. Homepage

The homepage is the most important part of the portfolio.

It should immediately communicate who I am, what I do, and what I can offer.

## 5.1 Hero Section

Create an impressive hero section occupying the initial viewport.

**Main heading:**

Hi, I'm Muhammad Wahaj.

**Professional headline:**

Cloud & DevOps Engineer | Associate Consultant

**Supporting text:**

I build, automate, and maintain cloud infrastructure and deployment workflows, with experience across AWS, Azure, Terraform, Docker, CI/CD, and modern software development.

Include:

- Professional introduction.
- Clear primary CTA: Explore My Work.
- Secondary CTA: Download Resume.
- Contact Me action.
- LinkedIn and GitHub icons.
- Availability indicator, only if accurate.
- Subtle animated background.
- Optional animated terminal or technical visualization.
- Scroll indicator.

### Hero animation ideas

- Text reveal animation.
- Subtle gradient movement.
- Animated grid or particle background.
- Floating technology labels.
- Terminal typing animation displaying actual technical commands.

Animations must not interfere with reading or accessibility.

## 5.2 Quick Introduction

A compact introduction explaining my professional direction.

Emphasize:

- Cloud infrastructure.
- DevOps automation.
- CI/CD and release management.
- Infrastructure as Code.
- Cloud operations.
- Full-stack development background.

## 5.3 Technology Highlights

Show important technologies through attractive icon-based cards or badges.

Suggested categories:

- Cloud: AWS, Microsoft Azure.
- Infrastructure as Code: Terraform.
- Containers: Docker.
- CI/CD: Azure DevOps, GitHub Actions.
- Development: Python, TypeScript, JavaScript.
- Frameworks: React, Next.js, Node.js, FastAPI.
- Databases: PostgreSQL, MongoDB, SQL.
- Tools: Git, GitHub, Azure Repos.

Use actual technology logos where possible.

## 5.4 Featured Projects

Show 3–4 featured projects.

Each project card should include:

- Project title.
- Short description.
- Main technologies.
- Project thumbnail.
- GitHub link, when public.
- Live demo, when available.
- View details action.

Include a View All Projects CTA.

## 5.5 Professional Experience Preview

Show the current professional position and previous experience in a compact timeline.

Include:

- Company.
- Position.
- Employment dates.
- Short description.
- View Experience CTA.

## 5.6 Certifications Preview

Highlight the most relevant Microsoft certifications.

Include certification badges and a link to view all credentials.

## 5.7 Contact CTA

Finish the homepage with a strong call to action:

"Have a project, opportunity, or just want to connect?"

Buttons:

- Get in Touch.
- Connect on LinkedIn.

# 6. About Page / Section

Create a detailed professional introduction.

### Content

**Professional identity:** Cloud & DevOps Engineer with a Computer Science background and experience in cloud infrastructure, automation, deployment workflows, and software engineering.

Include:

- Professional background.
- Technical interests.
- Career journey.
- Approach to engineering.
- Areas of expertise.
- Education.

### Education

**Government College University Faisalabad**

- Bachelor of Science in Computer Science.
- September 2021 – June 2025.
- CGPA: 3.64/4.00.

### Additional features

- Profile photograph.
- Download Resume.
- LinkedIn link.
- GitHub link.
- Optional personal interests.
- Optional career timeline.

Keep the writing professional and authentic.

# 7. Experience Section

Create a professional experience timeline.

## 7.1 Systems Limited

**Position:** Associate Consultant  
**Domain:** Cloud & DevOps / Cloud Managed Services  
**Employment:** July 2026 – Present

Showcase relevant responsibilities and technologies:

- Cloud infrastructure and operational support.
- AWS infrastructure exposure.
- Terraform and Infrastructure as Code.
- Docker and containerization.
- Azure DevOps pipelines and release management.
- Azure Portal and virtual machine deployments.
- Microsoft Dynamics 365 Finance & Operations infrastructure.
- Lifecycle Services (LCS) environment management.
- Database backups, restoration, refresh, and migration.
- Package deployments and environment maintenance.
- Production troubleshooting and service request management.
- Infrastructure monitoring and operational support.

Keep this experience Cloud & DevOps focused. D365 infrastructure should appear as an additional area of expertise rather than the entire professional identity.

Only describe tasks as hands-on responsibilities when they have actually been performed.

Do not publish confidential client names, internal systems, production screenshots, or proprietary architecture without authorization.

## 7.2 Experts Cloud

**Position:** Software Engineer & DevOps Intern  
**October 2025 – January 2026**

Include:

- React.js and FastAPI development.
- REST API development.
- PostgreSQL integration.
- CI/CD and deployment automation.
- Production support and troubleshooting.
- Contributions to PhantomStrike, an internal security platform.

Use publicly shareable descriptions only.

# 8. Skills Section

Create a visually engaging skills dashboard.

Use categories with icons, descriptions, and proficiency labels where appropriate.

### Cloud Platforms

- Amazon Web Services.
- Microsoft Azure.

### DevOps and Infrastructure

- Terraform.
- Docker.
- CI/CD.
- Azure DevOps.
- GitHub Actions.
- Infrastructure as Code.
- Release Management.

### Programming

- Python.
- JavaScript.
- TypeScript.
- SQL.

### Frameworks

- React.js.
- Next.js.
- Node.js.
- Express.js.
- FastAPI.

### Databases

- PostgreSQL.
- MongoDB.

### Tools

- Git.
- GitHub.
- Azure Repos.
- Linux.
- Visual Studio Code.

### Skill presentation

Use:

- Technology logos.
- Categorized cards.
- Compact technology badges.
- Optional skill-level indicators.

Do not invent percentages such as 95% AWS or 90% Docker. Avoid meaningless skill progress bars.

# 9. Projects Section

This should be one of the strongest sections.

Build a project gallery with filtering, search, and detailed project pages.

## 9.1 Project Categories

- Cloud & DevOps.
- Full-Stack Development.
- Automation.
- Security.
- Other Engineering Projects.

## 9.2 Initial Projects

Use the following as initial content candidates. Verify details and availability before publishing.

### PhantomStrike

An internal security platform developed during my Experts Cloud experience.

Possible highlights:

- React frontend.
- FastAPI backend.
- Authentication integrations.
- Security reporting workflows.
- S3 upload and report handling.
- AI-assisted penetration testing report summaries.

### Ops Hero

Security automation and vulnerability assessment platform.

Possible highlights:

- FastAPI.
- React frontend.
- PostgreSQL.
- AWS S3.
- OpenAI integration.
- Security scanning and reporting workflows.

### SeekhoKids

A web-based educational platform.

Possible highlights:

- Next.js.
- TypeScript.
- Tailwind CSS.
- MongoDB.
- Backend route handlers.
- VPS deployment and process management.

### KnowHive

Skills-based learning and tutoring platform.

Possible highlights:

- React.
- Node.js.
- MongoDB.
- OpenAI integration.
- Assessment workflows.

## 9.3 Project Details Page

Each project should have a dedicated route.

Example:

`/projects/ops-hero`

Include:

- Project overview.
- Problem statement.
- Solution.
- Architecture.
- Technologies used.
- Key features.
- My contributions.
- Screenshots or diagrams.
- Challenges and solutions.
- GitHub repository.
- Live demo.
- Related projects.

Do not fabricate metrics, architecture details, or performance improvements.

## 9.4 Project Filtering

Implement:

- Search by project name.
- Category filtering.
- Technology filtering.
- Featured-only filter.
- Clear filters.
- Responsive grid layout.

Add polished empty states and loading states where applicable.

# 10. Certifications and Achievements

Create a dedicated certification section.

Initial verified certification content should include:

**Microsoft Certified: Azure Administrator Associate (AZ-104)**

- Issuer: Microsoft.
- Certification date: October 2026.
- Credential verification URL: To be added.
- Official badge: To be added.

Include other Microsoft certifications only after confirming their exact names, dates, and credentials.

### Certification card functionality

- Certification logo or badge.
- Name.
- Issuing organization.
- Issue date.
- Credential ID, only if intended for public display.
- Verify Credential button.
- Credential URL.
- Optional credential image.

### Additional achievements

Include relevant technical training, courses, and professional achievements in a separate category.

Do not present training completion certificates as professional certifications.

# 11. Contact Section

Create a fully functional contact experience.

### Contact information

- Professional email.
- LinkedIn.
- GitHub.
- Optional location: Pakistan.

### Contact form fields

- Name.
- Email.
- Subject.
- Message.

### Form functionality

- Client-side validation.
- Server-side validation using Zod.
- Required field validation.
- Email validation.
- Character limits.
- Loading state.
- Success confirmation.
- Error handling.
- Spam protection.
- Rate limiting.
- Honeypot field or equivalent.
- Accessible validation messages.

### Email integration

Use Resend with a server-side API route or Server Action.

The form should send messages to my configured email address.

Use environment variables:

`RESEND_API_KEY`
`CONTACT_EMAIL`
`NEXT_PUBLIC_SITE_URL`

Never expose private email service credentials in the browser.

Provide an alternative email link if the contact service fails.

# 12. Resume Functionality

Provide a professional downloadable PDF resume.

Requirements:

- Download Resume button in the navbar.
- Download Resume button in the hero section.
- Resume link in the footer.
- Open resume in a new tab.
- Use a version-controlled PDF stored in the public directory.

Example:

`/resume.pdf`

The resume should be ATS-friendly and consistent with the website's professional identity.

# 13. Modern Website Features

Implement the following features where they provide real user value.

## 13.1 Dark / Light Mode

- Dark mode as the default.
- Light mode option.
- Smooth theme transition.
- Persistent preference.
- Respect system preference on first visit.
- Avoid theme flashing on initial page load.

## 13.2 Interactive Navigation

- Sticky navbar.
- Active section indicator.
- Smooth scrolling.
- Mobile navigation drawer.
- Responsive menu.
- Keyboard navigation.
- Close menu on navigation.

## 13.3 Scroll Animations

Use Motion for:

- Fade-in.
- Slide-up.
- Staggered card entrance.
- Text reveals.
- Subtle hover transitions.
- Section transitions.

Respect `prefers-reduced-motion`.

Avoid excessive animation and animation that causes layout shifts.

## 13.4 Custom Cursor

Optional desktop-only custom cursor.

Requirements:

- Must not interfere with normal pointer behavior.
- Disabled on touch devices.
- Respect accessibility preferences.
- Use only if it enhances the design.

## 13.5 Back to Top

Provide a floating back-to-top button after the user scrolls down.

## 13.6 Scroll Progress

Add a subtle page-scroll progress indicator.

## 13.7 Command Palette

Optional keyboard-accessible command menu.

Shortcut: `Ctrl + K` / `Cmd + K`.

Possible commands:

- Navigate to Home.
- Open About.
- View Projects.
- View Experience.
- Open Certifications.
- Download Resume.
- Contact Me.
- Toggle Theme.
- Open GitHub.
- Open LinkedIn.

## 13.8 Interactive Terminal

Add an optional terminal-style component.

Example commands:

- `help`
- `about`
- `skills`
- `projects`
- `experience`
- `contact`
- `clear`

Commands should return real website information, not fake system output.

## 13.9 GitHub Integration

Optional GitHub activity section.

Possible features:

- Public repositories.
- Repository descriptions.
- Primary programming languages.
- Stars and forks.
- Repository links.
- Contribution graph.

Use the GitHub API or a reliable public data source.

Requirements:

- Handle API errors.
- Cache results.
- Respect rate limits.
- Provide a graceful fallback.
- Never expose private repositories.

Only show GitHub activity if it adds value and can be maintained reliably.

## 13.10 Availability Indicator

Optional hiring or collaboration status.

Make this editable from the site's content configuration.

Never show an inaccurate availability status.

## 13.11 Custom 404 Page

Create an attractive 404 page with:

- Friendly error message.
- Back to homepage.
- Navigation links.
- Consistent visual identity.

## 13.12 Loading and Empty States

Design consistent states for:

- Contact submission.
- Project filtering.
- API failures.
- GitHub data loading.
- Empty search results.
- Missing project content.

# 14. Additional Pages and Routes

Recommended routing structure:

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/about` | Detailed introduction |
| `/experience` | Professional experience |
| `/projects` | Project gallery |
| `/projects/[slug]` | Project details |
| `/certifications` | Credentials |
| `/contact` | Contact form |
| `/resume` | Resume viewing or redirect |
| `/privacy` | Privacy policy |
| `/404` | Custom not-found page |

Use the homepage as the primary experience, with dedicated routes for detailed content.

# 15. SEO and Social Sharing

Implement complete technical SEO.

### Metadata

- Unique page titles.
- Meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Twitter/X card metadata.
- Favicon.
- Web manifest.
- Robots.txt.
- Sitemap.xml.

### Structured Data

Use JSON-LD where appropriate:

- Person.
- WebSite.
- ProfilePage.
- CreativeWork for selected projects.

### SEO content

Naturally target relevant keywords:

- Muhammad Wahaj.
- Cloud & DevOps Engineer.
- DevOps Engineer Pakistan.
- AWS.
- Azure.
- Terraform.
- Docker.
- Associate Consultant.
- Cloud Infrastructure.

Avoid keyword stuffing.

Create a professional Open Graph image for social sharing.

# 16. Performance Optimization

Performance is a core requirement.

Target good Core Web Vitals and a high Lighthouse score.

Requirements:

- Server-side rendering or static rendering where appropriate.
- Static generation for portfolio content.
- Next.js Image optimization.
- WebP/AVIF image formats.
- Font optimization.
- Lazy loading.
- Code splitting.
- Dynamic imports for heavy components.
- Avoid unnecessary third-party scripts.
- Minimize client-side JavaScript.
- Proper caching.
- Avoid large background videos.
- Prevent layout shifts.

Target Lighthouse scores:

- Performance: 90+.
- Accessibility: 95+.
- Best Practices: 95+.
- SEO: 95+.

These are targets, not claims to publish before testing.

# 17. Accessibility

Follow WCAG 2.2 AA principles.

Implement:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Proper color contrast.
- Accessible form labels.
- Screen-reader-friendly controls.
- Alt text for meaningful images.
- Reduced-motion support.
- Correct heading hierarchy.
- Accessible dialogs and menus.
- Appropriate ARIA attributes.

Do not use ARIA when native HTML semantics already provide the required behavior.

# 18. Security and Privacy

Requirements:

- Server-side input validation.
- Contact form rate limiting.
- Spam protection.
- Environment variable management.
- Secure HTTP headers.
- No exposed secrets.
- Dependency updates.
- No unnecessary tracking.
- Privacy policy describing actual data collection.
- No storage of contact messages unless required and disclosed.

If analytics or third-party services are used, document what data they collect.

# 19. Content Management and Maintainability

The portfolio should be easy to update without modifying complex UI components.

Create a centralized content structure.

Suggested organization:

`src/content/profile.ts`
`src/content/experience.ts`
`src/content/skills.ts`
`src/content/projects.ts`
`src/content/certifications.ts`
`src/content/socials.ts`

Keep:

- Personal details.
- Job titles.
- Employment dates.
- Descriptions.
- Technologies.
- Project links.
- Images.
- Certification details.
- Social profiles.

in centralized configuration files.

Use MDX for longer project case studies if useful.

### Future CMS support

Structure the content layer so a CMS can be added later without rebuilding the presentation layer.

A headless CMS is not necessary for the initial release.

# 20. Recommended Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── certifications/
│   │   └── og/
│   ├── icons/
│   ├── resume.pdf
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   ├── certifications/
│   │   ├── contact/
│   │   ├── privacy/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── certifications/
│   │   ├── contact/
│   │   ├── animations/
│   │   ├── terminal/
│   │   ├── theme/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── certifications.ts
│   │   └── socials.ts
│   │
│   ├── hooks/
│   ├── lib/
│   ├── schemas/
│   └── types/
│
├── tests/
├── .env.example
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── PORTFOLIO_PLAN.md
```

The agent may adjust this structure when necessary, but it must preserve clear separation of responsibilities.

# 21. Testing and Quality Assurance

Implement testing throughout development.

### Unit testing

Use Vitest for:

- Utility functions.
- Data filtering.
- Validation schemas.
- Content helpers.

### Component testing

Use React Testing Library for:

- Navigation.
- Theme switcher.
- Contact form.
- Project filters.
- Interactive components.

### End-to-end testing

Use Playwright for:

- Homepage loading.
- Navigation.
- Responsive layouts.
- Theme switching.
- Project filtering.
- Contact form validation.
- Resume download.
- 404 handling.

### Manual testing

Verify:

- Chrome.
- Edge.
- Firefox.
- Safari where possible.
- Mobile browsers.
- Keyboard-only navigation.
- Reduced-motion settings.
- Dark and light themes.

# 22. Deployment and CI/CD

Deploy using Vercel.

### GitHub workflow

Create a GitHub Actions workflow for:

1. Dependency installation.
2. Linting.
3. Type checking.
4. Unit tests.
5. Production build.
6. Optional end-to-end tests.

### Deployment requirements

- Production deployment on the main branch.
- Preview deployments for pull requests.
- Environment variable configuration.
- Custom domain configuration.
- HTTPS.
- Deployment verification.

Use a custom domain when available.

# 23. Implementation Phases

Do not attempt to build every feature in one unstructured step.

Implement in phases.

## Phase 1 — Foundation

- Initialize Next.js.
- Configure TypeScript.
- Install Tailwind CSS.
- Configure shadcn/ui.
- Configure typography.
- Establish design tokens.
- Configure dark/light themes.
- Create global layouts.
- Create responsive navbar and footer.

**Deliverable:** Working website foundation.

## Phase 2 — Core Portfolio

- Homepage.
- Hero.
- About.
- Experience.
- Skills.
- Featured projects.
- Certifications.
- Contact.

**Deliverable:** Complete first version of the portfolio.

## Phase 3 — Project Experience

- Projects listing.
- Project filtering.
- Search.
- Project details pages.
- Case studies.
- Image galleries.
- Technology tags.

**Deliverable:** Complete project showcase.

## Phase 4 — Modern Interactions

- Motion animations.
- Scroll progress.
- Back-to-top.
- Command palette.
- Interactive terminal.
- GitHub activity.
- Advanced navigation interactions.

**Deliverable:** Interactive portfolio experience.

## Phase 5 — Functional Integrations

- Contact email integration.
- Resume download.
- Analytics.
- SEO metadata.
- Structured data.
- Sitemap and robots.
- Social sharing image.

**Deliverable:** Fully functional website integrations.

## Phase 6 — Optimization and Testing

- Accessibility audit.
- Performance optimization.
- Lighthouse testing.
- Mobile testing.
- Unit tests.
- E2E tests.
- Security review.
- Error handling.

**Deliverable:** Production-ready portfolio.

## Phase 7 — Deployment

- GitHub repository.
- CI/CD.
- Vercel deployment.
- Domain configuration.
- Production environment variables.
- Final deployment verification.

**Deliverable:** Live portfolio website.

# 24. Important Development Rules for the Coding Agent

The agent must follow these rules throughout the project.

1. Read this entire specification before starting.
2. Inspect the existing repository before creating or modifying files.
3. If the repository is empty, initialize the project cleanly.
4. If an existing application is present, preserve useful existing code.
5. Do not generate the entire application in one enormous component.
6. Build reusable components.
7. Maintain strict TypeScript types.
8. Follow accessibility best practices.
9. Do not use placeholder links that look functional.
10. Do not invent professional achievements, certifications, employment details, metrics, or project results.
11. Keep personal information and professional content centralized.
12. Use real technology icons and authentic project imagery.
13. Do not use generic stock imagery unnecessarily.
14. Do not expose private company information.
15. Ensure every button and interactive element performs its advertised action.
16. Do not leave nonfunctional forms or fake API integrations.
17. Handle errors, loading states, and empty states.
18. Avoid unnecessary dependencies and performance-heavy effects.
19. Keep the design consistent across all pages.
20. Test the website after each major implementation phase.
21. Do not claim completion until the production build and relevant tests pass.
22. Update the README with installation, development, configuration, and deployment instructions.
23. Keep the implementation maintainable and easy to extend.

# 25. Definition of Done

The project is complete only when:

- [ ] All primary pages are implemented.
- [ ] The design is polished and consistent.
- [ ] The website is fully responsive.
- [ ] Dark and light themes work.
- [ ] Navigation works on desktop and mobile.
- [ ] All project pages and filters work.
- [ ] Experience and certification content is accurate.
- [ ] Resume downloads correctly.
- [ ] Contact form sends real emails.
- [ ] Form validation and spam protection work.
- [ ] Social links work.
- [ ] SEO metadata is configured.
- [ ] Open Graph previews work.
- [ ] Sitemap and robots.txt are available.
- [ ] Accessibility checks are completed.
- [ ] Performance is optimized.
- [ ] No broken images or links remain.
- [ ] No browser console errors remain.
- [ ] Production build succeeds.
- [ ] CI/CD workflow works.
- [ ] Production deployment is verified.
- [ ] README and environment configuration are documented.

# 26. Final Design and Product Direction

The finished product should communicate:

**Muhammad Wahaj — Cloud & DevOps Engineer**

A modern engineering portfolio that combines:

- Professional identity.
- Cloud and DevOps expertise.
- Real-world engineering experience.
- Full-stack development projects.
- Microsoft certifications.
- Interactive technical demonstrations.
- Professional communication.

The website should be impressive enough to share directly with recruiters, hiring managers, engineering teams, and potential clients.

**Final priority:** Design quality, content authenticity, functionality, accessibility, performance, and maintainability—in that order of consideration, without sacrificing any of them.

Build a cohesive product, not a collection of disconnected visual effects.