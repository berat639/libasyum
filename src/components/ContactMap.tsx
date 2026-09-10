import { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LAT = 39.9488;
const LNG = 32.7095;
const ADDRESS = 'Ergazi, 1804. Cd. No:6 D:10, 06370 Yenimahalle/Ankara';
const GOOGLE_MAPS_DESTINATION = 'Libasyum avize, Ergazi, 1804. Cd. No:6 D:10, 06370 Yenimahalle/Ankara';

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const leaflet = (L as unknown as { default?: typeof L }).default || L;

    const markerIcon = leaflet.divIcon({
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

    const map = leaflet.map(mapRef.current, {
      center: [LAT, LNG],
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    leaflet.control.attribution({ position: 'bottomleft' }).addTo(map);

    leaflet.tileLayer('https://{s}.google.com/vt/lyrs=m&hl=tr&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Haritalar',
    }).addTo(map);

    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(GOOGLE_MAPS_DESTINATION)}`;

    const marker = leaflet.marker([LAT, LNG], { icon: markerIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: inherit; padding: 2px;">
        <strong style="color:#535353; font-size:14px;">Libasyum Avize</strong><br/>
        <span style="font-size:12px; color:#666; line-height:1.4; display:block; margin:4px 0 8px;">${ADDRESS}</span>
        <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="color:#b99970; font-weight:700; font-size:11px; text-transform:uppercase; text-decoration:underline;">Yol Tarifi Al &rarr;</a>
      </div>
    `);

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  const openGoogleMapsDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(GOOGLE_MAPS_DESTINATION)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="contact-map-section">
      <div className="contact-map-header">
        <div className="eyebrow"><span /> Bizi ziyaret edin</div>
        <h2>Showroom&apos;umuz<br /><em>burada.</em></h2>
        <p>{ADDRESS}</p>
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
