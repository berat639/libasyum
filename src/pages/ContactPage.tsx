import { useState } from 'react';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import ContactMap from '@/components/ContactMap';

type Props = {
  onNavigate: (page: string) => void;
};

export default function ContactPage({ onNavigate }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`İletişim Talebi - ${form.name}`);
    const body = encodeURIComponent(
      `Ad Soyad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:info@libasyum.com.tr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="eyebrow light"><span /> İletişim</div>
          <h1>Birlikte<br /><em>çalışalım.</em></h1>
          <p>Projenizi ve hayalinizdeki atmosferi bizimle paylaşın. En kısa sürede size dönüş yapalım.</p>
        </div>
        <div className="page-hero-bg" />
      </section>

      <section className="contact-page section">
        <div className="container contact-page-grid">
          <div className="contact-info">
            <div className="eyebrow"><span /> İletişim bilgileri</div>
            <h2>Mekânınız için<br /><em>doğru ışık.</em></h2>
            <p>Libasyum Avize olarak projelerinizi en doğru aydınlatmayla buluşturmak için buradayız.</p>
            <div className="contact-items">
              <a className="contact-item" href="tel:+905337427087">
                <span className="contact-icon"><Phone size={18} /></span>
                <div><small>Telefon</small><strong>0533 742 70 87</strong></div>
              </a>
              <a className="contact-item" href="mailto:info@libasyum.com.tr">
                <span className="contact-icon"><Mail size={18} /></span>
                <div><small>E-posta</small><strong>info@libasyum.com.tr</strong></div>
              </a>
              <div className="contact-item no-link">
                <span className="contact-icon"><MapPin size={18} /></span>
                <div><small>Showroom</small><strong>Ottoman Center, Ergazi Mah. 1804 Cad. 6/10 Yenimahalle / Ankara</strong></div>
              </div>
            </div>
            <div className="contact-hours">
              <small>Çalışma Saatleri</small>
              <span>Pazartesi — Cumartesi / 09:00 — 18:00</span>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon"><Check size={32} /></span>
                <h3>Talebiniz alındı</h3>
                <p>E-posta uygulamanız açıldı. Mesajınızı göndererek talebinizi tamamlayabilirsiniz. En kısa sürede size dönüş yapacağız.</p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="button button-dark" type="button" onClick={() => setSubmitted(false)}>Yeni talep oluştur</button>
                  <button className="button button-light" type="button" onClick={() => onNavigate('home')}>Ana Sayfaya Dön</button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="eyebrow"><span /> İletişim formu</div>
                <h3>Size nasıl<br />yardımcı olabiliriz?</h3>
                <div className="form-field">
                  <label htmlFor="name">Ad Soyad</label>
                  <input id="name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Adınız ve soyadınız" />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">E-posta</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="ornek@mail.com" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Telefon</label>
                    <input id="phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="05xx xxx xx xx" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea id="message" rows={4} required value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Projeniz ve ihtiyacınız hakkında bilgi verin" />
                </div>
                <button className="button button-dark full-button" type="submit">
                  Mesajı Gönder <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <ContactMap />
    </main>
  );
}
