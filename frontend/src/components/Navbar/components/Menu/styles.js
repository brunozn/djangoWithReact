import styled from 'styled-components';

import colors from '../../../../UI/colors';

export const MenuList = styled.ul`
  list-style: none;
  margin-left: 3rem;
  margin-top: 3rem;
  //background-color: red;
  li {
    margin-bottom: 1rem;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    //font-size: 17px;
    font-size: 1rem;
    line-height: 115.3%;
    text-align: justify;

    a {
      color: white;
      text-decoration: none;
    }
  }
  li:hover {
    border-bottom: solid white;
  }
  @media (min-width: 768px) {
    display: flex;
    margin: 0;
    li {
      margin-left: 1rem;
      margin-bottom: 0;
      color: white;
    }
  }
`;

export const MenuIcon = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.open ? 'gray' : 'white')};
  z-index: 1;
  margin-top: -0.3rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  margin-left: auto;
  //margin-left: 1.6rem;
  margin-right: 1.6rem;
  padding-left: 80%;
  @media (min-width: 1024px) {
    padding-left: 48rem;
  }
  display: flex;
  flex: 1;
  & ${MenuIcon} {
    position: fixed;
    right: 20px;
    top: 20px;
  }
`;

export const Menus = styled.nav`
  background-color: ${colors.primary};
  width: 200px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s;
  @media (min-width: 768px) {
    transform: none;
    background-color: transparent;
    display: flex;
    position: static;
    height: 100%;
    flex: 1;
    justify-content: space-between;
  }
`;
