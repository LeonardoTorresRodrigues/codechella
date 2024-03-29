import Banner from 'components/Banner';
import Card from 'components/Card';
import Footer from 'components/Footer';
import Header from '../../components/Header';
import style from './Home.module.scss';

export default function Home() {
  return (
    <div>
      <div className={style.menu}>
        <Header />
        <Banner />
      </div>
      <main>
        <Card />
      </main>
      <div>
        <Footer />
      </div>
    </div>

  );
}