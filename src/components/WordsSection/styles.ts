import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  max-height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  header {
    justify-content: flex-start;
  }

  p {
    color: black !important;
    font-size: 16px !important;
    font-weight: 400 !important;
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
