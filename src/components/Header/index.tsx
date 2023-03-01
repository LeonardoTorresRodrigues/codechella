import style from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/Logo.svg';

export default function Header() {
  return (
    <div className={style.nav}>
      <Logo />
    </div>
  );
}