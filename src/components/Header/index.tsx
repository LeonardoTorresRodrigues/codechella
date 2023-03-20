import style from './Header.module.scss';
import logo from 'assets/white_logo.png';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function Header() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={style.header}>
        <img src={logo} alt="<CodeChella/>" />
        <Hamburger
          color='FFF'
          easing='ease-in'
          label='Abrir menu de navegação'
          size={32}
          toggled={isOpen}
          toggle={setOpen}
        />
        {isOpen && (
          <nav className={style.header_nav}>
            <ul className={style.header_ul}>
              <li className={style.header_li} ><a className={style.header_a} href="#">A experiência</a></li >
              <li className={style.header_li}><a className={style.header_a} href="#">Mapa de Setores</a></li>
              <li className={style.header_li}><a className={style.header_a} href="#">Informações</a></li>
              <li className={style.header_li}><a className={style.header_a} href="#">Ingresso</a></li>
            </ul>
          </nav>
        )}
        <nav className={style.nav}>
          <ul>
            <li><a href="#">A experiência</a></li>
            <li><a href="#">Mapa de Setores</a></li>
            <li><a href="#">Informações</a></li>
            <li><a href="#">Ingresso</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}