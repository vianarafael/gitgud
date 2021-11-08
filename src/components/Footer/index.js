import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const FooterWrapper = styled.footer`
  background-color: #222;
  height: 70px;
  margin-top: -50px;
  margin-top: 5rem;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;

  clear: both;
  position: relative;
  height: 60px;
  margin-top: -60px;
  div {
    width: 40px;
    margin: 1rem;
    padding-left: 0.5rem;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: darkgrey;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Link className="social-media" href="https://github.com/viLinknarafael">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
      <div>
        <Link className="social-media" href="https://twitter.com/vianarafaelds">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
