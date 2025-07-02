# Tekly Studio — Agency Website

A sleek, fully functional agency website built with Next.js App Router, Tailwind CSS, and Framer Motion.  
The project is modular, responsive, and deployed on Vercel.
https://teklystudio-website.vercel.app/

---

## Features

- Fully modular components for easy updates and debugging
- hero Section, testimonals, Services, Pricing, FAQ, Footer
- Calendar booking integration (WIP)
- Functional contact form with serverless API route
- Modern animations and hover effects
- Original, clean design with refactored Aceternity UI components

---

## Tech Stack

- Framework: Next.js 13+ 
- Styling: Tailwind CSS v4
- Animations: Framer Motion
- UI Components: Aceternity 
- Deployment: Vercel

---

## Running Locally

1. Clone the repository

   ```bash
   Once cloned
   cd agency
   ```

2. Install dependencies

   ```bash
   npm install
   SMTP_HOST=smtp.gmail.com 
   ```
2.5 (optional) Set up .env.local if you want the contact form to be functional,

   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=youremail@gmail.com
   SMTP_PASS=yourpasskey
   CONTACT_RECEIVER=your@gmail.com  
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000`

---

## To-Do

- Add spam protection and rate-limiting to the contact form
- Complete pricing plan actions
- Improve SEO and metadata
- Add analytics and error monitoring

---
