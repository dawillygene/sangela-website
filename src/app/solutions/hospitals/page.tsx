import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Healthcare & Hospital Software",
  description: "Hospital and clinic management software for patient records, billing, appointments, and staff coordination in Tanzania.",
};

export default function HospitalsPage() {
  return (
    <>
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>Healthcare Solutions</span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Smart Software for Hospitals &amp; Clinics
              </h1>
              <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Manage patient records, streamline billing, schedule appointments, and coordinate staff — so you can focus on delivering quality care.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Book a Demo →</Link>
                <a href="https://wa.me/255694053227" className="btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop" alt="Modern hospital facility" width={600} height={450} style={{ borderRadius: 20, width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>Features Built for Healthcare</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🏥", title: "Patient Records (EMR)", desc: "Secure, digital patient records with medical history, prescriptions, lab results, and visit notes." },
              { icon: "💰", title: "Billing & Invoicing", desc: "Automated billing, insurance claim management, payment tracking, and detailed financial reports." },
              { icon: "📅", title: "Appointment Scheduling", desc: "Online booking, automated reminders, queue management, and doctor availability tracking." },
              { icon: "👩‍⚕️", title: "Staff Coordination", desc: "Shift scheduling, role-based access, task management, and inter-department communication." },
              { icon: "🔒", title: "Data Privacy & Security", desc: "Encrypted data storage, role-based permissions, audit trails, and compliance-ready systems." },
              { icon: "📊", title: "Analytics & Reporting", desc: "Patient volume trends, revenue dashboards, treatment outcomes, and operational KPIs." },
            ].map((f) => (
              <div key={f.title} className="glass-card" style={{ padding: "1.5rem", borderRadius: 16 }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>{f.icon}</span>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg bg-gradient-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Transform Patient Care Today</h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 2rem" }}>Join polyclinics and hospitals across Tanzania delivering better care with SangelaSystem.</p>
          <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Schedule a Demo →</Link>
        </div>
      </section>
    </>
  );
}
