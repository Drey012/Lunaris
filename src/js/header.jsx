import React, { useState, useEffect } from 'react';
import '../css/global.scss';
import '../css/header.scss';
import { toggleTheme } from './theme';
import logo from './assets/logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Define a partir de 50px de rolagem
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
     <a href="#">
      <img src={logo} alt="Logo da empresa" id="logo" />
      </a>
      <div className="menu">
        <ul>
        <li><a id="Prod" href="#produtos-title">Nossos Produtos</a> |</li> {/*Os divisores estão no html pois foi o método mais adequado para mim*/}
        <li><a id="Feed" href="#feedbacks-title">Feedbacks</a> |</li>
        <li><a id="Cont" href="#contato">Contato</a></li>
        </ul>
      </div>
      <label className="toggle-theme">
        <input id="check" type="checkbox" onClick={toggleTheme} />
        <span className="slider"></span>
      </label>
    </header>
  );
}

export default Header;
