import React, { useState, useCallback, memo } from "react";
import { FaInfoCircle } from "react-icons/fa";

import { Container, WordsContainer } from "./styles";

import ImageModal from "../ImageModal";
import WordButton from "../WordButton";

interface WordSectionProps {
  words: string[];
  category: string;
}

const WordsSection: React.FC<WordSectionProps> = ({
  words,
  category,
}: WordSectionProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalWord, setModalWord] = useState("");

  const handleShowModal = useCallback((word: string) => {
    console.log("Showing modal for " + word);
    setShowModal(true);
    setModalWord(word);
  }, []);

  const handleCloseModal = useCallback(() => {
    console.log("Closing modal");
    setShowModal(false);
  }, []);

  return (
    <Container itemScope itemType="https://schema.org/ItemList" id="word-root">
      <ImageModal
        show={showModal}
        handleClose={handleCloseModal}
        word={modalWord}
      />
      <h1 itemProp="name">Lista de {category}</h1>
      <meta itemProp="numberOfItems" content={words.length.toString()} />
      <link
        itemProp="itemListOrder"
        href="https://schema.org/ItemListOrderAscending"
      />
      <p>Palavras Encontradas: {words.length}</p>
      <span>
        <FaInfoCircle width={30} height={30} />
        Clique na palavra para copiar, elas estão ordenadas em ordem alfabética!
      </span>
      <WordsContainer>
        {words.map((word, index) => (
          <WordButton
            key={`${word}`}
            word={word}
            position={(index + 1).toString()}
            handleShowModal={handleShowModal}
          />
        ))}
      </WordsContainer>
    </Container>
  );
};

export default memo(WordsSection);
