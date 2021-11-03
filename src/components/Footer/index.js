import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.footer`
  background-color: #222;
  height: 70px;
  margin-top: -50px;
  margin-top: 5rem;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;

  div {
    font-size: 2rem;
    margin: 1rem;
    padding-left: 2rem;

    a {
      color: #fff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <a href="https://github.com/vianarafael">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/vianarafaelds">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
