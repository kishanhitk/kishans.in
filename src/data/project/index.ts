import { Projects } from "@types";
import JUMSRebootLogo from "../../../public/assets/jumsreboot.png";
import JUMSBanner from "../../../public/assets/jumsbanner.png";
import StrollBanner from "../../../public/assets/stroll.png";
import S6Banner from "../../../public/assets/s6banner.jpg";

export const ProjectList: Projects = [
  {
    priority: 0,
    title: "JUMS Reboot",
    slug: "jums-reboot",
    summary:
      "The one stop solution for Jadavpur University students for all their exam related needs. Download admit card, grade card, exam schedule, important announcement everything in one beautiful app.",
    sourceUrl: "https://github.com/kishanhitk/jumsRebootFlutter",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.kishans.jumsRebootFlutter",
    tags: ["Flutter", "Web-Scraping", "Express", "NodeJS", "Puppeteer"],
    img: JUMSBanner,
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
