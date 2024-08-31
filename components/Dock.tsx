import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileDescription,
} from "@tabler/icons-react";

const Dock: React.FC = () => {
  const links = [
    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/skxvtchy",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:Jamesli784@gmail.com",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/jamesli784/",
    },
    {
      title: "Resume",
      icon: (
        <IconFileDescription className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <FloatingDock
      // mobileClassName="translate-y-20" // only for demo, remove for production
      items={links}
    />
  );
};

export default Dock;
