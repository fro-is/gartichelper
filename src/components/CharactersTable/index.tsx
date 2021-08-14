import React, { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { Table } from "./styles";

interface CharacterFilterObject {
  id: string;
  letter: string;
  position: string;
}
interface CharactersTableProps {
  filters: {
    lettersFilter: string;
    lengthFilter: string;
    characters: CharacterFilterObject[];
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

const CharactersTable: React.FC<CharactersTableProps> = ({
  filters,
  setFilters,
}: CharactersTableProps) => {
  const handleCharactersFilterChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ): void => {
    const newCharacters = filters.characters.map(character => {
      if (character.id === id)
        character[event.currentTarget.name] = event.currentTarget.value;

      return character;
    });

    setFilters({ ...filters, characters: newCharacters });
  };

  const handleAddCharacter = (): void => {
    setFilters({
      ...filters,
      characters: [
        ...filters.characters,
        { id: uuidv4(), letter: "", position: "" },
      ],
    });
  };

  const handleCleanCharacters = (): void => {
    setFilters({
      ...filters,
      characters: [{ id: uuidv4(), letter: "", position: "" }],
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>Caracteres</th>
        </tr>
        <tr>
          <th>Letra</th>
          <th>Posição</th>
        </tr>
      </thead>
      <tbody>
        {filters.characters.map(character => (
          <tr key={character.id}>
            <td>
              <input
                type="text"
                placeholder="..."
                name="letter"
                value={character.letter}
                onChange={e => handleCharactersFilterChange(e, character.id)}
              />
            </td>
            <td>
              <input
                type="number"
                min="1"
                placeholder="..."
                name="position"
                value={character.position}
                onChange={e => handleCharactersFilterChange(e, character.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button
              type="button"
              id="cleanButton"
              onClick={handleCleanCharacters}
              name="cleanButton"
            >
              LIMPAR
            </button>
          </td>
          <td>
            <button
              type="button"
              id="addButton"
              onClick={handleAddCharacter}
              name="addButton"
            >
              ADICIONAR
            </button>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default CharactersTable;
