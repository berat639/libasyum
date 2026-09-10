import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';

type Props = {
  onNavigate: (page: string) => void;
  currentPage: string;
};

export default function Header({ onNavigate, currentPage }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navItems = [
    { label: 'Ana Sayfa', page: 'home' },
    { label: 'Katalog', page: 'catalog' },
    { label: 'Hakkımızda', page: 'about' },
    { label: 'İletişim', page: 'contact' },
  ];

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>İç mekânlara değer katan ışık</span>
          <span className="topline-right"><Phone size={13} /> 0533 742 70 87</span>
        </div>
      </div>
      <header className={scrolled ? 'header scrolled' : 'header'}>
        <div className="container nav-wrap">
          <a className="brand" onClick={() => go('home')} aria-label="Libasyum Avize ana sayfa">
            <img src="/logo.png" alt="Libasyum Avize" />
          </a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {navItems.map((item) => (
              <a
                key={item.page}
                className={currentPage === item.page ? 'active' : ''}
                onClick={() => go(item.page)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="menu-button" type="button" aria-label="Menüyü aç" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <a className="nav-cta" onClick={() => go('contact')}>İletişime Geç <ArrowRight size={16} /></a>
        </div>
      </header>
    </>
  );
}
