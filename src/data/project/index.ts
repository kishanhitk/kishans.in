import JUMSBanner from "../../../public/assets/jumsbanner.webp";
import StrollBanner from "../../../public/assets/stroll.webp";
import S6Banner from "../../../public/assets/s6banner.webp";
import HMDBBanner from "../../../public/assets/hmdb.webp";
import SafeChat from "../../../public/assets/safechat.webp";
import GitGramBanner from "../../../public/assets/gitgram.webp";
import GitaGPT from "../../../public/assets/gita-gpt.png";
import MyPRs from "../../../public/assets/myprs-banner.png";
import type { Projects } from "../../types";

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
    priority: -1,
    title: "MyPRs",
    slug: "mypes",
    summary: /* Markdown */ ` 
    MyPRs: One link to highlight your Open-Source Contributions.
    
    
    Just had a PR merged into your favourite OSS repo? 🎉
Feeling super proud?
But how do you spotlight this achievement?
Adding every PR to your résumé isn’t feasible...


Enter MyPRs: Curate, highlight, and share your proudest contributions seamlessly. Make every merge count!

**Built with**:
- Remix.run (build fast apps following web standards)
- TailwindCSS
- Vercel (the perfect place to deploy modern web apps. I tried all alternatives and finally chose Vercel)
- Supabase
- Framer Motion
    `,
    liveUrl: "https://myprs.xyz",
    sourceUrl: "https://github.com/kishanhitk/myprs",
    tags: ["Remix", "Streaming", "TypeScript", "Framer Motion", "Supabase"],
    img: MyPRs,
  },
  {
    priority: 0,
    title: "Gita GPT",
    slug: "gita-gpt",
    summary: /* Markdown */ ` 
          **Gita GPT**: Find Solace in the wisdom of Shree Krishna 🦚
          - 📈 **Metrics**: 
            - **5,42,574+** Pageviews
            - **3,29,884+** Unique Visitors
            - **8,09,102+** OpenAI API Requests Processed
---
\n\n
- 🗞 **Media Coverage**: Featured in **TimesNow, The Economic Times, News18, and FirstPost**.
---
- 🚀 **Tech Stack**: Built with Next.js and integrated with OpenAI's GPT-3.5.
---
- ⚡ **Performance**: Employed Vercel edge functions with streaming, ensuring blazing-fast responses.
---
          - 💡 **Optimization**: Strategies to minimize OpenAI API costs and rate-limiters for equitable access, ensuring the service remains *free* for all.
`,
    // summary: `
    // Gita GPT, a source of solace inspired by the wisdom of Shree Krishna 🦚, developed using Next.js and OpenAI GPT-3.5. This unique project offers personalized advice based on verses from the Bhagavad Gita, tailored to address life's challenges. The platform quickly gained recognition, with features in prominent Indian news outlets such as **TimesNow, The Economic Times, News18**, and FirstPost.\n\nWith impressive statistics, the website has garnered over **5,42,574+** pageviews, **3,29,884+** unique visitors, and processed **8,09,102+** API requests. To deliver surprisingly fast response times, Gita GPT employed Vercel edge functions with streaming support, allowing data to be streamed in parallel while generating advice from OpenAI.\n\nTo keep the service free for all users, various optimizations were implemented to minimize OpenAI API usage. As the user base rapidly expanded, a rate-limiter was introduced to manage the maximum number of daily requests per user, ensuring a fair and accessible experience for everyone.`,
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
