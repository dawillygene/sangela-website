import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SangelaSystem — Tanzania's leading software company serving retailers, schools, hospitals, and clinics with custom digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>About Us</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Building Tanzania&apos;s Digital Future</h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto" }}>We are a Dar es Salaam-based software company on a mission to digitize and empower businesses across Tanzania.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
                SangelaSystem was founded in Dar es Salaam with a clear mission: to help Tanzanian businesses transition from paper-based operations to efficient, digital workflows.
              </p>
              <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
                Starting with retail software for merchants in Kariakoo, we quickly expanded to serve schools, hospitals, and clinics across the country. Today, over 60% of retailers in Kariakoo rely on our systems for their daily operations.
              </p>
              <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.8 }}>
                We believe that every Tanzanian organization — no matter the size — deserves access to world-class software that makes their work easier, faster, and more productive.
              </p>
            </div>
            <div>
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop" alt="SangelaSystem team collaborating" width={600} height={450} style={{ borderRadius: 20, width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-lg bg-gradient-section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title" style={{ margin: "0 auto 3rem" }}>Our Values</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              { icon: "🎯", title: "Client-First", desc: "Every decision we make starts with understanding our clients' real needs and challenges." },
              { icon: "💡", title: "Innovation", desc: "We constantly explore new technologies and approaches to deliver better solutions." },
              { icon: "🤝", title: "Reliability", desc: "When we commit to a project, we deliver on time and stand behind our work with ongoing support." },
              { icon: "🌍", title: "Local Impact", desc: "We are proud to serve Tanzanian businesses and contribute to the nation's digital transformation." },
            ].map((v) => (
              <div key={v.title} className="glass-card" style={{ padding: "2rem", borderRadius: 20, textAlign: "center" }}>
                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>{v.icon}</span>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" alt="Professional team meeting" width={600} height={400} style={{ borderRadius: 20, width: "100%", height: "auto" }} />
            <div>
              <h2 className="section-title">Why Choose SangelaSystem?</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Deep understanding of Tanzanian business operations",
                  "Proven track record with 60%+ market share in Kariakoo retail",
                  "End-to-end service from consulting to deployment and support",
                  "Affordable pricing designed for local businesses",
                  "24/7 technical support and rapid response times",
                  "Comprehensive training and onboarding included",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "1rem", color: "#475569", padding: "0.625rem 0", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ color: "#4CAF50", fontWeight: 700, fontSize: "1.25rem", lineHeight: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg bg-gradient-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Let&apos;s Build Something Great Together</h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 2rem" }}>Whether you run a retail shop, school, or clinic — we have the right solution for you.</p>
          <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Get In Touch →</Link>
        </div>
      </section>
    </>
  );
}
