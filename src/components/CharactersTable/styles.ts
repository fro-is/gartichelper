import styled from 'styled-components';

export const Table = styled.table`
  width: 270px;
  background-color: #f3f3f3;
  border-radius: 10px;
  table-layout: fixed;

  border-collapse: collapse;

  margin-top: 13px;

  tr {
    min-height: 20px;
    margin: 15px;

    th {
      font-size: 16px;
      font-weight: 400;
      color: #007af8;

      &:first-child {
        border-right: 1px solid #96928b;
      }
    }

    // MAIN TABLE-HEAD
    &:first-child {
      th {
        background: #fff;
        padding: 5px;

        font-size: 24px;
        font-weight: bold;

        border-right: none;
        border-bottom: 1px solid #96928b;
        border-radius: 10px 10px 0px 0px;
      }
    }

    td {
      text-align: center;

      input {
        width: 100px;
        font-weight: bold;
        font-size: 14px;
        color: #797979;
        text-align: center;

        margin: 5px;

        background-color: #f3f3f3;
        border-radius: 7px;
        border: 1px solid #868d96;

        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }

        &::placeholder {
          font-weight: 400;
        }

        // REMOVE INNER ARROWS
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
      // REMOVE INNER ARROWS IN FIREFOX
      input[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }

  tfoot {
    button {
      width: 100%;
      height: 30px;
      margin-top: 10px;

      font-size: 14px;
      font-weight: 900;

      border: none;

      &:hover {
        color: #ffbf00 !important;
      }
    }

    #cleanButton {
      background-color: #c54747;
      color: #fff;
      border-radius: 0px 0px 0px 8px;

      transition: background-color 0.2s;

      &:hover {
        background-color: #b50000;
      }
    }

    #addButton {
      background-color: #4782c5;
      border-radius: 0px 0px 8px 0px;

      color: #fff;

      transition: background-color 0.2s;

      &:hover {
        background-color: #005fc9;
      }
    }
  }
`;
