import React from "react";
import "./SearchForm.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { SearchFormProps } from "../../types";

type FormDataType = {
  name: string;
  status: string;
};

const initialState: FormDataType = {
  name: "",
  status: "",
};
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let query = "";
    const tmpState: FormDataType = { ...formData };
    for (const key in tmpState) {
      if (Object.hasOwnProperty(key)) {
        const element: string = tmpState[key as keyof FormDataType];
        if (element !== "") {
          if (query.length === 0) {
            query += `?${key}=${element}`;
          } else {
            query += `&${key}=${element}`;
          }
        }
      }
    }

    onSearch(query.replaceAll(" ", "%20"));
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFilterClick = () => {
    setFilterVisible((prevValue) => !prevValue);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__wrapper">
        <input
          type="text"
          name="name"
          id="nameInput"
          className="search-form__text"
          placeholder="Looking for something..."
          onChange={handleChange}
          value={formData.name}
        />
        <button
          type="button"
          className="search-form__button"
          onClick={handleFilterClick}
        >
          <FilterAltIcon />
        </button>
        <button className="search-form__button search-form__button--primary">
          Buscar
        </button>
      </div>
      <div
        className={`search-form__filter ${
          isFilterVisible ? "search-form__filter--active" : ""
        }`}
      ></div>
    </form>
  );
};

export default SearchForm;
