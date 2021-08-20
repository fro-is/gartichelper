import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { ModalOverlay, ModalWrapper, ModalContainer, Title } from "./styles";

interface ImageModal {
  show: Boolean;
  handleClose: () => void;
  word: string;
}

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

export default function ImageModal({ show, handleClose, word }: ImageModal) {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = useRef(null);

  const backdropHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    // Checks if the user is clicking outside the modal
    if (!modalWrapperRef?.current?.contains(e.target) && show) {
      handleClose();
    }
  };

  useEffect(() => {
    if (show) {
      // chamar api
    }

    // handle the close event with the overlay
    setIsBrowser(true);
    window.addEventListener("click", backdropHandler);
    return () => window.removeEventListener("click", backdropHandler);
  }, [show]);

  const modalContent = show ? (
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={backdrop} initial="hidden" animate="visible">
        <ModalOverlay>
          <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.1 }}>
            <ModalWrapper ref={modalWrapperRef}>
              <ModalContainer>
                <Title>
                  <h2>{word}</h2>
                </Title>
                <button onClick={handleClose}></button>
                <img
                  src="https://gartic.com.br/imgs/mural/pi/pinktrix/abacaxi.png"
                  width={250}
                />
                <img
                  src="https://gartic.com.br/imgs/mural/lu/lucashenriq/abacaxi.png"
                  width={250}
                />

                <Link href="/">
                  <a>Clique aqui para ver mais desenhos</a>
                </Link>
              </ModalContainer>
            </ModalWrapper>
          </motion.div>
        </ModalOverlay>
      </motion.div>
    </AnimatePresence>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("word-root"));
  } else {
    return null;
  }
}
