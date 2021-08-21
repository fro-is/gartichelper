import React from "react";
import Link from "next/link";

import GlobalStyle from "../../styles/global";
import { Container } from "../../styles/404";

import ImageModal from "../../components/ImageModal";

export default function Custom404() {
  return (
    <>
      <GlobalStyle backgroundImage="/assets/images/home-background.png" />
      <Container>
        <ImageModal />
        <h1>Página não encontrada :(</h1>
        <Link href="/">Voltar para a página inicial</Link>
      </Container>
    </>
  );
}
