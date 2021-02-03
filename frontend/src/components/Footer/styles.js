import styled from 'styled-components';
import colors from '../../UI/colors';

export const Container = styled.footer`
  position: fixed;
  bottom 0;
  left: 0;
  right: 0;
  margin-top: 10px;
  padding: 30px 30px;
  background: ${colors.dark};
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  margin: 0 auto;
  background: red;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  background: green;
`;

export const ColumnImg = styled.div`
  display: flex;
  margin-bottom: 50px;
  //flex-direction: column;
  //text-align: left;
  //background: blue;
  @media (max-width: 800px) {
    margin: 1px auto;
  }
`;

export const ColumnSocial = styled.div`
  display: flex;
  flex-direction: row;
  text-align: end;
  padding: 0px 30px;
  margin-left: 30px;
  //background: green;
  > a {
    padding: 0px 10px;
    @media (max-width: 800px) {
      margin: 1px auto;
    }
  }
`;

export const Row = styled.div`
  /*background: pink; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #9b9999;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #9b9999;
`;
