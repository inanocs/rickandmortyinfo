import { settings } from "../services/settings";
import useHttp from "../hooks/useHttp";
import Characters from "../components/Characters";
import Section from "../components/Section";
import Paginator from "../components/Paginator";
import { useHistory, useLocation } from "react-router";
const CharactersView = () => {
  const history = useHistory();
  const location = useLocation();
  const pageSelected =
    location.search === ""
      ? 1
      : location.search
          .replaceAll("&", "?")
          .split("?")
          .filter((item) => item.includes("page"))
          .join("")
          .split("=")[1];
  const url = `${settings.CHARACTERS_URL}${location.search}`;
  const [characters, fetchData] = useHttp(url);
  const handleChange = (event) => {
    const pageSelected = event.target.textContent;
    history.push(`/characters?page=${pageSelected}`);
    fetchData(`${settings.CHARACTERS_URL}?page=${pageSelected}`);
  };
  return (
    <>
      <Section className="section section--black ">
        <Characters characters={characters.results}>
          <Paginator
            pages={characters.info ? characters.info.pages : 0}
            actualPage={pageSelected}
            onChange={handleChange}
          />
        </Characters>
      </Section>
    </>
  );
};

export default CharactersView;
