import React from "react";
import Link from "next/link";

import { FaGithub, FaQuestionCircle, FaHome } from "react-icons/fa";
import { Header } from "./styles";

const NavBar: React.FC = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>
                <FaHome size={26} />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/help">
              <a>
                <FaQuestionCircle size={26} />
                <span>Como usar?</span>
              </a>
            </Link>
          </li>
          <li>
            <a
              href="https://www.github.com/tpfrois/gartichelper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={26} />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default NavBar;
