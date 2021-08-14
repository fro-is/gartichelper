import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h1 {
    color: #ffbf00;
    text-shadow: 0 -2px #ffe100, 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 0px #001b51, -1px -1px #001b51, 1px 1px #001b51, 3px 3px #001b51,
      0px 3px #001b51, 0px -3px #001b51, -1px -3px #001b51, 0px 0px #001b51;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
  }
`;

export const CardContainer = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  max-width: 1024px;
  margin: 16px;
  gap: 16px;

  @media only screen and (max-width: 640px) {
    grid-template-columns: auto;
  }
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  padding: 20px;

  h2 {
    color: #007af8;
    font-weight: 800;
  }
  strong {
    font-weight: 800;
  }
  img {
    width: 100%;
    border-radius: 10px;
    margin: 8px 0;
  }
  .dica {
    width: 50%;
    margin: 0 auto;
  }
`;
