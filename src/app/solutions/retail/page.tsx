import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircleIcon,
  TagIcon,
  BoxIcon,
  TrendingUpIcon,
  BuildingIcon,
  UsersIcon,
  DollarSignIcon
} from "@/src/components/Icons";

export const metadata: Metadata = {
  title: "Retail Software Solutions",
  description: "POS systems, inventory management, sales tracking, and branch management software for retailers in Kariakoo, Dar es Salaam, and across Tanzania.",
};

export default function RetailPage() {
  return (
    <>
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>Retail Solutions</span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Powerful Software for Modern Retailers
              </h1>
              <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Optimize inventory, track sales in real-time, manage multiple branches, and engage customers — all from one platform trusted by 60%+ of Kariakoo retailers.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Book a Demo →</Link>
                <a href="https://wa.me/255694053227" className="btn-secondary" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <MessageCircleIcon size={18} /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop" alt="Retail store operations" width={600} height={450} style={{ borderRadius: 20, width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>Features Built for Retail</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: <TagIcon size={32} color="#4CAF50" />, title: "POS System", desc: "Fast, reliable point-of-sale processing with receipt printing, barcode scanning, and payment tracking." },
              { icon: <BoxIcon size={32} color="#4CAF50" />, title: "Inventory Management", desc: "Real-time stock levels, automated reorder alerts, and batch tracking across all locations." },
              { icon: <TrendingUpIcon size={32} color="#4CAF50" />, title: "Sales Analytics", desc: "Comprehensive sales reports, trend analysis, and performance dashboards for informed decisions." },
              { icon: <BuildingIcon size={32} color="#4CAF50" />, title: "Branch Management", desc: "Centralized control of multiple store locations with unified reporting and stock transfers." },
              { icon: <UsersIcon size={32} color="#4CAF50" />, title: "Customer Records", desc: "Track customer purchases, preferences, and loyalty to drive repeat business." },
              { icon: <DollarSignIcon size={32} color="#4CAF50" />, title: "Financial Reporting", desc: "Automated profit/loss statements, expense tracking, and tax-ready financial reports." },
            ].map((f) => (
              <div key={f.title} className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                <span style={{ display: "block", marginBottom: "1rem" }}>{f.icon}</span>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg bg-gradient-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Join Kariakoo&apos;s Top Retailers</h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 2rem" }}>Over 60% of retailers in Kariakoo already trust SangelaSystem. See why they chose us.</p>
          <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Get Started Today →</Link>
        </div>
      </section>
    </>
  );
}
