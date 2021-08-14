import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: grid;
  place-content: center;

  ul {
    display: flex;

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
      }
    }
  }

  @media only screen and (max-width: 768px) {
    ul li {
      font-size: 16px;
    }
  }
`;
