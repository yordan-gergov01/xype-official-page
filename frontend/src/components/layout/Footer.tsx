function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="flex justify-center items-center gap-5 px-8 py-7"
      style={{ borderTop: '1px solid #141414' }}
    >
      <span style={{ color: '#2A2A2A', fontSize: 13 }}>© {currentYear} XYPE</span>
      <span style={{ color: '#2A2A2A', fontSize: 13 }}>
        Custom intelligence for Bulgarian business. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
