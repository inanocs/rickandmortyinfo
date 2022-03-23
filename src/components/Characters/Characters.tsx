import { CharactersProps } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./cards.scss";

const Characters: React.FC<CharactersProps> = ({
  characters = [],
  children,
}) => {
  return (
    <>
      <ul className="cards">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </ul>
      {children}
    </>
  );
};

export default Characters;
