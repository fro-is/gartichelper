import styled from 'styled-components';

export const FilterInputContainer = styled.label`
  width: 270px;
  height: 50px;

  padding-left: 20px;

  font-family: 'Nunito';
  font-weight: bold;
  font-size: 24px;

  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 13px 0;

  color: #007af8;
  input {
    width: 160px;
    height: 50px;

    padding: 5px;

    border: none;
    border-radius: 0px 10px 10px 0px;

    color: #797979;
    background-color: #e4e4e4;

    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  input[type='number'] {
    width: 70px;
  }
`;
