# webdev-client

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)

**Kai Zhu** · CS5610 Web Development · Fall 2026

A Next.js app for the course labs and **Kambaz**, a Canvas-style learning management system built over the semester.

## Assignments

Each assignment lives on its own branch of this repo.

| Branch | What's in it |
| ------ | ------------ |
| `a1` | Lab 1 HTML exercises and the plain-HTML Kambaz prototype |
| `a2` | Lab 2 CSS exercises, plus Kambaz restyled with Tailwind and React Icons |

## Project layout

```
app/
├── labs/        # Lab exercises (lab1, lab2, ...)
└── (kambaz)/    # Kambaz: account, dashboard, courses
public/images/   # Course card images and logo
```

## Getting started

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000/labs for the labs index
- http://localhost:3000 for Kambaz (redirects to sign-in)
