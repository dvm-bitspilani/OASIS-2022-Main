import map from "../Assets/Map/pilani-map.svg";
import mobileMap from "../Assets/Map/pilani-map-mobile.svg";
import styles from "../styles/Hamburger.module.css";

export default function CampusMap() {
  return (
    <div className={styles.mapSurface}>
      <a
        className={styles.mapLink}
        href="https://www.google.com/maps/search/?api=1&query=28.3585942%2C75.5884245"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open BITS Pilani on Google Maps"
      >
        <picture>
          <source media="(max-width: 900px)" srcSet={mobileMap} />
          <img src={map} alt="Map of BITS Pilani in Pilani, Rajasthan" width="640" height="760" loading="lazy" decoding="async" />
        </picture>
      </a>
      <a className={styles.mapCredit} href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
        © OpenStreetMap contributors
      </a>
    </div>
  );
}
