import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';

import { MenuContainer, MenuIcon, Menus, MenuList } from './styles';

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <MenuContainer>
      {!open && (
        <MenuIcon open={open} onClick={() => setOpen(!open)}>
          <FiMenu />
        </MenuIcon>
      )}

      {open && (
        <MenuIcon open={open} onClick={() => setOpen(!open)}>
          <RiCloseFill />
        </MenuIcon>
      )}

      <Menus open={open}>
        <MenuList>
          <li>
            <a href="/">Inicio</a>
          </li>

          <li>
            <a href="sobre/">Sobre</a>
          </li>

          <li>
            <a href="/contato">Contato</a>
          </li>
        </MenuList>
      </Menus>
    </MenuContainer>
  );
}
