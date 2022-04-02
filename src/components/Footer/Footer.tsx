import { FooterProps, ExternalNavigationLinks } from "../../types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.scss";

const listNavigationLinks: ExternalNavigationLinks[] = [
  {
    name: "Github Repository",
    path: "https://github.com/inanocs/rickandmortyinfo",
    icon: <GitHubIcon />,
  },
  {
    name: "Linkedin Profile",
    path: "https://www.linkedin.com/in/fernando-cabezas-sanchez/",
    icon: <LinkedInIcon />,
  },
];

const actualYear = new Date().getFullYear();

const Footer: React.FC<FooterProps> = ({ color }) => {
  return (
    <footer className={`footer footer-${color}`}>
      <ul className="footer__list">
        {listNavigationLinks.map((link) => (
          <li key={link.path}>
            <a
              className="footer__link"
              href={link.path}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <p>
        Developed by:{" "}
        <a
          href="https://www.linkedin.com/in/fernando-cabezas-sanchez/"
          className="footer__link footer__link--border-bottom"
          target="_blank"
          rel="noreferrer"
        >
          inanocs
        </a>
        {` - ${actualYear}`}
      </p>
      <p>
        API Creator and Icons by:{" "}
        <a
          href="https://axelfuhrmann.com/"
          className="footer__link footer__link--border-bottom"
          target="_blank"
          rel="noreferrer"
        >
          Axel Fuhrmann
        </a>
      </p>
    </footer>
  );
};

export default Footer;
