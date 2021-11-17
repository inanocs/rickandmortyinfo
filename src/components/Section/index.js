import "./section.scss";
const Section = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export default Section;
