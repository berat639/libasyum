import { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LAT = 39.9492;
const LNG = 32.7107;
const ADDRESS = 'Ottoman Center, Ergazi Mah. 1804 Cad. 6/10 Yenimahalle / Ankara';

const markerIcon = L.divIcon({
  html: `<div style="
    width: 32px; height: 32px; border-radius: 50% 50% 50% 0;
    background: #535353; transform: rotate(-45deg);
    border: 3px solid #b99970; box-shadow: 0 4px 12px rgba(0,0,0,.3);
    display: flex; align-items: center; justify-content: center;
  "><div style="
    width: 10px; height: 10px; border-radius: 50%;
    background: #b99970; transform: rotate(45deg);
  "></div></div>`,
  className: 'libasyum-marker',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [LAT, LNG],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 19,
        subdomains: 'abcd',
      }
    ).addTo(map);

    const marker = L.marker([LAT, LNG], { icon: markerIcon }).addTo(map);
    marker.bindPopup(`<strong style="color:#535353">Libasyum Avize</strong><br/><span style="font-size:12px;color:#777">${ADDRESS}</span>`);

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  const openGoogleMapsDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="contact-map-section">
      <div className="contact-map-header">
        <div className="eyebrow"><span /> Bizi ziyaret edin</div>
        <h2>Showroom&apos;umuz<br /><em>burada.</em></h2>
        <p>Ottoman Center, Ergazi Mah. 1804 Cad. 6/10 Yenimahalle / Ankara</p>
      </div>
      <div className="contact-map-wrap">
        <div ref={mapRef} className="contact-map" />
        <button className="directions-button" type="button" onClick={openGoogleMapsDirections}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          Yol Tarifi Al
        </button>
      </div>
    </div>
  );
}
