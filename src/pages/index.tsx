import React from "react";
import Head from "next/head";

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
        content="Buscador de palavras do Gartic. Listas de palavras e respostas. Uma ajuda pra você ganhar sua partida com os amigos! Aplique diversos filtros e adivinhe a palavra rapidamente"
      />
      <meta
        property="og:description"
        content="Buscador de palavras do Gartic. Listas de palavras e respostas. Aplique diversos filtros e adivinhe a palavra rapidamente"
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
      <div>
        <Label>Escolha uma Categoria</Label>
        <CategoryContainer>
          {categories.map(({ icon, name }) => (
            <CategoryButton
              key={name}
              className={name}
              icon={icon}
              category={name}
            />
          ))}
        </CategoryContainer>
      </div>
    </StyledBody>
  </>
);

export default Home;
