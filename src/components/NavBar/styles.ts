import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: grid;
  place-content: center;

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      font-size: 24px;
      font-weight: 600;
      margin-right: 16px;
      color: white;

      a {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;

        transition: all 0.2s;

        &:hover {
          color: #ffbf00;
        }

        span {
          margin: 4px;
        }

        .gartic-logo {
          width: 150px;
          height: 31px;
          background-image: url("/assets/images/gartic-logo.png");
          background-size: contain;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    ul li {
      font-size: 16px;
    }
  }
`;
