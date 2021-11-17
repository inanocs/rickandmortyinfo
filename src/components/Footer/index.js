import "./footer.scss";
const Footer = ({ color }) => {
  return (
    <footer className={`footer footer-${color}`}>
      <p className="footer__text">inanocs</p>
    </footer>
  );
};

export default Footer;
