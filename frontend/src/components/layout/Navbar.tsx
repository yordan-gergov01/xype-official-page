import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [visible, setVisible] = useState<boolean>(true);
  const [lastY, setLastY] = useState(0);

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
      <img src="/xype_logo_transparent_bg.png" alt="XYPE" className="h-8 w-auto ml-5 scale-[3]" />

      <a
        href="https://www.linkedin.com/company/xype-io"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-md tracking-wide"
      >
        <FaLinkedin className="mr-2" size={27} />
        Follow us
      </a>
    </nav>
  );
}

export default Navbar;
