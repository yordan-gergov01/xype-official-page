function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center gap-5 px-8 py-7 border-t border-[#141414]">
      <span className="text-[#8A8A8A] text-[13px]">© {currentYear} XYPE</span>
      <span className="text-[#8A8A8A] text-[13px]">
        Custom intelligence for Bulgarian business. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
