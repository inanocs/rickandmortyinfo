import { settings } from "../services/settings";
import useHttp from "../hooks/useHttp";
import { getRandomIds } from "../services/getRandomIds";
import Characters from "../components/Characters";
import Section from "../components/Section";
const Index = () => {
  const randomIds = getRandomIds(671, 6);
  const url = `${settings.CHARACTERS_URL}${randomIds.join(",")}`;
  const [characters] = useHttp(url);

  return (
    <>
      <Section className="section section--black ">
        <Characters characters={characters} />
      </Section>
    </>
  );
};

export default Index;
