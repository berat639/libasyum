import { ArrowRight } from 'lucide-react';

const aboutImage =
  'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const values = [
  { number: '01', title: 'Tasarım Felsefesi', text: 'Her avize, ışığın mekânla kurduğu ilişkiyi düşünerek tasarlanır. Form, fonksiyon ve estetiği bir araya getiriyoruz.' },
  { number: '02', title: 'Malzeme Kalitesi', text: 'Kristal cam, pirinç ve seçkin metaller; dayanıklılık ve ışık kalitesini birlikte sunan temel malzemelerimizdir.' },
  { number: '03', title: 'Usta İşçiliği', text: 'Her ürün, deneyimli ustalarımızın elinden çıkıyor. Detaylara gösterilen özen, ürünlerimizin karakterini belirler.' },
  { number: '04', title: 'Proje Çözümleri', text: 'Konut, otel, restoran ve ofis projeleri için özgün aydınlatma çözümleri üretiyoruz.' },
];

type Props = {
  onNavigate: (page: string) => void;
};

export default function AboutPage({ onNavigate }: Props) {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Hakkımızda</div>
          <h1>Bir aydınlatmadan<br /><em>daha fazlası.</em></h1>
          <p>Işığı yalnızca bir ihtiyaç değil, yaşam alanlarının ruhunu tamamlayan bir tasarım unsuru olarak görüyoruz.</p>
        </div>
        <div className="page-hero-bg" />
      </section>

      <section className="about-story section">
        <div className="container about-story-grid">
          <div className="about-story-image">
            <img src={aboutImage} alt="Libasyum Avize showroom" />
          </div>
          <div className="about-story-text">
            <div className="eyebrow"><span /> Hikâyemiz</div>
            <h2>Kuruluşumuzdan bu yana<br /><em>ışık tasarlıyoruz.</em></h2>
            <p className="lead">Libasyum Avize, aydınlatma sektöründe özgün tasarımlar üreten genç ve dinamik bir markadır.</p>
            <p>Kuruluşumuzdan bu yana, ışığın mekânlara kattığı değeri sanatsal bir bakış açısıyla ele alıyoruz. Her koleksiyonumuz, ustalık ve estetiğin birleşiminden doğuyor. Modern üretim tekniklerini geleneksel el işçiliğiyle harmanlayarak, her mekâna özgün karakter katan ürünler ortaya çıkarıyoruz.</p>
            <p>Evlerden otellere, restoranlardan özel projelere kadar geniş bir uygulama yelpazesinde, müşterilerimizin hayal ettiği atmosferi doğru ışıkla buluşturuyoruz.</p>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow center-eyebrow"><span /> Değerlerimiz</div>
            <h2>Bizi biz yapan<br /><em>değerler.</em></h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.number}>
                <span className="value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats section">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">Yeni</span>
            <span className="stat-label">Marka</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Tamamlanan proje</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Ürün serisi</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Özgün tasarım</span>
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
