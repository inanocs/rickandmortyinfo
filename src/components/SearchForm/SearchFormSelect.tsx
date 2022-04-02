import { SearchFormSelectProps } from "../../types";

const SearchFormSelect: React.FC<SearchFormSelectProps> = ({
  labelTitle,
  className,
  name,
  htmlFor,
  options,
  onChange,
}) => {
  return (
    <div
      className={`search-form__wrapper search-form__wrapper--flex-column ${className}`}
    >
      <label htmlFor={htmlFor}>{labelTitle}</label>
      <select
        id={htmlFor}
        className="search-form__text"
        name={name}
        onChange={onChange}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SearchFormSelect;
