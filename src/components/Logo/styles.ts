import styled from "styled-components";

interface LogoProps {
  small?: boolean;
}

const StyledLogo = styled.a`
  font-size: ${({ small }: LogoProps) => (small ? "72px" : "144px")};
  line-height: 100%;

  text-align: ${({ small }: LogoProps) => small && "center"};
  font-weight: bold;
  text-decoration: none;

  color: #ffbf00;
  text-shadow: 0 -3px #ffe100, 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px #001b51,
    -1px -1px #001b51, 1px 1px #001b51, 3px 6px #001b51, 0px 6px #001b51,
    0px -6px #001b51, -1px -6px #001b51, 0px 0px #001b51;

  cursor: pointer;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 72px;
  }
`;

export default StyledLogo;
