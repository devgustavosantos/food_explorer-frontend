import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiPlus,
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

  const [userInfos, setUserInfos] = useState(null);

  const [adm, setAdmin] = useState(false);

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
              {adm ? (
                <li>
                  <a href="#">
                    <FiPlus />
                  </a>
                </li>
              ) : (
                <li>
                  <a href="#">
                    <FiHeart />
                  </a>
                </li>
              )}
              {!adm && (
                <li>
                  <Link to="/cart">
                    <FiShoppingCart />
                  </Link>
                </li>
              )}
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
                <Link to="/login">
                  <FiLogOut />
                </Link>
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
              {adm ? (
                <li>
                  <a href="#">
                    <FiPlus />
                    Adicionar
                  </a>
                </li>
              ) : (
                <li>
                  <a href="#">
                    <FiHeart />
                    Favoritos
                  </a>
                </li>
              )}
              {!adm && (
                <li>
                  <Link to="/cart">
                    <FiShoppingCart />
                    Carrinho
                  </Link>
                </li>
              )}
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
                <Link to="/login">
                  <FiLogOut />
                  {userInfos ? "Sair" : "Entrar"}
                </Link>
              </li>
            </ul>
          </Navigation>
        </Mobile>
      </Wrapper>
    </Container>
  );
}
