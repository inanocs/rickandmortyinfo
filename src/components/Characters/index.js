import CharacterCard from "../CharacterCard";
import "./cards.scss";

const Characters = ({ characters = [] }) => {
  return (
    <ul className="cards">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </ul>
  );
};

export default Characters;
