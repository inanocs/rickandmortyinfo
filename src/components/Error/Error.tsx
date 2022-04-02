import { ErrorProps } from "../../types";
import Section from "../Section/Section";

const Error: React.FC<ErrorProps> = ({ error: { code, message } }) => {
  return (
    <Section className="section section__text--center">
      <span>
        {code} | {message}
      </span>
    </Section>
  );
};
export default Error;
