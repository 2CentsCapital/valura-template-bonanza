import { useState, useRef, useEffect } from 'react';
import './ServiceArea.css';

const imgLinkSvg = "http://localhost:3845/assets/550b83de2ad03ea9823ca5bf9ffef8724e9597b3.svg";
const imgSvg = "http://localhost:3845/assets/1cf4f660ad3c77deaff1a860eaaaa33f849d5ec6.svg"; // Map SVG
const imgSvg1 = "http://localhost:3845/assets/95aee40afa93a7c35a34e67b68e7dccf390fd263.svg"; // Search icon
const imgSvg2 = "http://localhost:3845/assets/957922ce116c1f19a12d73c767c51b1b5ebd888c.svg"; // Dropdown chevron

const COUNTRIES = [
  'United Kingdom',
  'Ireland',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Belgium',
  'Austria',
  'Sweden',
  'Denmark',
  'Finland',
  'Norway',
  'Portugal'
];

export default function ServiceArea() {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = COUNTRIES.filter(country =>
    country.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="service-area-wrapper" data-node-id="93:975">
      <div className="service-area" data-node-id="93:976">
        <div className="service-badge-container">
          <div className="badge" data-node-id="93:977">
            <span data-node-id="93:978">Country Availability</span>
          </div>
        </div>

        <h2 className="service-title" data-node-id="93:980">
          We've got you covered in over 30 countries
        </h2>

        <a href="#find-countries" className="service-link" data-node-id="93:981">
          <span>Find all countries we cover</span>
          <img src={imgLinkSvg} alt="Arrow Link" data-node-id="93:982" />
        </a>

        {/* Map Container */}
        <div className="map-container" data-node-id="93:984">
          <img src={imgSvg} className="map-bg-image" alt="World Map showing coverage" data-node-id="93:985" />

          {/* Search Box */}
          <div className="search-box-wrapper" ref={dropdownRef}>
            <div className="search-box" data-node-id="93:1242" onClick={() => setIsOpen(!isOpen)}>
              <img src={imgSvg1} alt="Search Icon" data-node-id="93:1244" />
              <input
                type="text"
                placeholder="Pick a country"
                className="search-input"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setIsOpen(true);
                }}
                data-node-id="93:1248"
              />
              <img src={imgSvg2} alt="Chevron dropdown" />
            </div>

            {isOpen && (
              <ul className="country-dropdown">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country, idx) => (
                    <li
                      key={idx}
                      className="country-item"
                      onClick={() => {
                        setSelectedCountry(country);
                        setSearch(country);
                        setIsOpen(false);
                      }}
                    >
                      {country}
                    </li>
                  ))
                ) : (
                  <li className="country-item">No countries found</li>
                )}
              </ul>
            )}
          </div>

          {/* Status info box */}
          {selectedCountry && (
            <div className="selection-info-box">
              <strong>Kota is active in {selectedCountry}!</strong>
              <p style={{ margin: '8px 0 0', opacity: 0.9, fontSize: '13px' }}>
                Local health insurance and workplace pension packages are ready to deploy immediately in this region.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
