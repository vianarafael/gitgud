import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  margin-top: 5rem;
  h1 {
    line-height: 1.2;
    font-size: 3em;
  }

  p {
    margin: 1rem 0;
    font-weight: normal;
    text-align: left;
    line-height: 1.4;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Git Solution Log</h1>
      <p>
        This is a list of my mishaps using Git, and how I surmounted them.
        <br />
        Like working in collaboration, the logic of JavaScript, pixel-perfect
        design implementation, keeping up-to-date with the current trends in web
        development, and dealing with legacy code was not enough.
        <br />
        There is also GIT.
      </p>
    </HeaderWrapper>
  );
};

export default Header;
