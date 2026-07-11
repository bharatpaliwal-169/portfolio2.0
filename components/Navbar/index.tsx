"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { data } from "@/constants/SiteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <header className="navbar-shell">
        <nav className="app__navbar navbar-bar" aria-hidden />
      </header>
    );
  }

  return (
    <header className="navbar-shell">
      <nav
        className={`app__navbar navbar-bar ${isScrolled ? "navbar-bar--scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <Link href="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-brand__mark">{data.shortName}</span>
          <span className="navbar-brand__full hidden sm:inline">{data.brandName}</span>
        </Link>

        <div className="navbar-desktop" role="menubar">
          {data.navLinksMap.map((item) => {
            const isActive = pathname === item._url;
            const Icon = item.icon;

            return (
              <Link
                key={item._url}
                href={item._url}
                role="menuitem"
                className={`navbar-link ${isActive ? "navbar-link--active" : ""}`}
              >
                <Icon className="navbar-link__icon" aria-hidden />
                <span className="capitalize">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="navbar-theme-btn"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            className="navbar-menu-btn md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className={`navbar-menu-btn__icon ${isOpen ? "is-open" : ""}`}>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        className={`navbar-mobile-overlay ${isOpen ? "navbar-mobile-overlay--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="navbar-mobile-backdrop"
          onClick={closeMenu}
          aria-label="Close menu"
          tabIndex={isOpen ? 0 : -1}
        />

        <div className={`navbar-mobile-panel ${isOpen ? "navbar-mobile-panel--open" : ""}`}>
          <div className="navbar-mobile-header">
            <p className="navbar-mobile-eyebrow">Navigate</p>
            <button
              type="button"
              className="navbar-mobile-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="navbar-mobile-links">
            {data.navLinksMap.map((item, index) => {
              const isActive = pathname === item._url;
              const Icon = item.icon;

              return (
                <Link
                  key={item._url}
                  href={item._url}
                  onClick={closeMenu}
                  className={`navbar-mobile-link ${isActive ? "navbar-mobile-link--active" : ""}`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="navbar-mobile-link__icon-wrap">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="navbar-mobile-link__copy">
                    <span className="navbar-mobile-link__title capitalize">{item.name}</span>
                    <span className="navbar-mobile-link__hint">
                      {isActive ? "Current page" : "Tap to explore"}
                    </span>
                  </span>
                  <ArrowRightIcon className="navbar-mobile-link__arrow h-4 w-4" aria-hidden />
                </Link>
              );
            })}
          </div>

          <div className="navbar-mobile-footer">
            <button type="button" className="navbar-mobile-theme" onClick={toggleTheme}>
              {isDark ? (
                <>
                  <SunIcon className="h-5 w-5" />
                  <span>Light mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-5 w-5" />
                  <span>Dark mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
