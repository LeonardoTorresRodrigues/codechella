import style from './Footer.module.scss';
import greyLogo from 'assets/grey_logo.png';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <img src={greyLogo} alt="<CodeChella/>" />
        <p className={style.footer_text}>
          Acesse nossas redes:
        </p>
      </div>
      <div className={style.footer_text}>
        <p>Desenvolvido por Leonardo Torres Rodrigues.</p>
        <p>Projeto fictício sem fins comerciais</p>
      </div>
    </div>
  );

}