import React from "react";
import { OrganisationContext } from "@/core/providers";

export const OrganisationSearcher: React.FC = () => {
  const { organisation, onChangeOrganisation } =
    React.useContext(OrganisationContext);
  const [inputValue, setInputValue] = React.useState<string>(organisation);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onChangeOrganisation(inputValue);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
