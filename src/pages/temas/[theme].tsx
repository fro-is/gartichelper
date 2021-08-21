import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import GlobalStyle from "../../styles/global";
import { Container } from "../../styles/Categories";

import wordsRepository from "../../database/words";
import generateWordsDescription from "../../utils/generateWordsDescription";

import NavBar from "../../components/NavBar";
import FiltersSection from "../../components/FiltersSection";
import WordsSection from "../../components/WordsSection";

const Categories: React.FC = () => {
  const router = useRouter();
  const category = router.query.theme;

  const [words, setWords] = useState<string[]>([]);
  const [filteredWords, setFilteredWords] = useState<string[]>([]);

  const wordsDescription = generateWordsDescription(words);

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
          name="description"
          content={`Lista de ${category} do gartic respostas completas e desenhos - ${wordsDescription}`}
        />
        <meta
          property="og:description"
          content={`Lista de ${category} do gartic respostas completas e desenhos - ${wordsDescription}`}
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
