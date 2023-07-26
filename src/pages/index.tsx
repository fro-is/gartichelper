import React from "react";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

import {
  StyledBody,
  InfoContainer,
  CategoryContainer,
  Label,
} from "../styles/Home";

import GlobalStyle from "../styles/global";

import Logo from "../components/Logo";
import CategoryButton from "../components/CategoryButton";
import NavBar from "../components/NavBar";

import categories from "../database/words";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Gartic Helper</title>
      <meta content={`Gartic Helper`} property="title" />
      <meta content={`Gartic Helper`} property="og:title" />
      <meta
        name="description"
        content="Listas de palavras com desenhos e respostas do gartic. Buscador de palavras do Gartic.Uma ajuda pra você ganhar sua partida com os amigos! Aplique diversos filtros e adivinhe a palavra rapidamente"
      />
      <meta
        property="og:description"
        content="Listas de palavras com desenhos e respostas do gartic. Buscador de palavras do Gartic.Uma ajuda pra você ganhar sua partida com os amigos! Aplique diversos filtros e adivinhe a palavra rapidamente"
      />
      <meta name="robots" content="index, follow" />
    </Head>
    <GlobalStyle
      homePage
      backgroundImage="/assets/images/home-background.png"
    />
    <StyledBody>
      <NavBar />
      <InfoContainer>
        <Logo />
        <p>
          Uma ajudinha para você mandar ver na sua partida de Gartic com os
          amigos!
        </p>
      </InfoContainer>
      <main itemScope itemType="https://schema.org/BreadcrumbList">
        <Label itemProp="name">Lista de temas</Label>
        <CategoryContainer>
          {categories.map(({ icon, name }, index) => (
            <CategoryButton
              key={name}
              className={name}
              icon={icon}
              category={name}
              position={(index + 1).toString()}
            />
          ))}
        </CategoryContainer>
      </main>
      <Analytics />
    </StyledBody>
  </>
);

export default Home;
