import FilterAltIcon from "@mui/icons-material/FilterAlt";
import React, { useState } from "react";
import { FormDataType, SearchFormProps } from "../../types";
import { genders, statusTypes } from "../../util/formUtil";
import "./SearchForm.scss";
import SearchFormSelect from "./SearchFormSelect";

const initialState: FormDataType = {
  name: "",
  status: "",
  gender: "",
};
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let query = "";
    const tmpState: FormDataType = { ...formData };
    for (const key in tmpState) {
      if (tmpState.hasOwnProperty(key)) {
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
      <div className="search-form__wrapper search-form__wrapper--justify-between search-form__wrapper--no-wrap">
        <input
          type="text"
          name="name"
          id="nameInput"
          className="search-form__text search-form__text--w-75"
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
      >
        <div className="search-form__wrapper">
          <SearchFormSelect
            className="search-form__wrapper--w-50"
            labelTitle="Status"
            name="status"
            htmlFor="status-filter-form"
            options={statusTypes}
            onChange={handleChange}
          />
          <SearchFormSelect
            className="search-form__wrapper--w-50"
            labelTitle="Gender"
            name="gender"
            htmlFor="gender-filter-form"
            options={genders}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
