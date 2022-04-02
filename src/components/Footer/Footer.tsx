import { FooterProps } from "../../types";
import "./Footer.scss";
const Footer: React.FC<FooterProps> = ({ color }) => {
  return (
    <footer className={`footer footer-${color}`}>
      <p className="footer__text">inanocs</p>
    </footer>
  );
};

export default Footer;
