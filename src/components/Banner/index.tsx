import banner from 'assets/banner_home.png';
import style from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={style.container_banner}>
      <img className={style.banner} src={banner} alt="Boas-vindas ao #CodeChella2023!" />
      <div className={style.text}>
        <h2 >Boas-vindas ao</h2>
        <h2>#CodeChella2023!</h2>
      </div>
    </div >
  );
}