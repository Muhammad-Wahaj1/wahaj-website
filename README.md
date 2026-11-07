# Muhammad Wahaj Portfolio

A premium, responsive portfolio website for Muhammad Wahaj built with Next.js, TypeScript, Tailwind CSS, and a design system shaped around a dark SaaS-inspired aesthetic.

## Features

- Premium homepage and landing experience
- About, experience, certifications, and contact pages
- Project gallery with search and category filters
- Theme switching with persistent dark/light mode
- Contact form with client-side validation and server-side validation
- Resume download support
- SEO metadata and sitemap generation
- Production-ready build and test setup

## Local development

1. Install dependencies:
   npm install
2. Copy the environment template:
   copy .env.example .env.local
3. Update the environment values in `.env.local` as needed.
4. Start the app:
   npm run dev
5. Open http://localhost:3000

## Environment variables

Create a `.env.local` file with values like:

- `RESEND_API_KEY`: API key for the Resend email service
- `CONTACT_EMAIL`: destination email for contact messages (`csmuhammadwahaj@gmail.com`)
- `NEXT_PUBLIC_SITE_URL`: public site URL for metadata and SEO output
- `NEXT_PUBLIC_GITHUB_URL`: GitHub profile URL (`https://github.com/Muhammad-Wahaj1`)
- `NEXT_PUBLIC_LINKEDIN_URL`: LinkedIn profile URL (`https://www.linkedin.com/in/csmuhammadwahaj`)
- `NEXT_PUBLIC_AVAILABILITY`: optional availability status

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — linting
- `npm run typecheck` — TypeScript validation
- `npm run test` — Vitest suite

## Production deployment

This project is designed for Vercel deployment. Connect the repository, configure environment variables in the Vercel project settings, and deploy the main branch for production.

## Notes

- The portfolio uses configurable content in the `src/content` folder.
- Replace placeholder social URLs and contact details with the correct public links before launch.
- The resume file is stored in `public/resume.pdf`.
