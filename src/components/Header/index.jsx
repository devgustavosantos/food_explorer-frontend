import { useState } from "react";
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

import {
  Container,
  Desktop,
  Mobile,
  Brand,
  HamburgerMenu,
  Navigation,
} from "./styles";
import { Wrapper } from "../Wrapper";
import { SearchBar } from "../SearchBar";
import Logo from "../../assets/logo.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(prevState => !prevState);
  }

  return (
    <Container>
      <Wrapper>
        <Desktop>
          <Brand>
            <img src={Logo} alt="Foto do logotipo food explorer" />
            <h2>food explorer</h2>
          </Brand>
          <nav>
            <ul>
              <li>
                <SearchBar />
              </li>
              <li>
                <a href="#">
                  <FiHeart />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiShoppingCart />
                </a>
              </li>
              <li>
                <a href="#">
                  <TfiReceipt />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiUser />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiLogOut />
                </a>
              </li>
            </ul>
          </nav>
        </Desktop>
        <Mobile>
          <div className="top">
            <Brand>
              <img src={Logo} alt="Foto do logotipo food explorer" />
              <h2>food explorer</h2>
            </Brand>
            <HamburgerMenu onClick={handleMenuOpen}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </HamburgerMenu>
          </div>

          <Navigation>
            <ul className={menuOpen ? "" : "hidden"}>
              <li>
                <SearchBar />
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
            </ul>
          </Navigation>
        </Mobile>
      </Wrapper>
    </Container>
  );
}
