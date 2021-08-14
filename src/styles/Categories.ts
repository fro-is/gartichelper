import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;

  main {
    flex: 1;

    padding: 2rem 3rem;

    i:first-child {
      margin-right: 5px;
    }

    p:first-child {
      color: #001b51;
      font-size: 14px;
      font-weight: 400;
      margin-left: 0px;
    }

    p {
      font-weight: bold;
      font-size: 20px;
      color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    a::first-child {
      // LOGO
      font-size: 42px;
      text-shadow: 0 -2px #ffe100, 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 0px #001b51, -1px -1px #001b51, 1px 1px #001b51, 2px 3px #001b51,
        0px 3px #001b51, 0px -3px #001b51, -1px -4px #001b51, 0px 0px #001b51;
    }
    main {
      padding: 1.5rem;
    }
  }
`;
