// Central site/profile data used across the portfolio shell.

export const profile = {
  name: "Luis Manzanero",
  nameLines: ["Luis", "Manzanero"],
  tagline: "METAL · EARTH · CODE",
  role: "Full Stack Web Developer",
  email: "manzanero.luis1995@gmail.com",
  avatar: "/luis.webp",
};

export const socials = [
  { name: "github", href: "https://github.com/lmanzanero", label: "GitHub" },
  {
    name: "instagram",
    href: "https://www.instagram.com/luismanzanero95/",
    label: "Instagram",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/luis-manzanero/",
    label: "LinkedIn",
  },
] as const;

export const navItems = [
  { label: "about", href: "/", icon: "about", mobileLabel: "about" },
  { label: "resume", href: "/resume", icon: "resume", mobileLabel: "resume" },
  { label: "projects", href: "/projects", icon: "projects", mobileLabel: "work" },
  { label: "music", href: "/music", icon: "music", mobileLabel: "music" },
] as const;

// Active when the current path equals the item, or is nested under it
// (but "/" only matches exactly so it doesn't claim every route).
export function isActive(href: string, pathname: string): boolean {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (href === "/") return clean === "/";
  return clean === href || clean.startsWith(href + "/");
}
