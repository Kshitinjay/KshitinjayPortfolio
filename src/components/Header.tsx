import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const RESUME_URL =
  'https://drive.google.com/file/d/1sk9HbQIGO5ebwYTP1EZeL16c3uoLJq73/view?usp=sharing';

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const openResume = () => window.open(RESUME_URL, '_blank', 'noopener');

  return (
    <header className="top">
      <div className="wrap">
        <div className="top-in">
          <a className="logo" href="#top">
            <span className="d" />
            Kshitinjay Kumar
          </a>

          <nav className="top-nav">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="top-cta">
            <button className="resume-link desktop" onClick={openResume} title="Download résumé">
              <ArrowDownTrayIcon />
              Résumé
            </button>
            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>

        <div className={`mobile-nav${open ? ' open' : ''}`}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              openResume();
              setOpen(false);
            }}
          >
            <ArrowDownTrayIcon style={{ width: 16, height: 16 }} />
            Download résumé
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
