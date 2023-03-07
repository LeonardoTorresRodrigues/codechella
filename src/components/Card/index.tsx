import styles from './Card.module.scss';
import ImgHome from 'assets/home_img_1.png';

export default function Card() {
  return (
    <section className={styles.about}>
      <div className={styles.card}>
        <div>
          <img className={styles.card_img} src={ImgHome} alt="pessoas felizes" />
        </div>
        <div>
          <h6 className={styles.description_title}> 11 e 12 de Março  Aluródremo de São Paulo </h6>
          <p className={styles.description_text}>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
          </p>
        </div>
      </div>
    </section>

  );
}