import styled, { keyframes, css } from 'styled-components';
import colors from '../../../UI/colors';

const pulso = keyframes`
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
    `;

export const ContainerContactHome = styled.section`
  //margin-top: 1px;
  padding: 120px 0 100px 0;
  //   background: ${colors.gray};
  @media (max-width: 1000px) {
    padding: 80px 30px;
  }
`;

export const TitleSection = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;

  color: #1f1e27;
  padding-left: 40px;
  > span {
    color: #b94ede;
  }
  @media (max-width: 600px) {
    padding-left: 10px;
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

export const FormFormContactHome = styled.form`
  display: block;
  margin-top: -10px;
  height: 100%;
`;

export const InputFormContactHome = styled.input`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 115.3%;
  text-align: justify;
  color: #bcbbbb;
  width: 433px;
  height: 48px;
  background: #ffffff;
  border: 2px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
  ${(props) =>
    props.primary &&
    css`
      height: 150px;
    `}
`;

export const ButtonFormContactHome = styled.button`
  width: 219px;
  height: 50px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 115.3%;
  text-align: justify;
  text-align: center;
  color: #ffffff;
  background: #b94ede;
  border-radius: 15px;
  display: block;
  float: right;
`;
