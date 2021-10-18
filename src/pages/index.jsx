import { settings } from "../services/settings";
import useHttp from "../hooks/useHttp";
import { getRandomIds } from "../services/getRandomIds";
import Characters from "../components/Characters";
const Index = () => {
  const randomIds = getRandomIds(671, 6);
  const url = `${settings.CHARACTERS_URL}${randomIds.join(",")}`;
  console.log(url);
  const [characters] = useHttp(url);
  console.log(characters);

  return (
    <div>
      <section className="section">
        <Characters characters={characters} />
      </section>
    </div>
  );
};

export default Index;
