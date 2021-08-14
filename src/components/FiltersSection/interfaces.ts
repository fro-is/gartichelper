export interface CharacterFilterObject {
  id: string;
  letter: string;
  position: string;
}

export interface Filters {
  lettersFilter: string;
  lengthFilter: string;
  characters: CharacterFilterObject[];
}

export interface FilterProps {
  category: string;
  words: string[];
  setFilteredWords: React.Dispatch<React.SetStateAction<string[]>>;
}
