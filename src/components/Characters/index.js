import CharacterCard from "../CharacterCard";
import "./cards.scss";

const Characters = ({ characters = [], children }) => {
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
