import styled from "styled-components";

export const Container = styled.main`
  grid-area: main;

  padding: 2rem 1rem;

  @media only screen and (min-width: 768px) {
    padding: 0rem 3rem;
    max-height: calc(100vh - 60px);

    overflow-y: auto;
    overflow-x: hidden;
  }

  h1 {
    color: white;
    font-size: 24px;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }

  > span {
    color: #143461;
    font-weight: 600;
  }

  //SCROLLBAR
  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffbf00;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

export const WordsContainer = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  @media only screen and (max-width: 768px) {
    a {
      margin: 5px 5px 5px 0px;
    }
  }
`;
