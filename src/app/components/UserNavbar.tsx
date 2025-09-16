// src/app/components/UserNavbar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 
import Link from "next/link";
import {
  FaChartPie,
  FaBox,
  FaUser,
  FaCog,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./userNavbar.module.css";

export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // o hook

  const handleLogout = () => {
    // no futuro podemos limpar sessão/token
    console.log("Usuário deslogado!");
    router.push("/"); // redireciona para a Home
  };

  return (
    <>
      {/* Botão hambúrguer (aparece apenas no mobile) */}
      <button
        className={styles.menuBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar / Navbar do usuário */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.topSection}>
          <h2 className={styles.logo}>ReUse!</h2>

          <nav className={styles.nav}>
            <Link href="/dashboard" className={styles.navLink}>
              <FaChartPie size={18} /> Visão Geral
            </Link>
            <Link href="/items/my" className={styles.navLink}>
              <FaBox size={18} /> Meus Itens
            </Link>
            <Link href="/busca" className={styles.navLink}>
              <FaSearch size={18} /> Buscar Itens
            </Link>
            <Link href="/alerts" className={styles.navLink}>
              <FaBell size={18} /> Alertas
            </Link>
            <Link href="/messages" className={styles.navLink}>
              <FaEnvelope size={18} /> Mensagens
            </Link>
            <Link href="/profile" className={styles.navLink}>
              <FaUser size={18} /> Perfil
            </Link>
            <Link href="/settings" className={styles.navLink}>
              <FaCog size={18} /> Configurações
            </Link>
          </nav>
        </div>

        {/* Botão de sair fixado na parte inferior */}
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <FaSignOutAlt size={16} /> Sair
        </button>
      </aside>
    </>
  );
}

