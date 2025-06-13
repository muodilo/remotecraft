# RemoreCraft

RemoreCraft is a [Next.js](https://nextjs.org) application that demonstrates modern rendering strategies including Static Site Generation (SSG), Incremental Static Regeneration (ISR), and dynamic routing using job data from the [Remotive API](https://remotive.com/remote-jobs/api).

---

## 🛠 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/remorecraft.git
cd remorecraft
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📄 Core Features

### ✅ Global Layout

- Consistent navigation bar (`Navbar`) shared across all pages.
- Font: **Work Sans**
- Color Palette:
  - **Gray**: `#F0F2F5`
  - **Blue**: `#1A80E5`

---

### 🏠 Homepage (`/`)

- Statically generated with `getStaticProps`.
- Fetches remote job listings from the Remotive API.
- Uses **Incremental Static Regeneration** to revalidate and update listings every 10–30 seconds.

---

### 📄 Job Detail Page (`/jobs/[slug]`)

- Uses `getStaticPaths` and `getStaticProps` to generate pages at build time.
- Supports `fallback: true` to handle new or on-demand job pages.
- Displays a loading state for fallback pages.

---

### 🏢 Company Page (`/company/[slug]`)

- Dynamically shows all jobs from a specific company.
- Reuses job listing component from the homepage.
- Also statically generated using `getStaticPaths` and `getStaticProps`.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Remotive API](https://remotive.com/remote-jobs/api)
- [Vercel Deployment Guide](https://nextjs.org/docs/pages/building-your-application/deploying)

---

## 🤔 Reflection

See `reflection.md` for answers to questions like:

- When to use `getStaticProps` vs `getServerSideProps`
- How ISR differs from traditional SSG
- What happens during fallback states

---

## 🚀 Deployment

This project is deployed to [Here](https://remotecraft.vercel.app/) 

---
