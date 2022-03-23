import { SectionProps } from "../../types";
import "./Section.scss";
const Section: React.FC<SectionProps> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export default Section;
