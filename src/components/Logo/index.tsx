import React from "react";
import Link from "next/link";

import StyledLogo from "./styles";

interface LogoProps {
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small }: LogoProps) => (
  <Link href="/">
    <StyledLogo small={small}>Gartic Helper</StyledLogo>
  </Link>
);

export default Logo;
