import { useLocation, useNavigate } from "react-router-dom";
import Characters from "../components/Characters/Characters";
import Paginator from "../components/Paginator/Paginator";
import SearchForm from "../components/SearchForm/SearchForm";
import Section from "../components/Section/Section";
import useHttp from "../hooks/useHttp";
import { settings } from "../util/settings";
import { CharacterPaginated, PaginatorOnChangeEvent } from "../types";
import Loader from "../components/Loader/Loader";
const CharactersPage = () => {
  document.title = "Characters";
  const navigate = useNavigate();
  const location = useLocation();
  const pageSelected =
    location.search === "" || !location.search.includes("page=")
      ? 1
      : location.search
          .replaceAll("&", "?")
          .split("?")
          .filter((item) => item.includes("page"))
          .join("")
          .split("=")[1];
  const url = `${settings.CHARACTERS_URL}${location.search}`;
  const [characters, fetchData, isLoading] = useHttp<CharacterPaginated>(url);
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
    navigate(`/characters${query}`);
  };
  return (
    <>
      <Section className="section section--black ">
        <SearchForm onSearch={searchData} />
        {!isLoading && characters && !Array.isArray(characters) ? (
          <>
            <Characters characters={characters.results}>
              <Paginator
                pages={characters.info ? characters.info.pages : 0}
                actualPage={Number(pageSelected)}
                onChange={handleChange}
              />
            </Characters>
          </>
        ) : (
          <Loader />
        )}
      </Section>
    </>
  );
};

export default CharactersPage;
