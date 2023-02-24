import { Projects } from "@types";
import JUMSBanner from "../../../public/assets/jumsbanner.webp";
import StrollBanner from "../../../public/assets/stroll.webp";
import S6Banner from "../../../public/assets/s6banner.webp";
import HMDBBanner from "../../../public/assets/hmdb.webp";
import SafeChat from "../../../public/assets/safechat.webp";
import GitGramBanner from "../../../public/assets/gitgram.webp";
import GitaGPT from "../../../public/assets/gita-gpt.png";
export const ProjectList: Projects = [
  {
    priority: 1,
    title: "JUMS Reboot",
    slug: "jums-reboot",
    summary:
      "The one stop solution for Jadavpur University students for all their exam related needs. Download admit card, grade card, exam schedule, important announcement everything in one beautiful app.",
    sourceUrl: "https://github.com/kishanhitk/jumsRebootFlutter",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.kishans.jumsRebootFlutter",
    tags: [
      "Flutter",
      "Web-Scraping",
      "Express",
      "NodeJS",
      "Puppeteer",
      "Dart",
      "JavaScript",
      "Firebase",
      "FCM",
    ],
    img: JUMSBanner,
  },
  {
    priority: 0,
    title: "Gita GPT",
    slug: "jums-reboot",
    summary:
      "Gita GPT, find solce in the wisdom of Shree Krishna 🦚. Built with Next.js and OpenAI GPT-3. It generated advices based on Gita Shlokas for your life problems. The project got featured in leading Indian news portals, including TimesNow, The Economic Times, News18, FirstPost, and more. The website has received 5,42,574+ pageviews, 3,25,11+ unique visitors, and have processed 8,09,102+ API requests. It used vercel edge functions with streaming support to generate the advices from OpenAI and stream the data in parallel making the response feel surprisingly fast. Usage many optimizations to reduce the OpenAI API usage and make it free for everyone. When the userbase started growingly rapidly, I had to implement rate-limiter to limit the maxium number of request a user can make each day.",
    liveUrl: "https://gita.kishans.in",
    tags: [
      "Next.js",
      "Streaming",
      "TypeScript",
      "OpenAI",
      "TailwindCSS",
      "Firebase",
    ],
    img: GitaGPT,
  },
  {
    priority: 1,
    title: "Stroll - The Dev Extension",
    slug: "stroll",
    summary:
      "A browser extension that automatically scrolls your browser to the most relevant answer while browsing Stack-Overflow.",
    sourceUrl: "https://github.com/kishanhitk/stroll",
    liveUrl: "http://stroll-land.vercel.app/",
    tags: ["JavaScript", "Extension", "DOM"],
    img: StrollBanner,
  },
  {
    priority: 2,
    title: "HMDB",
    slug: "hmdb",
    summary:
      "Get to know about latest movies trending in the hollywood, read summary and ratings.",
    sourceUrl: "https://github.com/kishanhitk/hmdb-next",
    liveUrl: "http://hmdb-next.vercel.app/",
    tags: ["React", "Next.js", "TypeScript", "ChakraUI", "SSG"],
    img: HMDBBanner,
  },
  {
    priority: 3,
    title: "GitGram",
    slug: "gitgram",
    summary:
      "The Instagram for developers. Login with GitHub account and start sharing your code moments with your code buddies.",
    sourceUrl: "https://github.com/kishanhitk/gitgram",
    liveUrl: "https://git-gram.netlify.app/",
    tags: ["React", "JavaScript", "MaterialUI", "Firebase", "Framer Motion"],
    img: GitGramBanner,
  },
  {
    priority: 4,
    title: "Safe Chat",
    slug: "safechat",
    summary: "Community chat app made with Next.js and Firebase.",
    sourceUrl: "https://github.com/kishanhitk/safechat_next",
    liveUrl: "https://safechat-next.vercel.app/",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "ChakraUI",
      "SSR",
      "Firebase",
      "Instant Messaging",
    ],
    img: SafeChat,
  },
  {
    priority: 5,
    title: "S6 Chat",
    slug: "s6-chat",
    summary:
      "A full featured instant messaging app made with Flutter and Firebase. Chat in group or personally, boast your new dress by uploading a profile photo. All this by simply authenticating with your phone number.",
    sourceUrl: "https://github.com/kishanhitk/S6Chat",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.kishans.s6chat&hl=en&gl=US",
    tags: ["Flutter", "Firebase", "Instant Messaging"],
    img: S6Banner,
  },
];
