import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  width: 590px;
  height: 370px;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 50px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    background: none;
    border: none;

    position: absolute;
    right: 30px;
    top: 20px;

    &::before {
      content: "X";
      color: #868d96;
      font-weight: 900;
      font-size: 36px;
      transition: color 0.2s;
    }

    &:hover:before,
    &:focus:before {
      color: #c54747;
    }
  }

  > a {
    color: #143461;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    margin: 8px;

    transition: color 0.2s;

    &:hover,
    &:focus {
      color: #ffbf00;
    }
  }
`;

export const Title = styled.div`
  width: 370px;
  height: 78px;
  margin: -50px 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/assets/images/modal-title.png");
  background-size: cover;

  h2 {
    max-width: 250px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 110%;

    color: #ffbf00;
    text-shadow: 0 -1px 0 #fffa6d, #001b51 3px 0 0,
      #001b51 2.83487px 0.981584px 0, #001b51 2.35766px 1.85511px 0,
      #001b51 1.62091px 2.52441px 0, #001b51 0.705713px 2.91581px 0,
      #001b51 -0.287171px 2.98622px 0, #001b51 -1.24844px 2.72789px 0,
      #001b51 -2.07227px 2.16926px 0, #001b51 -2.66798px 1.37182px 0,
      #001b51 -2.96998px 0.42336px 0, #001b51 -2.94502px -0.571704px 0,
      #001b51 -2.59586px -1.50383px 0, #001b51 -1.96093px -2.27041px 0,
      #001b51 -1.11013px -2.78704px 0, #001b51 -0.137119px -2.99686px 0,
      #001b51 0.850987px -2.87677px 0, #001b51 1.74541px -2.43999px 0,
      #001b51 2.44769px -1.73459px 0, #001b51 2.88051px -0.838247px 0;
  }
`;
