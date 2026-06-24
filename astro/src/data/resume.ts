// Work history — timeline source for /resume.

export interface Job {
  co: string;
  domain: string;
  year: string;
  role: string;
  stack: string;
  desc: string;
  link: string;
}

export const resume: Job[] = [
  {
    co: "Mohbel",
    domain: "mohbel.com",
    year: "2024 — now",
    role: "Full Stack Web Developer",
    stack: "Svelte · SvelteKit · Postgres · DrizzleORM · Node",
    desc: "Build & maintain the company's Fleet Management System for bus operators and commuters in Belize.",
    link: "https://mohbel.com/",
  },
  {
    co: "Myogai",
    domain: "myogai.com",
    year: "2021",
    role: "Full Stack Web Developer",
    stack: "React · Node · MediaPipe",
    desc: "AI training web app turning any device into a personal AI trainer — auth, payments, and complex UX around the MediaPipe network.",
    link: "https://myogai.com/",
  },
  {
    co: "Nebula Core",
    domain: "nebulacore.tech",
    year: "2020",
    role: "Full Stack & Mobile Developer",
    stack: "Cross-platform",
    desc: "Part of a team of international engineers building the technologies of tomorrow.",
    link: "https://nebulacore.tech/",
  },
  {
    co: "Gift Cards Belize",
    domain: "giftcards.bz",
    year: "2020",
    role: "Front-end Web Developer",
    stack: "Vue · TypeScript",
    desc: "Built the storefront letting Belizeans buy gift cards anytime, without a credit card.",
    link: "https://giftcards.bz/",
  },
  {
    co: "Geolittered",
    domain: "geolittered.org",
    year: "2018",
    role: "Full Stack Web Developer",
    stack: "React · Next · Node",
    desc: "A social network to enforce environmental laws — report illegal activity with evidence. My Galen University final project, now open-source.",
    link: "https://geo-littered.vercel.app/",
  },
  {
    co: "Belizing.com",
    domain: "belizing.com",
    year: "2018 — 20",
    role: "Content Creator & Android Dev",
    stack: "Kotlin · Node · Alexa Skills",
    desc: "Built Belizing Payments (Android) for the largest tours marketplace in Belize; edited video & podcasts.",
    link: "https://payments.belizing.com/",
  },
  {
    co: "Galen University",
    domain: "galen.edu.bz",
    year: "2016 — 18",
    role: "Web Developer & Content Creator",
    stack: "WordPress · JavaScript",
    desc: "Work scholarship for the Environmental Science degree; built The Soaring Eagle, the school's main blog.",
    link: "https://www.galen.edu.bz/news/",
  },
  {
    co: "DegaSolutions",
    domain: "degasolutions",
    year: "2015 — 16",
    role: "Front-end Web Developer",
    stack: "Angular · Ionic · WordPress",
    desc: "Remote role building a movie recommendation app driven by user interaction.",
    link: "#",
  },
];
