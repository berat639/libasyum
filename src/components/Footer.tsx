import { ArrowRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Footer({ onNavigate }: Props) {
  const go = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/logobeyaz.png" alt="Libasyum Avize" />
          <p className="footer-motto">İç mekânlara değer katan ışık.</p>
        </div>
        <div className="footer-column">
          <small>İletişim</small>
          <a href="tel:+905337427087"><Phone size={15} /> 0533 742 70 87</a>
          <a href="mailto:info@libasyum.com.tr"><Mail size={15} /> info@libasyum.com.tr</a>
        </div>
        <div className="footer-column">
          <small>Showroom</small>
          <span><MapPin size={15} /> Ottoman Center, Ergazi Mah. 1804 Cad. 6/10 Yenimahalle / Ankara</span>
          <span>Pzt — Cmt / 09:00 — 18:00</span>
        </div>
        <div className="footer-column social">
          <small>Bizi takip edin</small>
          <a href="#home"><Instagram size={17} /> Instagram</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2024 Libasyum Avize. Tüm hakları saklıdır.</span>
        <button className="footer-link" onClick={() => go('contact')}>İletişime geç <ArrowRight size={13} /></button>
      </div>
    </footer>
  );
}
