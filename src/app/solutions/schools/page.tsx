import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "School Management Software",
  description: "Comprehensive school management system for admissions, attendance, fees, report cards, and parent communication in Tanzania.",
};

export default function SchoolsPage() {
  return (
    <>
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>School Solutions</span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Complete School Management System
              </h1>
              <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Streamline admissions, track attendance, manage fees, generate report cards, and communicate with parents — all from one platform.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Book a Demo →</Link>
                <a href="https://wa.me/255694053227" className="btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=450&fit=crop" alt="Modern classroom environment" width={600} height={450} style={{ borderRadius: 20, width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>Features Built for Education</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "📝", title: "Admissions", desc: "Digitized enrollment with online forms, document management, and automated student ID generation." },
              { icon: "📋", title: "Attendance Tracking", desc: "Daily attendance with mobile check-in, absence alerts to parents, and monthly reports." },
              { icon: "💳", title: "Fee Management", desc: "Automated fee billing, payment tracking, receipt generation, and overdue balance reminders." },
              { icon: "📊", title: "Report Cards", desc: "Automated grade computation, customizable report card templates, and academic performance analytics." },
              { icon: "👨‍👩‍👧‍👦", title: "Parent Portal", desc: "Secure parent access to grades, attendance, fee status, and direct messaging with teachers." },
              { icon: "📅", title: "Timetable & Calendar", desc: "Automated timetable scheduling, exam calendars, and event management for the school year." },
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
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Modernize Your School Today</h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 2rem" }}>Join leading private schools and institutions in Tanzania using SangelaSystem.</p>
          <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Schedule a Demo →</Link>
        </div>
      </section>
    </>
  );
}
