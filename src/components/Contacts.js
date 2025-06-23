import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./styles/Contacts.css";

function Contacts() {
  useEffect(() => {
    // Перевіряємо чи вже завантажена бібліотека Leaflet
    if (typeof window.L === 'undefined') {
      const leafletCSS = document.createElement('link');
      leafletCSS.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
      leafletCSS.rel = 'stylesheet';
      document.head.appendChild(leafletCSS);

      const leafletScript = document.createElement('script');
      leafletScript.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
      leafletScript.onload = initMap;
      document.head.appendChild(leafletScript);
    } else {
      initMap();
    }

    function initMap() {
      const map = window.L.map('map').setView([49.5883, 34.5514], 13); // Координати Полтави

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      window.L.marker([49.5883, 34.5514]).addTo(map)
        .bindPopup('Туристичний портал України')
        .openPopup();
    }

    return () => {
      const mapElement = document.getElementById('map');
      if (mapElement && mapElement._leaflet_map) {
        mapElement._leaflet_map.remove();
      }
    };
  }, []);

  return (
    <section>
      <h2>Контакти</h2>
      <p>
        Email: tourismua@gmail.com <br />
        Адреса: Полтава, Україна
      </p>
      <div
        id="map"
        style={{ width: "100%", height: "400px", borderRadius: "8px" }}
      ></div>
    </section>
  );
}

export default Contacts;