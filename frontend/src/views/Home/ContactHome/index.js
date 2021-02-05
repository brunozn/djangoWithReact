import React from 'react';
import useForm from './useForm';

import {
  ContainerContactHome,
  TitleSection,
  Wrapper,
  Row,
  ColumnLeft,
  FormFormContactHome,
  InputFormContactHome,
  ButtonFormContactHome,
} from './styles';

import ImgContact from '../../../assets/contactHome.svg';

function ContactHome() {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };

  return (
    <ContainerContactHome id="contato">
      <TitleSection>
        Ficou com dúvidas ? <br></br>
        <span>Entre em contato conosco</span>
      </TitleSection>
      <Wrapper>
        <Row>
          <ColumnLeft>
            <img alt="contact" src={ImgContact} />
          </ColumnLeft>
          <ColumnLeft>
            <FormFormContactHome onSubmit={handleSubmit(enviarContato)}>
              <InputFormContactHome
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Digite o seu nome completo"
              />

              <InputFormContactHome
                onChange={handleChange}
                type="text"
                name="assunto"
                placeholder="Informe o assunto"
              />

              <InputFormContactHome
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Digite o seu e-mail"
              />
              <InputFormContactHome
                onChange={handleChange}
                type="text"
                primary
                name="message"
                placeholder="Digite sua mensagem"
              />
              <br></br>
              <ButtonFormContactHome type="submit">
                {loading ? 'Enviando...' : 'Enviar'}
              </ButtonFormContactHome>
            </FormFormContactHome>
          </ColumnLeft>
        </Row>
      </Wrapper>
    </ContainerContactHome>
  );
}

export default ContactHome;
