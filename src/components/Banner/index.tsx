import banner from 'assets/banner_home.png';
import style from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={style.container_banner}>
      <img className={style.banner} src={banner} alt="Boas-vindas ao #CodeChella2023!" />
      <h2 className={style.text}>Boas-vindas ao #CodeChella2023!</h2>
    </div>
  );
}