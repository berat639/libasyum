import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  const [page, setPage] = useState<string>('home');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'catalog', 'about', 'contact'].includes(hash)) {
      setPage(hash);
    }
    const handler = () => {
      const h = window.location.hash.replace('#', '');
      if (['home', 'catalog', 'about', 'contact'].includes(h)) {
        setPage(h);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = (p: string) => {
    window.location.hash = p;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="site-shell">
      <Header onNavigate={navigate} currentPage={page} />
      {page === 'home' && <HomePage onNavigate={navigate} />}
      {page === 'catalog' && <CatalogPage onNavigate={navigate} />}
      {page === 'about' && <AboutPage onNavigate={navigate} />}
      {page === 'contact' && <ContactPage onNavigate={navigate} />}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
