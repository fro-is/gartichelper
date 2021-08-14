import React, { memo } from "react";
import copy from "copy-to-clipboard";

import WordButtonStyled from "./styles";

interface WordButtonProps {
  word: string;
}

const WordButton: React.FC<WordButtonProps> = ({ word }: WordButtonProps) => {
  return (
    <WordButtonStyled onClick={() => copy(word)}>
      <span>{`(${word.length})`}</span>
      <strong>{word}</strong>
      <i className="far fa-clone" />
    </WordButtonStyled>
  );
};

export default memo(WordButton);
