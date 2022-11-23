import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

import Logo from "../../assets/logo.svg";
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
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { userInfos, deauthenticateUser } = useAuth();
  const { search, setSearch } = useSearch();

  const navigate = useNavigate();

  function renderButtonsDesktop() {
    if (!userInfos || !userInfos.isAdm) {
      return (
        <ul>
          <li>
            <SearchBar
              value={search}
              onChange={e => setSearch(e.target.value)}
              onClick={handleSearchByTitle}
              onKeyPress={activateSearchByEnter}
            />
          </li>
          <li>
            <button type="button" onClick={() => handleGoToPage("/favorites")}>
              <FiHeart />
            </button>
          </li>
          <li>
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
          </li>
          <li>
            <button type="button" onClick={() => handleGoToPage("/all-orders")}>
              <TfiReceipt />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleGoToPage("/profile")}>
              <FiUser />
            </button>
          </li>
          <li>
            <button onClick={handleSignInSignOut}>
              <FiLogOut />
            </button>
          </li>
        </ul>
      );
    }

    if (userInfos.isAdm) {
      return (
        <ul>
          <li>
            <SearchBar
              value={search}
              onChange={e => setSearch(e.target.value)}
              onClick={handleSearchByTitle}
              onKeyPress={activateSearchByEnter}
            />
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
            <button type="button" onClick={() => handleGoToPage("/favorites")}>
              <FiHeart />
              Favoritos
            </button>
          </li>
          <li>
            <Link to="/cart">
              <FiShoppingCart />
              Carrinho
            </Link>
          </li>
          <li>
            <button type="button" onClick={() => handleGoToPage("/all-orders")}>
              <TfiReceipt />
              Pedidos
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleGoToPage("/profile")}>
              <FiUser />
              Perfil
            </button>
          </li>
          <li>
            <button onClick={handleSignInSignOut}>
              <FiLogOut />
              {userInfos ? "Sair" : "Entrar"}
            </button>
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

  function handleGoToPage(page) {
    if (!userInfos) {
      const response = confirm(`
        Para utilizar esse recurso você precisa estar logado.
        Deseja se logar agora?
      `);

      if (response) {
        navigate("/login");
      }
    }

    if (userInfos) {
      navigate(page);
    }
  }

  function handleMenuOpen() {
    setMenuOpen(prevState => !prevState);
  }

  function logOutTheUser() {
    const confirmation = confirm("Tem certeza que deseja sair?");

    if (confirmation) {
      navigate("/");

      deauthenticateUser();

      return window.location.reload();
    }
  }

  function handleSignInSignOut() {
    if (userInfos) {
      logOutTheUser();
    } else {
      navigate("/login");
    }
  }

  function handleSearchByTitle() {
    navigate(`/?title=${search}`);
  }

  function activateSearchByEnter(e) {
    if (e.key === "Enter") {
      handleSearchByTitle();
    }
  }

  return (
    <Container>
      <Wrapper>
        <Desktop>
          <Brand to="/">
            <img src={Logo} alt="Foto do logotipo food explorer" />
            <h2>food explorer</h2>
          </Brand>
          <nav>{renderButtonsDesktop()}</nav>
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
          <Navigation>{renderButtonsMobile()}</Navigation>
        </Mobile>
      </Wrapper>
    </Container>
  );
}
