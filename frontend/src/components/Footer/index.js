import React from 'react';
import {
  Container,
  Wrapper,
  Row,
  Column,
  Link,
  Title,
  ColumnImg,
  ColumnSocial,
} from './styles';

import logoMattes from '../../assets/logo.png';

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Row>
          <ColumnImg>
            <img alt="logo" src={logoMattes} />
          </ColumnImg>
          <Column>
            <Title>O projeto</Title>
            <Link href="/">Sobre</Link>
            <Link href="#">Fale Conosco</Link>
          </Column>
          <Column>
            <Title>Titulo2</Title>
            <Link href="#">Link1</Link>
            <Link href="#">Link2</Link>
          </Column>
          <Column></Column>
          <ColumnSocial>
            <Link href="/">
              <p>Brasil</p>
            </Link>
          </ColumnSocial>
        </Row>
      </Wrapper>
    </Container>
  );
}
