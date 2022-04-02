import { Link } from "react-router-dom";
import Error from "../components/Error/Error";
import { routes } from "../components/MainNav/MainNav";
import Section from "../components/Section/Section";

const NotFoundPage = () => {
  return (
    <Section className="section section--black">
      <Error error={{ code: 404, message: "Not Found 😢" }} />
      <p className="section__text--center">
        Did you mean{" "}
        {routes.map((route, idx) => (
          <span key={route.name}>
            <Link to={route.path} className="link">
              {route.name}
            </Link>{" "}
            {idx !== routes.length - 1 && "| "}
          </span>
        ))}
        ?
      </p>
    </Section>
  );
};

export default NotFoundPage;
