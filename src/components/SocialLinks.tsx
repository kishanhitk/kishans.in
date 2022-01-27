import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { IoDocumentTextOutline, IoLogoGooglePlaystore } from "react-icons/io5";

export const SocialLinks = () => {
  const links = [
    {
      icon: <FiGithub />,
      url: "https://github.com/kishanhitk",
      ariaLabel: "Github",
    },
    {
      icon: <FiTwitter />,
      url: "https://twitter.com/jst_kishan",
      ariaLabel: "Twitter",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/kishanju",
      ariaLabel: "Linkedin",
    },
    {
      icon: <FiMail />,
      url: "mailto:kishansharma1231@gmai.com",
      ariaLabel: "Email",
    },
    {
      icon: <IoLogoGooglePlaystore />,
      url: "https://play.google.com/store/apps/dev?id=8407266026945909749",
      ariaLabel: "Google Play Store",
    },
    {
      icon: <IoDocumentTextOutline />,
      url: "/resume",
      ariaLabel: "Résumé",
    },
  ];
  return (
    <div>
      <div className="flex gap-3">
        {links.map((link) => (
          <SocialIcon
            key={link.url}
            icon={link.icon}
            href={link.url}
            aria={link.ariaLabel}
          />
        ))}
      </div>
    </div>
  );
};

const SocialIcon = ({ icon, href, aria: ariaLabel }) => {
  return (
    <button
      className="rounded-full bg-white/10 p-3 hover:bg-white/20"
      aria-label={ariaLabel}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </button>
  );
};

export default SocialLinks;
