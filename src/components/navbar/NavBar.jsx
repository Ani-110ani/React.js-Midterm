"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, ShoppingCart, User } from "lucide-react";
import styles from "./NavBar.module.css";

function NavigationLinks() {
  const pathname = usePathname();
  const homeIsActive =
    pathname === "/" || pathname.startsWith("/products/");

  return (
    <div className={styles.links}>
      <Link
        href="/"
        className={`${styles.link} ${homeIsActive ? styles.linkActive : ""}`}
        aria-label="Home"
        aria-current={homeIsActive ? "page" : undefined}
      >
        <Home className={styles.icon} />
        <span className={styles.linkLabel}>Home</span>
      </Link>
      <Link
        href="/cart"
        className={`${styles.link} ${pathname.startsWith("/cart") ? styles.linkActive : ""}`}
        aria-label="Cart"
        aria-current={pathname.startsWith("/cart") ? "page" : undefined}
      >
        <ShoppingCart className={styles.icon} />
        <span className={styles.linkLabel}>Cart</span>
      </Link>
      <Link
        href="/profile"
        className={`${styles.link} ${pathname.startsWith("/profile") ? styles.linkActive : ""}`}
        aria-label="Account"
        aria-current={pathname.startsWith("/profile") ? "page" : undefined}
      >
        <User className={styles.icon} />
        <span className={styles.linkLabel}>Account</span>
      </Link>
      <span className={`${styles.link} ${styles.settings}`} aria-label="Settings">
        <Settings className={styles.icon} />
        <span className={styles.linkLabel}>Settings</span>
      </span>
    </div>
  );
}

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.inner} aria-label="Main navigation">
        <Link href="/" className={styles.brand} aria-label="Morrow Market home">
          <span className={styles.brandMark}>M</span>
          <span className={styles.brandName}>My Market</span>
        </Link>
        <Suspense fallback={<div className={styles.links} aria-hidden="true" />}>
          <NavigationLinks />
        </Suspense>
      </nav>
    </header>
  );
}
