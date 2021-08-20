import React, { memo } from "react";
import { FiCopy } from "react-icons/fi";
import copy from "copy-to-clipboard";

import WordButtonStyled from "./styles";

interface WordButtonProps {
  word: string;
  position: string;
}

const WordButton: React.FC<WordButtonProps> = ({ word }: WordButtonProps) => {
  return (
    <WordButtonStyled
      onClick={() => copy(word)}
      itemScope
      itemProp="itemListElement"
    >
      <span itemProp="identifier">{`(${word.length})`}</span>
      <strong itemProp="item">{word}</strong>
      <FiCopy width={20} height={20} />
      <meta itemProp="position" content="1" />
    </WordButtonStyled>
  );
};

export default memo(WordButton);
