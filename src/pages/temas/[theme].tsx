import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import GlobalStyle from "../../styles/global";
import { Container } from "../../styles/Categories";

import wordsRepository from "../../database/words";

import NavBar from "../../components/NavBar";
import FiltersSection from "../../components/FiltersSection";
import WordsSection from "../../components/WordsSection";

const Categories: React.FC = () => {
  const router = useRouter();
  const category = router.query.theme;

  const [words, setWords] = useState<string[]>([]);
  const [filteredWords, setFilteredWords] = useState<string[]>([]);

  useEffect(() => {
    const categoryData = wordsRepository.find(
      currentCategory =>
        currentCategory.name.toLowerCase() === category?.toLowerCase()
    );

    if (!categoryData) return;

    const sortedWords = categoryData.words.sort();

    setWords(sortedWords);
    setFilteredWords(sortedWords);
  }, [category]);

  return (
    <>
      <Head>
        <title>Lista de {category} - Respostas Gartic Helper</title>
        <meta
          content={`Lista de ${category} - Respostas Gartic Helper`}
          property="title"
        />
        <meta
          content={`Lista de ${category} - Respostas Gartic Helper`}
          property="og:title"
        />
        <meta
          content={`Respostas e hack para gartic da categoria ${category}, desenhos, lista de palavras de ${category} para o Gartic, Gartic Helper - ${category}`}
          property="description"
        />
        <meta
          content={`Respostas e hack para gartic da categoria ${category}, desenhos, lista de palavras de ${category} para o Gartic, Gartic Helper - ${category}`}
          property="og:description"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <GlobalStyle backgroundImage="/assets/images/dashboard-background.png" />
      <Container>
        <FiltersSection
          category={category}
          words={words}
          setFilteredWords={setFilteredWords}
        />
        <NavBar />
        <WordsSection words={filteredWords} category={category} />
      </Container>
    </>
  );
};

export default Categories;
