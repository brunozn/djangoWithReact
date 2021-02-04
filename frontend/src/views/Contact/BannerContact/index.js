import React from 'react';
import {
  Container,
  Wrapper,
  Row,
  ColumnLeft,
  Link,
  Description,
} from './styles';

import ImgContact from '../../../assets/contact.svg';

export default function Banner() {
  return (
    <Container id="contato">
      <Wrapper>
        <Row>
          <ColumnLeft>
            <Description>Entre em contato agora</Description>
            <Link href="/">Mande mensagem </Link>
          </ColumnLeft>
          <ColumnLeft>
            <img alt="contact" src={ImgContact} />
          </ColumnLeft>
        </Row>
      </Wrapper>
    </Container>
  );
}
