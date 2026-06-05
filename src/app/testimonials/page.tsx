import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what retailers, schools, and healthcare providers across Tanzania say about SangelaSystem's custom software solutions.",
};

const testimonials = [
  { quote: "SangelaSystem transformed our retail operations, making them efficient and paperless. Our Kariakoo store has never run smoother. Inventory tracking alone saved us hours every week.", name: "Ahmed Hassan", role: "Retail Store Owner, Kariakoo", sector: "Retail" },
  { quote: "Our school has greatly benefited from SangelaSystem's solutions. Administrative tasks that used to take days now take minutes. The fee management system alone has been a game changer.", name: "Grace Mwakasege", role: "School Administrator, Dar es Salaam", sector: "Education" },
  { quote: "The healthcare management system has streamlined our patient records and billing. Our staff can now focus on delivering quality patient care instead of drowning in paperwork.", name: "Dr. Joseph Kimaro", role: "Clinic Director, Dar es Salaam", sector: "Healthcare" },
  { quote: "Managing three retail branches used to be chaotic. With SangelaSystem, I can monitor stock, sales, and staff performance across all locations from a single dashboard.", name: "Fatma Juma", role: "Multi-Branch Retailer, Kariakoo", sector: "Retail" },
  { quote: "The parent portal feature has improved communication with parents tremendously. They can check grades, attendance, and fee status without calling the school office.", name: "Principal Mary Ndosi", role: "Private School Principal, Kinondoni", sector: "Education" },
  { quote: "We were skeptical at first, but SangelaSystem delivered beyond expectations. The appointment scheduling system reduced our patient wait times by over 40%.", name: "Dr. Sarah Mushi", role: "Hospital Administrator, Dar es Salaam", sector: "Healthcare" },
];

const caseStudies = [
  {
    title: "60% of Kariakoo Retailers Connected",
    desc: "Over 60% of retailers in Kariakoo now use SangelaSystem for POS, inventory, and sales tracking — making it the market-leading retail software in the area.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=350&fit=crop",
    stats: [{ value: "60%+", label: "Market share" }, { value: "3x", label: "Faster checkout" }],
  },
  {
    title: "Private School Goes Fully Digital",
    desc: "A leading private school in Dar es Salaam eliminated 90% of paper-based processes after adopting SangelaSystem's school management platform.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=350&fit=crop",
    stats: [{ value: "90%", label: "Less paperwork" }, { value: "2 weeks", label: "Implementation" }],
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>Testimonials</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "white", marginBottom: "1rem" }}>What Our Clients Say</h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto" }}>Real feedback from retailers, schools, and healthcare providers who trust SangelaSystem.</p>
        </div>
      </section>

      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card" style={{ padding: "2rem", borderRadius: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2.5rem", color: "#4CAF50", lineHeight: 1 }}>&ldquo;</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#4CAF50", background: "#f0fdf4", padding: "0.25rem 0.75rem", borderRadius: 100 }}>{t.sector}</span>
                </div>
                <p style={{ fontSize: "0.9375rem", color: "#475569", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>{t.quote}</p>
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1rem" }}>
                  <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.9375rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.8125rem", color: "#64748b" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-lg bg-gradient-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>Case Studies</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
            {caseStudies.map((cs) => (
              <div key={cs.title} className="glass-card" style={{ borderRadius: 20, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 220 }}>
                  <Image src={cs.img} alt={cs.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.75rem" }}>{cs.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.7, marginBottom: "1.25rem" }}>{cs.desc}</p>
                  <div style={{ display: "flex", gap: "2rem" }}>
                    {cs.stats.map((s) => (
                      <div key={s.label}>
                        <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#4CAF50" }}>{s.value}</div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg bg-gradient-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Become Our Next Success Story</h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 2rem" }}>Start your digital transformation with a free consultation.</p>
          <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20" }}>Get Started →</Link>
        </div>
      </section>
    </>
  );
}
