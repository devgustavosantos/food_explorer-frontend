import { useState } from "react";

import { Container, Menu, Options } from "./styles";

import {
  FiMenu,
  FiX,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import { TfiReceipt } from "react-icons/tfi";

import { Wrapper } from "../Wrapper";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  function handleMenuOpen() {
    setMenuOpen(prevState => !prevState);
  }

  return (
    <Container>
      <Wrapper>
        <Menu onClick={handleMenuOpen}>{menuOpen ? <FiX /> : <FiMenu />}</Menu>
        <Options className={menuOpen ? "" : "hidden"}>
          <li>
            <a href="#">
              <FiSearch />
              Pesquisar
            </a>
          </li>
          <li>
            <a href="#">
              <FiHeart />
              Favoritos
            </a>
          </li>
          <li>
            <a href="#">
              <FiShoppingCart />
              Carrinho
            </a>
          </li>
          <li>
            <a href="#">
              <TfiReceipt />
              Pedidos
            </a>
          </li>
          <li>
            <a href="#">
              <FiUser />
              Perfil
            </a>
          </li>
          <li>
            <a href="#">
              <FiLogOut />
              Sair
            </a>
          </li>
        </Options>
      </Wrapper>
    </Container>
  );
}
