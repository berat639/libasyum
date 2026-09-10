import { ArrowDown, ArrowRight, BookOpen } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/19840855/pexels-photo-19840855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const collectionImages = [
  'https://images.pexels.com/photos/31737844/pexels-photo-31737844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/31948997/pexels-photo-31948997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const collections = [
  { title: 'Modern Seri', detail: 'Sade çizgiler, güçlü bir duruş', image: collectionImages[0] },
  { title: 'Yaşam Alanları', detail: 'Evinizin atmosferine uyum', image: collectionImages[1] },
  { title: 'Klasik Dokunuş', detail: 'Zamansız tasarım, seçkin detaylar', image: collectionImages[2] },
];

type Props = {
  onNavigate: (page: string) => void;
};

export default function HomePage({ onNavigate }: Props) {
  return (
    <main>
      <section className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow light"><span /> Yeni nesil aydınlatma</div>
          <h1>Işığın <em>zarif</em><br />hali.</h1>
          <p>Her mekâna karakter katan, özenle tasarlanmış avize ve aydınlatma koleksiyonları.</p>
          <div className="hero-actions">
            <a className="button button-light" onClick={() => onNavigate('catalog')}>Koleksiyonu Keşfet <ArrowRight size={17} /></a>
            <button className="text-button light-text" type="button" onClick={() => onNavigate('catalog')}><BookOpen size={17} /> Katalogları Gör</button>
          </div>
        </div>
        <a className="scroll-note" onClick={() => onNavigate('catalog')}>
          <span>Keşfet</span>
          <span className="scroll-line" />
          <ArrowDown size={16} />
        </a>
        <div className="hero-index">01 <span>/</span> 03</div>
      </section>

      <section className="intro section">
        <div className="container intro-grid">
          <div>
            <div className="eyebrow"><span /> Libasyum Avize</div>
            <h2>Bir aydınlatmadan<br /><em>daha fazlası.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">Işığı yalnızca bir ihtiyaç değil, yaşam alanlarının ruhunu tamamlayan bir tasarım unsuru olarak görüyoruz.</p>
            <p>Libasyum Avize; seçkin malzeme, incelikli işçilik ve zamansız estetik anlayışıyla evlerden otellere, restoranlardan özel projelere kadar her mekâna özgün çözümler sunar.</p>
            <a className="underlined-link" onClick={() => onNavigate('about')}>Hikâyemizi keşfedin <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="collection section">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> Seçkilerimiz</div><h2>Yaşamınıza eşlik eden<br /><em>ışık.</em></h2></div>
            <p>Farklı zevklere ve mekânlara uyum sağlayan, özenle seçilmiş koleksiyonları keşfedin.</p>
          </div>
          <div className="collection-grid">
            {collections.map((item) => (
              <a className="collection-card" onClick={() => onNavigate('catalog')} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="card-shade" />
                <div className="collection-info">
                  <span>{item.detail}</span>
                  <h3>{item.title}</h3>
                  <span className="card-arrow"><ArrowRight size={18} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="promise section">
        <div className="container promise-grid">
          <div className="promise-heading"><div className="eyebrow"><span /> Neden Libasyum</div><h2>Detaylarda<br /><em>saklı.</em></h2></div>
          <div className="promise-items">
            <div className="promise-item"><span>01</span><div><h3>Özgün Tasarım</h3><p>Her koleksiyon, mekânların estetik dilini tamamlamak için tasarlanır.</p></div></div>
            <div className="promise-item"><span>02</span><div><h3>Usta İşçilik</h3><p>Kalıcı güzelliğin ardında deneyim, özen ve seçkin malzeme vardır.</p></div></div>
            <div className="promise-item"><span>03</span><div><h3>Proje Desteği</h3><p>Fikrinizden uygulamaya, uzman ekibimizle yanınızdayız.</p></div></div>
          </div>
        </div>
      </section>

      <section className="contact-cta section">
        <div className="container contact-inner">
          <div className="eyebrow"><span /> Birlikte çalışalım</div>
          <h2>Mekânınız için<br /><em>doğru ışık.</em></h2>
          <p>Projenizi ve hayalinizdeki atmosferi bizimle paylaşın.</p>
          <a className="button button-dark" onClick={() => onNavigate('contact')}>İletişime Geç <ArrowRight size={17} /></a>
        </div>
      </section>
    </main>
  );
}
