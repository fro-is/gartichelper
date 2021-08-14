import styled from "styled-components";

export const StyledBody = styled.div`
  min-height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    align-items: center;

    flex-direction: column;
  }

  padding: 20px;
`;

// LEFT SIDE

export const InfoContainer = styled.div`
  max-width: 480px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 1.5rem 1rem 0;
  }

  p {
    font-size: 24px;
    color: #fff;
    margin-top: 2rem;

    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

// RIGHT SIDE
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;

  .Geral {
    grid-column: auto / span 2;

    justify-content: center;

    p {
      flex: 0;
      margin: 8px;
    }
  }

  @media only screen and (max-width: 640px) {
    grid-template-columns: auto;
    .Geral {
      grid-column: auto;

      p {
        flex: 1;
      }
    }
  }
`;

export const Label = styled.p`
  font-size: 36px;
  font-weight: bold;
  line-height: 100%;

  text-align: center;
  color: #fff;

  margin: 25px;
`;
