import { settings } from "../services/settings";
import useHttp from "../hooks/useHttp";
import { getRandomIds } from "../services/getRandomIds";
import Characters from "../components/Characters/Characters";
import Section from "../components/Section/Section";
import { Character } from "../types";
const Home = () => {
  document.title = "Home";
  const randomIds = getRandomIds(671, 6);
  const url = `${settings.CHARACTERS_URL}${randomIds.join(",")}`;
  const [characters] = useHttp<Character>(url);
  return (
    <>
      <Section className="section section--black ">
        {characters && Array.isArray(characters) ? (
          <Characters characters={characters} />
        ) : (
          <h2>Cargando...</h2>
        )}
      </Section>
    </>
  );
};

export default Home;
