import React from "react";
import { IconButton } from "./IconButton";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { IoDocumentTextOutline, IoLogoGooglePlaystore } from "react-icons/io5";
export const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      <IconButton
        href="https://github.com/kishanhitk"
        ariaLabel="Github"
        icon={<FiGithub />}
      />

      <IconButton
        href="https://twitter.com/jst_kishan"
        ariaLabel="Twitter"
        icon={<FiTwitter />}
      />

      <IconButton
        href="https://www.linkedin.com/in/kishanju/"
        ariaLabel="Twitter"
        icon={<FaLinkedinIn />}
      />

      <IconButton
        href="mailto:kishansharma1231@gmail.com"
        ariaLabel="Gmail"
        icon={<FiMail />}
      />
      <IconButton
        href="https://play.google.com/store/apps/dev?id=8407266026945909749"
        ariaLabel="Google Play Store"
        icon={<IoLogoGooglePlaystore />}
      />
      <IconButton
        href="/resume"
        ariaLabel="Résumé"
        icon={<IoDocumentTextOutline />}
      />
    </div>
  );
};
