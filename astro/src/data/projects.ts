// Selected work — source for /projects. `tag` drives the filter chips.

export interface Project {
  name: string;
  tag: string;
  category: "web" | "mobile";
  image: string | null;
  link: string;
}

// Filter chips shown above the grid (in order). "all" is implicit-first.
export const projectFilters = [
  "all",
  "React",
  "Svelte",
  "Vue",
  "Flutter",
  "Kotlin",
  "JavaScript",
  "Astro",
] as const;

export const projects: Project[] = [
  { name: "Tickets.Mohbel", tag: "Svelte", category: "web", image: "/projects/tickets.mohbel.webp", link: "https://tickets.mohbel.com/" },
  { name: "Myogai — AI & Yoga", tag: "React", category: "web", image: "/projects/myogai.png", link: "https://www.myogai.com/" },
  { name: "Wise Fool Localization", tag: "Astro", category: "web", image: "https://i0.wp.com/wisefoollocalization.com/wp-content/uploads/2025/03/Joker-sMALL.jpg?w=996&ssl=1", link: "https://wisefoollocalization.vercel.app/" },
  { name: "Magic Movement", tag: "Svelte", category: "web", image: "https://magicmovement.org/MagicMovement.org_files/Logo_Header.png", link: "https://magicmovement.org/" },
  { name: "ESL Real-Time Games", tag: "Svelte", category: "web", image: "https://esl-games.vercel.app/esl-social.jpg", link: "https://esl-games.vercel.app/" },
  { name: "ESL Word Sorter", tag: "Svelte", category: "web", image: "/projects/esl-word-sorter.png", link: "https://eslkit.org/esl-words-sorter" },
  { name: "ESL Whack-a-Mole", tag: "Svelte", category: "web", image: "https://esl-games.vercel.app/whack-a-mole.webp", link: "https://esl-games.vercel.app/whack-a-mole" },
  { name: "Wheel of Names", tag: "Svelte", category: "web", image: "https://esl-games.vercel.app/wheel-of-names.webp", link: "https://esl-games.vercel.app/wheel-of-names" },
  { name: "Score Keeper", tag: "Svelte", category: "web", image: "https://esl-games.vercel.app/score-keeper.png", link: "https://esl-games.vercel.app/score-keeper" },
  { name: "Gift Cards Belize", tag: "React", category: "web", image: "/projects/gift-cards-bz.png", link: "https://giftcards.bz/" },
  { name: "Geolittered.org", tag: "React", category: "web", image: "/projects/ecocrypt.org.png", link: "https://geo-littered.vercel.app/" },
  { name: "Belize COVID Tracker", tag: "JavaScript", category: "web", image: "/projects/belize-covid.png", link: "https://lmanzanero.github.io/belize-coronavirus-tracker/" },
  { name: "BettaPay", tag: "Vue", category: "web", image: "/projects/bettapay.png", link: "https://bettapay.app/" },
  { name: "BettaPay Mobile", tag: "Flutter", category: "mobile", image: "/projects/bettapay-mobile.png", link: "https://bettapay.app/" },
  { name: "Geolittered Mobile", tag: "Flutter", category: "mobile", image: "/projects/ecocrypt-mobile.png", link: "https://github.com/GeoLitter/mobile-app" },
  { name: "Belizing Payments", tag: "Kotlin", category: "mobile", image: "/projects/belize-pay.png", link: "https://payments.belizing.com/" },
  { name: "React Firestore Store", tag: "React", category: "web", image: "/projects/react-firebase-store.png", link: "https://lmanzanero.github.io/firebase-react-store/" },
  { name: "Weather App", tag: "JavaScript", category: "web", image: "/projects/belize-weather-app.png", link: "https://weather-app-production-205a.up.railway.app/" },
  { name: "JS Calculator", tag: "JavaScript", category: "web", image: "/projects/js-calculator.png", link: "https://lmanzanero.github.io/functional-js-calculator/" },
];
