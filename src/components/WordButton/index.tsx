import React, { memo } from "react";
import copy from "copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import { BsImageFill } from "react-icons/bs";

import WordButtonStyled from "./styles";

interface WordButtonProps {
  word: string;
  position: string;
  handleShowModal: (word: string) => void;
}

const WordButton: React.FC<WordButtonProps> = ({
  word,
  position,
  handleShowModal,
}: WordButtonProps) => {
  return (
    <WordButtonStyled
      onClick={() => copy(word)}
      itemScope
      itemProp="itemListElement"
    >
      <span itemProp="identifier">{`(${word.length})`}</span>
      <div className="copy">
        <strong itemProp="item">{word}</strong>
        <FiCopy size={20} />
      </div>
      <BsImageFill size={20} onClick={() => handleShowModal(word)} />
      <meta itemProp="position" content={position} />
    </WordButtonStyled>
  );
};

export default memo(WordButton);
