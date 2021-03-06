import Characters from "../components/Characters/Characters";
import Section from "../components/Section/Section";
import useHttp from "../hooks/useHttp";
import { getRandomIds } from "../util/getRandomIds";
import { settings } from "../util/settings";
import { Character } from "../types";
import Loader from "../components/Loader/Loader";
const randomIds = getRandomIds(671, 6);
const url = `${settings.CHARACTERS_URL}${randomIds.join(",")}`;
const Home = () => {
  document.title = "Home";
  const [characters] = useHttp<Character>(url);
  return (
    <>
      <Section className="section section--black ">
        {characters && Array.isArray(characters) ? (
          <Characters characters={characters} />
        ) : (
          <Loader />
        )}
      </Section>
    </>
  );
};

export default Home;
