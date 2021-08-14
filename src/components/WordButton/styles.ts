import styled from 'styled-components';

export default styled.li`
  padding: 4px;
  margin: 5px 20px 10px 0px;

  max-height: 45px;

  line-height: 100%;

  background-color: #ffbf00;

  color: #002043;
  font-size: 18px;

  border: 4px solid #002043;
  border-radius: 8px;

  transition: color 0.2s;

  cursor: pointer;

  strong {
    font-weight: 600;
    margin: 0px 5px 0px 5px;
  }

  span {
    color: #fff;
  }

  &:hover {
    color: white;
  }
`;
