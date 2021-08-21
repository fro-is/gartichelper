import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import cache from "memory-cache";

import { ModalOverlay, ModalWrapper, ModalContainer, Title } from "./styles";

interface GoogleImageSanitizedProps {
  url: string;
  parentPage: string;
}

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
  const [images, setImages] = useState<GoogleImageSanitizedProps[] | undefined>(
    undefined
  );

  const modalWrapperRef = useRef(null);

  const backdropHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    // Checks if the user is clicking outside the modal
    if (!modalWrapperRef?.current?.contains(e.target) && show) {
      handleClose();
    }
  };

  useEffect(() => {
    setImages(undefined);

    async function getWordImages() {
      const url = `/api/images?word=${word}`;

      const cachedResponse = cache.get(url);
      if (cachedResponse) {
        console.log("Cached image");
        setImages(cachedResponse.images);
      } else {
        console.log("Getting non-cached image");
        const response = await fetch(url);
        const data = await response.json();
        cache.put(url, data);
        setImages(data.images);
      }
    }

    if (show) {
      getWordImages();
    }

    // handle the close event with the overlay
    setIsBrowser(true);
    window.addEventListener("click", backdropHandler);
    return () => window.removeEventListener("click", backdropHandler);
  }, [show]);

  const handleCloseClick = () => {
    setImages(undefined);
    handleClose();
  };

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
                <button onClick={handleCloseClick}></button>
                {images ? (
                  <>
                    <img src={images[0].url} width={250} />
                    <img src={images[1].url} width={250} />
                  </>
                ) : (
                  <p>Buscando desenhos...</p>
                )}
                <a href={`https://gartic.com.br/desenhos/${word}`}>
                  Clique aqui para ver mais desenhos
                </a>
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
