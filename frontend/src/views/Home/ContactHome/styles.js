import styled, { css } from 'styled-components';
import colors from '../../../UI/colors';

export const ContainerContactHome = styled.section`
  padding: 120px 0 100px 0;
  background: #f9fdfe;
  @media (max-width: 1000px) {
    padding: 80px 30px;
  }
  @media (max-width: 60px) {
    padding: 80px 15px;
  }
`;

export const TitleSection = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #1f1e27;
  padding-left: 60px;
  > span {
    color: ${colors.primary};
  }
  @media (max-width: 600px) {
    padding-left: 10px;
    font-size: 25px;
    line-height: 121.8%;
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 32px;
  padding-top: 50px;
  > img {
    width: 80%;
    margin-left: 130px;
    @media (max-width: 800px) {
      margin: auto;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0px;
    padding-bottom: 10px;
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
  margin-left: 280px;
  @media (max-width: 800px) {
    margin-left: 0;
  }
  @media (max-width: 1004px) {
    margin: 0;
  }
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
  @media (max-width: 800px) {
    width: 100%;
  }
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
  background: ${colors.primary};
  border-radius: 15px;
  display: block;
  float: right;
  @media (max-width: 800px) {
    width: 155px;
    height: 35px;
  }
`;
