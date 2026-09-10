import { useState } from 'react';
import { ArrowDown, ArrowRight, Check, FileText, Mail, X } from 'lucide-react';

const catalogData = [
  {
    number: '01',
    title: 'Yeni Sezon Koleksiyonu',
    type: 'Ürün Kataloğu',
    pages: '48 sayfa',
    description: 'Sezonun en yeni avize ve aydınlatma ürünlerini içeren güncel koleksiyon kataloğumuz.',
  },
  {
    number: '02',
    title: 'Dekoratif Aydınlatma',
    type: 'Ürün Kataloğu',
    pages: '36 sayfa',
    description: 'Dekoratif aydınlatma serimiz; sarkıtlar, aplikler ve masa lambaları.',
  },
  {
    number: '03',
    title: 'Proje & Teknik',
    type: 'Teknik Katalog',
    pages: '24 sayfa',
    description: 'Proje bazlı uygulamalar için teknik çizimler, ölçüler ve montaj detayları.',
  },
];

type Props = {
  onNavigate: (page: string) => void;
};

export default function CatalogPage({ onNavigate }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCatalog, setSelectedCatalog] = useState<string | null>(null);

  const openModal = (title?: string) => {
    setSelectedCatalog(title ?? null);
    setModalOpen(true);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> Dijital Katalog</div>
          <h1>Hayal ettiğiniz<br /><em>ışığı bulun.</em></h1>
          <p>Ürünlerimizi, ölçülerimizi ve teknik detaylarımızı kataloglarımızda inceleyin. Katalog talebiniz için bizimle iletişime geçin.</p>
        </div>
        <div className="page-hero-bg" />
      </section>

      <section className="catalog-detail section">
        <div className="container">
          <div className="catalog-detail-grid">
            {catalogData.map((catalog) => (
              <div className="catalog-detail-card" key={catalog.number}>
                <div className="catalog-detail-top">
                  <span className="catalog-detail-number">{catalog.number}</span>
                  <span className="catalog-detail-type">{catalog.type}</span>
                </div>
                <h3>{catalog.title}</h3>
                <p>{catalog.description}</p>
                <div className="catalog-detail-footer">
                  <span className="catalog-detail-pages">{catalog.pages}</span>
                  <button className="catalog-detail-btn" type="button" onClick={() => openModal(catalog.title)}>
                    Katalog Talep Et <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-cta">
        <div className="container catalog-cta-inner">
          <div>
            <div className="eyebrow light"><span /> Toplu talep</div>
            <h2>Tüm katalogları<br /><em>tek seferde alın.</em></h2>
          </div>
          <button className="button button-outline-light" type="button" onClick={() => openModal()}>
            Tüm katalogları talep et <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onClick={() => setModalOpen(false)}>
          <div className="catalog-modal" role="dialog" aria-modal="true" aria-labelledby="catalog-title" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setModalOpen(false)} aria-label="Kapat"><X size={20} /></button>
            <div className="catalog-mark"><FileText size={25} /></div>
            <div className="eyebrow"><span /> Katalog talebi</div>
            <h2 id="catalog-title">Kataloğunuzu<br /><em>birlikte seçelim.</em></h2>
            <p>
              {selectedCatalog
                ? `${selectedCatalog} için talebinizi alıyoruz. En kısa sürede size iletelim.`
                : 'Güncel ürün kataloğumuzu ve proje dosyalarımızı size iletmemiz için bize ulaşın. Ekibimiz en kısa sürede dönüş yapacaktır.'}
            </p>
            <a className="button button-dark full-button" href="mailto:info@libasyum.com.tr?subject=Katalog%20Talebi">
              Katalog talep et <Mail size={17} />
            </a>
            <div className="modal-note"><Check size={15} /> Güncel PDF dosyaları için doğrudan ekibimizle iletişime geçebilirsiniz.</div>
          </div>
        </div>
      )}
    </main>
  );
}
