import style from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/white_logo.svg';

export default function Header() {
  return (
    <div className={style.header}>
      <Logo />
      <nav className={style.header__nav}>
        <a className={style.header__link} href="">A experiência</a>
        <a className={style.header__link} href="">Mapa de Setores</a>
        <a className={style.header__link} href="">Informações</a>
        <a className={style.header__link} href="">Ingresso</a>
      </nav>
    </div>
  );
}