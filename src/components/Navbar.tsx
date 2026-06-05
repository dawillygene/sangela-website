"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    href: "#",
    label: "Solutions",
    children: [
      { href: "/solutions/retail", label: "Retail Solutions" },
      { href: "/solutions/schools", label: "School Management" },
      { href: "/solutions/hospitals", label: "Healthcare Systems" },
    ],
  },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(76,175,80,0.1)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.5rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="SangelaSystem Logo"
            width={40}
            height={40}
            priority
            style={{ borderRadius: 8, width: 40, height: 40 }}
          />
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: scrolled ? "#1e293b" : "#ffffff",
              transition: "color 0.3s ease",
            }}
          >
            Sangela
            <span style={{ color: "#4CAF50" }}>System</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="hidden lg:flex"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: scrolled ? "#475569" : "rgba(255,255,255,0.9)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 8,
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    fontFamily: "inherit",
                  }}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "white",
                      borderRadius: 12,
                      boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                      border: "1px solid rgba(76,175,80,0.1)",
                      padding: "0.5rem",
                      minWidth: 220,
                      animation: "fadeInUp 0.2s ease-out both",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "0.75rem 1rem",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#334155",
                          textDecoration: "none",
                          borderRadius: 8,
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#f0fdf4";
                          e.currentTarget.style.color = "#2e7d32";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#334155";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: scrolled ? "#475569" : "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#4CAF50";
                  e.currentTarget.style.background = scrolled
                    ? "#f0fdf4"
                    : "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled
                    ? "#475569"
                    : "rgba(255,255,255,0.9)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              padding: "0.625rem 1.5rem",
              fontSize: "0.8125rem",
              marginLeft: "0.5rem",
            }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: scrolled ? "#1e293b" : "#ffffff",
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #e2e8f0",
            padding: "1rem",
            animation: "fadeInUp 0.3s ease-out both",
          }}
          className="lg:hidden"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#64748b",
                  }}
                >
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "0.625rem 1rem 0.625rem 2rem",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "#475569",
                      textDecoration: "none",
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "#334155",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{
              width: "100%",
              marginTop: "0.75rem",
            }}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
