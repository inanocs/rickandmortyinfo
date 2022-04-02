import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Characters from "../components/Characters/Characters";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import Paginator from "../components/Paginator/Paginator";
import SearchForm from "../components/SearchForm/SearchForm";
import Section from "../components/Section/Section";
import useHttp from "../hooks/useHttp";
import { CharacterPaginated, PaginatorOnChangeEvent } from "../types";
import { settings } from "../util/settings";
const CharactersPage = () => {
  document.title = "Characters";
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const url = `${settings.CHARACTERS_URL}${location.search}`;
  const pageSelected = searchParams.get("page") || 1;
  const [characters, , error] = useHttp<CharacterPaginated>(url);

  const handleChange: PaginatorOnChangeEvent = (_event, page) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: page.toString(),
    });
  };

  const searchData = (query: string) => {
    navigate(`/characters${query}`);
  };
  return (
    <>
      <Section className="section section--black ">
        <SearchForm onSearch={searchData} />
        {characters ? (
          <>
            <Characters characters={characters.results}>
              <Paginator
                pages={characters.info ? characters.info.pages : 0}
                actualPage={Number(pageSelected)}
                onChange={handleChange}
              />
            </Characters>
          </>
        ) : error ? (
          <Error error={error} />
        ) : (
          <Loader />
        )}
      </Section>
    </>
  );
};

export default CharactersPage;
