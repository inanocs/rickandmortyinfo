import { useLocation, useNavigate } from "react-router";
import Characters from "../components/Characters/Characters";
import Paginator from "../components/Paginator/Paginator";
import SearchForm from "../components/SearchForm/SearchForm";
import Section from "../components/Section/Section";
import useHttp from "../hooks/useHttp";
import { settings } from "../util/settings";
import { CharacterPaginated, PaginatorOnChangeEvent } from "../types";
const CharactersPage = () => {
  document.title = "Characters";
  const navigate = useNavigate();
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
  const [characters, fetchData] = useHttp<CharacterPaginated>(url);
  const handleChange: PaginatorOnChangeEvent = (event, page) => {
    const pageSelected = page;
    let querySearch = "";
    if (location.search !== "") {
      if (location.search.includes("?page")) {
        querySearch = location.search.replace(
          /\?page=\d{0,}/,
          `?page=${pageSelected}`
        );
      } else {
        querySearch = location.search.includes("&page")
          ? location.search.replace(/&page=\d{0,}/, `&page=${pageSelected}`)
          : `${location.search}&page=${pageSelected}`;
      }
    } else {
      querySearch = `?page=${pageSelected}`;
    }
    navigate(`/characters${querySearch}`);
    fetchData(`${settings.CHARACTERS_URL}${querySearch}`);
  };

  const searchData = (query: string) => {
    fetchData(`${settings.CHARACTERS_URL}${query}`);
    navigate(`/characters${query}`);
  };
  return (
    <>
      <Section className="section section--black ">
        {characters && !Array.isArray(characters) ? (
          <>
            <SearchForm onSearch={searchData} />
            <Characters characters={characters.results}>
              <Paginator
                pages={characters.info ? characters.info.pages : 0}
                actualPage={Number(pageSelected)}
                onChange={handleChange}
              />
            </Characters>
          </>
        ) : (
          <h2 className="section__text--center">Cargando...</h2>
        )}
      </Section>
    </>
  );
};

export default CharactersPage;
