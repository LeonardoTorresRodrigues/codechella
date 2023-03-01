import banner from 'assets/banner_boasvindas.png';
import style from './Banner.module.scss';

export default function Banner() {
  return (
    <img className={style.banner} src={banner} alt="Boas-vindas ao #CodeChella2023!" />
  );
}