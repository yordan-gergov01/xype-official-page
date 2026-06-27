import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Проекти', href: '#work' },
  { label: 'За нас', href: '#about' },
  { label: 'AI одит', href: '#research' },
  { label: 'Контакти', href: '#contact' },
];

function Navbar() {
  const [visible, setVisible] = useState<boolean>(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 50);
      setLastY(currentY);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-3 flex items-center justify-between transition-all duration-500 navbar-glass"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        opacity: visible ? 1 : 0,
      }}
    >
      <a href="#top" aria-label="XYPE - начало">
        <img src="/xype_logo_transparent_bg.png" alt="XYPE" className="h-8 w-auto ml-5 scale-[3]" />
      </a>

      {/* Desktop menu — centered */}
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-foreground/70 hover:text-primary transition-colors duration-200 text-[15px] tracking-wide"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Follow us — right */}
      <a
        href="https://www.linkedin.com/company/xype-io"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-200 text-[15px] tracking-wide"
      >
        <FaLinkedin size={22} />
        Последвай ни
      </a>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground p-2"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Затвори менюто' : 'Отвори менюто'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 navbar-glass flex flex-col px-8 py-6 gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-foreground/70 hover:text-primary transition-colors duration-200 text-[16px] tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/company/xype-io"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-200 text-[16px] tracking-wide"
          >
            <FaLinkedin size={22} />
            Последвай ни
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
