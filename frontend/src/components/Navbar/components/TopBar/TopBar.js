import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';

import logo from '../../../../assets/logo.png';

const Logo = styled.img.attrs({ src: logo, alt: 'Logo ' })`
  height: 3rem;
  margin-left: 1.6rem;
`;

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  //background: orange;
  @media (min-width: 1024px) {
    padding-left: 20px;
    justify-content: space-around;
  }
  @media (min-width: 800px) {
    padding-left: 1.4rem;
  }
`;

export default function TopBar() {
  return (
    <TopBarContainer>
      <a href="#home">
        <Logo />
      </a>
      <Menu />
    </TopBarContainer>
  );
}
