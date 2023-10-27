import { useState, useEffect } from "react";
import s from "../styles/Header.module.scss";
import HeaderTop from "./HeaderTop";
import HeaderNavbar from "./HeaderNavbar";
import HeaderContent from "./HeaderContent";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
  const [path, setPath] = useState(true);
  useEffect(() => {
    setPath(router.pathname === "/");
  }, [router.pathname]);
  
  return (
    <header className={`header ${path ? `${s.layout}` : ""}`}>
      <HeaderTop />
      <HeaderNavbar />
      {path && <HeaderContent />}
    </header>
  );
};

export default Header;
