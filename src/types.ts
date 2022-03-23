import { ChangeEvent } from "react";

export type FooterProps = {
  color?: string;
};

export type BurgerMenuProps = {
  onMenuDisplay: () => void;
};

export type CharacterCardProps = {
  character: Character;
};

export type CharactersProps = {
  characters: Character[];
};

export type StatusProps = {
  status?: StatusStyle;
  message?: string;
};

export type SectionProps = {
  className?: string;
};

export type SearchFormProps = {
  onSearch: (search: string) => void;
};

export type PaginatorProps = {
  pages: number;
  center?: boolean;
  onChange: PaginatorOnChangeEvent;
  actualPage: number;
};

export type PaginatorOnChangeEvent = (
  event: ChangeEvent<unknown>,
  page: number
) => void;

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterPaginated = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Status = "Alive" | "Dead" | "unknown";
export type StatusStyle = "online" | "offline" | "unknown";

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};
