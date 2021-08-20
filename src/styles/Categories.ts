import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 350px auto;
  grid-template-rows: 60px auto;

  grid-template-areas:
    "aside header"
    "aside main";

  > header {
    justify-content: flex-start;
    padding: 1rem 3rem;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    a::first-child {
      // LOGO
      font-size: 42px;
      text-shadow: 0 -2px #ffe100, 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 0px #001b51, -1px -1px #001b51, 1px 1px #001b51, 2px 3px #001b51,
        0px 3px #001b51, 0px -3px #001b51, -1px -4px #001b51, 0px 0px #001b51;
    }
  }
`;
