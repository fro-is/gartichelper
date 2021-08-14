import styled from 'styled-components';

export const FilterContainer = styled.aside`
  min-width: 300px;
  max-width: 350px;

  min-height: 100vh;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(127.44deg, #3499ff 0%, #3a3985 100vh), #ffffff;
  box-shadow: 7px 0px 4px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 768px) {
    min-height: fit-content;
    max-width: 100%;

    box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default FilterContainer;
