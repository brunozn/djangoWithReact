import React from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar/TopBar';
import colors from '../../UI/colors';

const MainHeader = styled.header`
  background-color: ${colors.primary};
  position: absolute;
  width: 100%;
  height: 4rem;
  position: fixed;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Nav(props) {
  return (
    <MainHeader>
      <TopBar />
    </MainHeader>
  );
}

export default Nav;
