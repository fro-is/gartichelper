import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  place-content: center;

  height: 100vh;

  h1 {
    font-size: 72px;
    line-height: 100%;

    text-align: "center";
    font-weight: bold;
    text-decoration: none;

    color: #ffbf00;
    text-shadow: 0 -3px #ffe100, 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 0px #001b51, -1px -1px #001b51, 1px 1px #001b51, 3px 6px #001b51,
      0px 6px #001b51, 0px -6px #001b51, -1px -6px #001b51, 0px 0px #001b51;
  }

  a {
    color: white;
    text-align: center;
    font-size: 24px;

    transition: color 0.2s;

    &:hover {
      color: #001b51;
    }
  }
`;
