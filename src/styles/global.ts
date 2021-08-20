import { createGlobalStyle } from "styled-components";

interface BodyProps {
  homePage?: boolean;
  backgroundImage: string;
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body {
    background: ${({ homePage }: BodyProps) =>
      homePage
        ? "linear-gradient(127.44deg, #3499ff 0%, #3a3985 100%)"
        : "#3499FF"};

    background-attachment: fixed;

    -webkit-font-smoothing: antialiased;

    &:after {
      content: " ";
      background: ${props => `url(${props.backgroundImage}) `};
      opacity: ${({ homePage }: BodyProps) => (homePage ? 0.3 : 0.07)};

      background-size: ${({ homePage }: BodyProps) =>
        homePage ? "auto" : "15%"};

      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;

      @media only screen  and (max-width: 1024px) {
        background-size: ${({ homePage }: BodyProps) =>
          homePage ? "auto" : "30%"};
      }

      @media only screen and (max-width: 768px) {
        background-size: ${({ homePage }: BodyProps) =>
          homePage ? "auto" : "50%"};
      }
    }
  }

body, input, button {
  font: 16px "Nunito", sans-serif;
}

button {
  cursor: pointer;
}

li {
  list-style: none;
}
`;
