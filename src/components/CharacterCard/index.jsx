import useHttp from "../../hooks/useHttp";
import Status from "../Status";

const CharacterCard = ({ character }) => {
  const [episodeInfo] = useHttp(character.episode[0]);

  const getStatusStyle = (status) => {
    if (status === "unknown") return status;

    return status === "Alive" ? "online" : "offline";
  };

  return (
    <li className="card" key={character.id}>
      <div className="card__img-wrapper">
        <img className="card__img" src={character.image} alt={character.name} />
      </div>
      <div className="card__content">
        <div className="card__info">
          <a className="card__link card__link--orange" href={character.url}>
            <h2 className="card__name">{character.name}</h2>
          </a>
          <Status
            message={`${character.status} - ${character.species}`}
            status={getStatusStyle(character.status)}
          />
        </div>
        <div className="card__info">
          <span className="card__subtitle">Last known location:</span>
          <a
            href={character.location.url}
            className="card__link card__link--orange"
          >
            {character.location.name}
          </a>
        </div>
        <div className="card__info">
          <span className="card__subtitle">First seen in:</span>
          <a
            href={character.episode[0]}
            className="card__link card__link--orange"
          >
            {episodeInfo.name}
          </a>
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
