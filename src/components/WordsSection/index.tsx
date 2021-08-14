import React, { memo } from "react";

import { Container, WordsContainer } from "./styles";

import WordButton from "../WordButton";
import NavBar from "../NavBar";

interface WordSectionProps {
  words: string[];
}

const WordsSection: React.FC<WordSectionProps> = ({
  words,
}: WordSectionProps) => {
  return (
    <Container>
      <NavBar />
      <p>
        <i className="fas fa-info-circle" />
        Clique na palavra para copiar, elas estão ordenadas em ordem alfabética!
      </p>
      <p>
        Palavras Encontradas:
        {words.length}
      </p>

      <WordsContainer>
        {words.map(word => (
          <WordButton key={`${word}`} word={word} />
        ))}
      </WordsContainer>
    </Container>
  );
};

export default memo(WordsSection);
