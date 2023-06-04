import "./header.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsFileRichtext } from "react-icons/Bs";
import { BiCodeAlt } from "react-icons/bi";
import { GiMailbox } from "react-icons/Gi";

// data
import externalLinks from "../../data/JSON/externalLinks.json";

// components
import ToggleTheme from "../toggleTheme/toggleTheme";
import { IconType } from "react-icons";

// Types
interface ExternalLinks {
  name: string;
  url: string;
}

interface WebAppLinks {
  anchor: string;
  name: string;
}

export default function Header() {
  const webAppIcons: IconType[] = [
    HiOutlineHomeModern,
    BsFileRichtext,
    BiCodeAlt,
    GiMailbox,
  ];
  const networkIcons: IconType[] = [FaGithub, FaTwitter, FaLinkedin];

  const webAppLinks: WebAppLinks[] = [
    {
      anchor: "#",
      name: "Accueil",
    },
    {
      anchor: "#",
      name: "Articles",
    },
    {
      anchor: "#",
      name: "Applications",
    },
    {
      anchor: "#",
      name: "Contact",
    },
  ];

  const webAppLinksArray = webAppLinks.map((link: WebAppLinks, i: number) => {
    const WebAppIcon: IconType = webAppIcons[i];
    return (
      <li key={i} className={"navSection__wrapper__items webAppLinks"}>
        <a href={link.anchor} title={link.name}>
          {link.name} <WebAppIcon />
        </a>
      </li>
    );
  });

  const externalLinksArray = externalLinks.map(
    (link: ExternalLinks, i: number) => {
      const NetworkIcon: IconType = networkIcons[i];
      return (
        <li key={i} className={"navSection__wrapper__items networkLinks"}>
          <a title={link.name} href={link.url}>
            <NetworkIcon />
          </a>
        </li>
      );
    }
  );

  return (
    <header className="header">
      <section className={"brandingSection"}>
        <Link to={"/home"}>
          <h1>ndecr_</h1>
        </Link>
      </section>
      <section className={"navSection"}>
        <nav>
          <ul className={"navSection__wrapper"}>{webAppLinksArray}</ul>
        </nav>
      </section>
      <section className={"networkSection"}>
        <ul className={"networkSection__wrapper"}>{externalLinksArray}</ul>
        <ToggleTheme />
      </section>
    </header>
  );
}
