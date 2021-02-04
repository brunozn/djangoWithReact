import styled, { keyframes } from 'styled-components';
import colors from '../../../UI/colors';

const pulso = keyframes`
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
    `;

export const Container = styled.section`
  //margin-top: 1px;
  padding: 120px 0 100px 0;
  //   background: ${colors.gray};
  @media (max-width: 1000px) {
    padding: 80px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  margin: 0 auto;
  //background: blue;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  //animation: ${pulso} 5s linear infinite;
  //background: red;
  padding-bottom: 32px;
  > img {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const Description = styled.h2`
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 100%;
  text-align: left;
  color: #333333;
  padding-left: 30px;
  padding-top: 30px;
  @media (max-width: 800px) {
    font-size: 44px;
  }
  @media (max-width: 600px) {
    font-size: 34px;
    padding-left: 15px;
    padding-top: 0px;
  }
`;

export const Row = styled.div`
  //background: pink;
  display: grid;
  grid-template-columns: 30vw 54vw;
  grid-gap: 35px;
  padding-left: 40px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: 600px) {
    padding-left: 0px;
  }
`;

export const Link = styled.a`
  width: 233px;
  height: 45px;
  background: ${colors.green};
  border-radius: 15px;
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 149.3%;
  color: #ffffff;
  padding-top: 5px;
  margin-top: 15px;
  margin-left: 30px;
  text-decoration: none;
 &:hover {
    color: #9b9999;
    background: ${colors.blue}
    transition: 200ms ease-in;
    text-decoration: none;
  }
  @media (max-width: 600px) {
    width: 183px;
    height: 35px;
    padding-top: 1px;
    font-size: 20px;
     margin-left: 15px;
  }
`;
