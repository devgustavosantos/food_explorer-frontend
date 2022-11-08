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
import { ModalUnauthorized } from "../ModalUnauthorized";
import Logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [adm, setAdmin] = useState(false);

  const { userInfos } = useAuth();

  function renderButtonsDesktop() {
    if (!userInfos || !userInfos.isAdm) {
      return (
        <ul>
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="/favorites">
              <FiHeart />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/all-orders">
              <TfiReceipt />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FiUser />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FiLogOut />
            </Link>
          </li>
        </ul>
      );
    }

    if (userInfos.isAdm) {
      return (
        <ul>
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="/new">
              <FiPlus />
            </Link>
          </li>
          <li>
            <Link to="/all-orders">
              <TfiReceipt />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FiUser />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FiLogOut />
            </Link>
          </li>
        </ul>
      );
    }
  }

  function renderButtonsMobile() {
    if (!userInfos || !userInfos.isAdm) {
      return (
        <ul className={menuOpen ? "" : "hidden"}>
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="/favorites">
              <FiHeart />
              Favoritos
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FiShoppingCart />
              Carrinho
            </Link>
          </li>
          <li>
            <Link to="/all-orders">
              <TfiReceipt />
              Pedidos
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FiUser />
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FiLogOut />
              {userInfos ? "Sair" : "Entrar"}
            </Link>
          </li>
        </ul>
      );
    }

    if (userInfos.isAdm) {
      return (
        <ul className={menuOpen ? "" : "hidden"}>
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="/new">
              <FiPlus />
              Adicionar
            </Link>
          </li>
          <li>
            <Link to="/all-orders">
              <TfiReceipt />
              Pedidos
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FiUser />
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FiLogOut />
              {userInfos ? "Sair" : "Entrar"}
            </Link>
          </li>
        </ul>
      );
    }
  }

  function handleGoFavorites() {}

  function handleMenuOpen() {
    setMenuOpen(prevState => !prevState);
  }

  return (
    <Container>
      <Wrapper>
        <Desktop>
          <Brand to="/">
            <img src={Logo} alt="Foto do logotipo food explorer" />
            <h2>food explorer</h2>
          </Brand>
          <nav>
            {/* <ul>
              <li>
                <SearchBar />
              </li>
              {adm ? (
                <li>
                  <Link to="/new">
                    <FiPlus />
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/favorites">
                    <FiHeart />
                  </Link>
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
                <Link to="/all-orders">
                  <TfiReceipt />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <FiUser />
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FiLogOut />
                </Link>
              </li>
            </ul> */}
            {renderButtonsDesktop()}
          </nav>
        </Desktop>
        <Mobile>
          <div className="top">
            <Brand to="/">
              <img src={Logo} alt="Foto do logotipo food explorer" />
              <h2>food explorer</h2>
            </Brand>
            <HamburgerMenu onClick={handleMenuOpen}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </HamburgerMenu>
          </div>

          <Navigation>
            {/* <ul className={menuOpen ? "" : "hidden"}>
              <li>
                <SearchBar />
              </li>
              {adm ? (
                <li>
                  <Link to="/new">
                    <FiPlus />
                    Adicionar
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/favorites">
                    <FiHeart />
                    Favoritos
                  </Link>
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
                <Link to="/all-orders">
                  <TfiReceipt />
                  Pedidos
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <FiUser />
                  Perfil
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FiLogOut />
                  {userInfos ? "Sair" : "Entrar"}
                </Link>
              </li>
            </ul> */}
            {renderButtonsMobile()}
          </Navigation>
        </Mobile>
      </Wrapper>
      {/* <ModalUnauthorized /> */}
    </Container>
  );
}
