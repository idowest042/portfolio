import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
    "html5",
    "css3",
    "tailwindcss",
    "shadcnui",
    "mui",
    "daisyui",
    "headlessui",
    "swiper",
    "javascript",
    "typescript",
    "vite",
    "react",
    "nextdotjs",
    "nextui",
    "nextdns",
    "reactrouter",
    "datefns",
    "firebase",
    "json",
    "dotenv",
    "axios",
    "stripe",
    "lottiefiles",
    "reactquery",
    "reacttable",


    "nodedotjs",
    "express",
    "jsonwebtokens",
    "mongodb",
    "mongoose",

    "npm",
    "bun",
    "pnpm",
    "yarn",
    "github",
    "git",
    "figma",
    "codepen",
    "vercel",
    "netlify",
    "gnubash",
    "hyper",
];

export function SkillCloud() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-dark-lite">
            <IconCloud images={images} />
        </div>
    );
}
