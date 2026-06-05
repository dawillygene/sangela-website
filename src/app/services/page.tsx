import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description: "SangelaSystem offers custom software development, system integration, training, and ongoing support for retail, schools, and healthcare in Tanzania.",
};

const services = [
  {
    title: "Custom Software Development",
    desc: "We design and build bespoke software systems tailored to your specific business workflows, ensuring seamless integration with your existing processes.",
    icon: "💻",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    features: ["Requirements analysis", "UI/UX design", "Agile development", "Quality assurance testing"],
  },
  {
    title: "System Integration",
    desc: "Connect your existing tools and processes into a unified platform. We integrate payment systems, messaging, and third-party APIs.",
    icon: "🔗",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    features: ["API integration", "Data migration", "Third-party connectors", "Real-time sync"],
  },
  {
    title: "Mobile App Development",
    desc: "Extend your operations to mobile with custom Android and iOS applications that keep your team connected on the go.",
    icon: "📱",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    features: ["Cross-platform apps", "Offline functionality", "Push notifications", "Mobile dashboards"],
  },
  {
    title: "Training & Onboarding",
    desc: "Comprehensive training programs to ensure your team can use the new system confidently from day one.",
    icon: "🎓",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    features: ["On-site training", "Video tutorials", "User manuals", "Admin certification"],
  },
  {
    title: "IT Consulting",
    desc: "Strategic technology advice to help your organization make the right software and infrastructure decisions.",
    icon: "🧭",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    features: ["Technology audits", "Digital roadmaps", "Cost optimization", "Vendor selection"],
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable ongoing support to keep your systems running smoothly. We offer 24/7 monitoring and rapid response.",
    icon: "🛠️",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    features: ["24/7 monitoring", "Bug fixes", "Performance tuning", "Feature updates"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>Our Services</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "white", marginBottom: "1rem" }}>End-to-End Software Solutions</h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto" }}>From initial consulting to deployment and ongoing support, we handle every step of your digital transformation journey.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {services.map((s) => (
              <div key={s.title} className="glass-card" style={{ borderRadius: 20, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 200 }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5))" }} />
                  <span style={{ position: "absolute", top: 16, left: 16, fontSize: "2rem", background: "rgba(255,255,255,0.9)", borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.7, marginBottom: "1rem" }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ fontSize: "0.8125rem", color: "#475569", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                        <span style={{ color: "#4CAF50" }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg bg-gradient-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Need a Custom Solution?</h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 2rem" }}>Tell us about your business challenges and we will design the perfect software solution for you.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Get a Free Consultation →</Link>
            <a href="https://wa.me/255694053227" className="btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
