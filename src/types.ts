import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps, SvgIconTypeMap } from "@mui/material";
import React, { ChangeEvent } from "react";

export type FooterProps = {
  color?: string;
};

export type BurgerMenuProps = {
  isMenuDisplay: boolean;
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

export type FormDataType = {
  name: string;
  status: Status | "";
  gender: Gender | "";
};

export type SearchFormSelectProps = {
  className?: string;
  labelTitle: string;
  name: string;
  htmlFor: string;
  options: Status[] | Gender[];
  onChange: (e: React.BaseSyntheticEvent) => void;
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

export type ErrorProps = {
  error: HttpRequestError;
};

export type HttpRequestError = {
  code: number;
  message: string;
};
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

export type NavigationRoutes = {
  name: string;
  path: string;
};

export type ExternalNavigationLinks = {
  icon?: SvgIconProps;
} & NavigationRoutes;
