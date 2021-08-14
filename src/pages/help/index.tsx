import React from "react";
import Head from "next/head";

import GlobalStyle from "../../styles/global";
import { Container, CardContainer, Card } from "../../styles/Help";

import NavBar from "../../components/NavBar";

const Help: React.FC = () => {
  return (
    <>
      <Head>
        <title>Como usar? - Gartic Helper</title>
        <meta content={`Como usar? - Gartic Helper`} property="title" />
        <meta content={`Como usar? - Gartic Helper`} property="og:title" />
        <meta
          content={`Como usar o Gartic Helper e obter as respostas e hack para gartic, desenhos, lista de palavras para o Gartic, Gartic Helper`}
          property="description"
        />
        <meta
          content={`Como usar o Gartic Helper e obter as respostas e hack para gartic, desenhos, lista de palavras para o Gartic, Gartic Helper`}
          property="og:description"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <GlobalStyle
        homePage
        backgroundImage="/assets/images/home-background.png"
      />
      <Container>
        <NavBar />
        <h1>Como usar o Gartic Helper?</h1>
        <CardContainer>
          <Card>
            <h2>Categoria</h2>
            <img
              src="/assets/images/filtro-categoria.png"
              alt="Filtro de Categoria"
            />
            <p>
              Selecione a categoria de palavras que você está jogando. Colocando
              apenas a categoria, você tem acesso a todas as palavras da mesma,
              mas caso uma dica for dada no seu jogo, é recomendável que você
              combine com outros filtros para obter a resposta rapidamente.
              Todas as palavras estão ordenadas em ordem alfabética e basta
              clicar nelas para copiar.
            </p>
          </Card>
          <Card>
            <h2>Nº de Letras</h2>
            <img
              src="/assets/images/dica-numeros.png"
              className="dica"
              alt="Dica do Gartic"
            />
            <img
              src="/assets/images/filtro-numero.png"
              alt="Filtro de Quantidade de Letras"
            />
            <p>
              Insira a quantidade de letras da palvra{" "}
              <strong>(contando com hífens e espaços)</strong>. Geralmente é
              utilizada sempre que uma dica é dada no seu jogo.
            </p>
          </Card>
          <Card>
            <h2>Letras</h2>
            <p>Insira uma sequência de letras a ser procurada nas palavras.</p>
            <img
              src="/assets/images/dica-letras.png"
              className="dica"
              alt="Dica do Gartic"
            />
            <img
              src="/assets/images/filtro-letras.png"
              alt="Filtro de Quantidade de Letras"
            />
            <p>
              No exemplo acima, temos a sequência <strong>TA</strong>, então
              podemos coloca-la no filtro e combinar com o de número de letras e
              caracteres para achar facilmente a resposta.
            </p>
          </Card>
          <Card>
            <h2>Caracteres</h2>
            <img
              src="/assets/images/dica-caracteres.png"
              className="dica"
              alt="Dica do Gartic"
            />
            <img
              src="/assets/images/filtro-caracteres.png"
              alt="Filtro de Caracteres"
            />
            <p>
              Este é o filtro mais poderoso, com ele você pode colocar as letras
              da palavra e especificar a sua posição (lembre-se de contar os
              hífens e espaços!). Muito útil quando temos uma dica com letras
              separadas.
            </p>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default Help;
