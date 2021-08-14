import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Logo from "../Logo";
import CategorySelect from "../CategorySelect";
import FilterInput from "../LengthInput";
import CharactersTable from "../CharactersTable";

import { Filters, FilterProps } from "./interfaces";
import { FilterContainer } from "./styles";

const getAppliedFilters = (filtersObject: Filters): string[] => {
  const objectProperties = Object.entries(filtersObject);
  const activeFilters = objectProperties.filter(filter => {
    const value = filter[1];
    if (typeof value === "object") {
      // Checks if any character input is filled
      return value.some(
        (character: { letter: string }) => character.letter !== ""
      );
    }
    return value !== "";
  });
  const activeFiltersNames = activeFilters.map(filter => filter[0]);
  return activeFiltersNames;
};

const filtersFunctions = {
  lettersFilter: (wordsArray: string[], filters: Filters) =>
    wordsArray.filter(word =>
      word.toLowerCase().includes(filters.lettersFilter.toLowerCase())
    ),

  lengthFilter: (wordsArray: string[], filters: Filters) =>
    wordsArray.filter(word => word.length === Number(filters.lengthFilter)),

  characters: (wordsArray: string[], filters: Filters) =>
    wordsArray.filter(word =>
      filters.characters.every(({ position, letter }) => {
        // If the character position isn't specified
        if (Number(position) <= 0) return word.includes(letter.toLowerCase());
        return word.charAt(Number(position) - 1) === letter.toLowerCase();
      })
    ),
};

const FilterSection: React.FC<FilterProps> = ({
  category,
  words,
  setFilteredWords,
}: FilterProps) => {
  const [filters, setFilters] = useState({
    lettersFilter: "",
    lengthFilter: "",
    characters: [
      {
        id: uuidv4(),
        letter: "",
        position: "",
      },
    ],
  });

  const handleFilters = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setFilters({ ...filters, [event.target.name]: event.target.value });
    },
    [filters, setFilters]
  );

  useEffect(() => {
    const appliedFilters = getAppliedFilters(filters);

    const filteredWords = appliedFilters.reduce(
      (currentFilteredWords, filter) =>
        filtersFunctions[filter](currentFilteredWords, filters),
      words
    );
    setFilteredWords(filteredWords);
  }, [filters, setFilteredWords, words]);

  return (
    <FilterContainer>
      <Logo small />
      <CategorySelect category={category} />
      <FilterInput>
        Nº de Letras:
        <input
          type="number"
          name="lengthFilter"
          id="lengthFilter"
          min="0"
          value={filters.lengthFilter}
          onChange={handleFilters}
        />
      </FilterInput>
      <FilterInput>
        Letras:
        <input
          type="text"
          name="lettersFilter"
          id="lettersFilter"
          onChange={handleFilters}
          value={filters.lettersFilter}
        />
      </FilterInput>
      <CharactersTable filters={filters} setFilters={setFilters} />
    </FilterContainer>
  );
};

export default FilterSection;
