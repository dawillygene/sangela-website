import Link from "next/link";
import Image from "next/image";
import {
  StoreIcon,
  GraduationCapIcon,
  HospitalIcon,
  FileTextIcon,
  BarChartIcon,
  LinkIcon,
  ZapIcon,
  MessageCircleIcon,
  PaletteIcon,
  SettingsIcon,
  RocketIcon
} from "@/src/components/Icons";

const industries = [
  {
    title: "Retail Solutions",
    desc: "POS, inventory, sales tracking, and branch management for retailers across Kariakoo and Tanzania.",
    href: "/solutions/retail",
    icon: <StoreIcon size={24} color="#4CAF50" />,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "School Management",
    desc: "Admissions, attendance, fee tracking, report cards, and parent communication — all in one system.",
    href: "/solutions/schools",
    icon: <GraduationCapIcon size={24} color="#4CAF50" />,
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
  },
  {
    title: "Healthcare Systems",
    desc: "Patient records, billing, appointments, and staff coordination for hospitals and clinics.",
    href: "/solutions/hospitals",
    icon: <HospitalIcon size={24} color="#4CAF50" />,
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
  },
];

const benefits = [
  { icon: <FileTextIcon size={28} color="#4CAF50" />, title: "Reduce Paperwork", desc: "Eliminate manual record-keeping with fully digital workflows and automated data capture." },
  { icon: <BarChartIcon size={28} color="#4CAF50" />, title: "Improve Reporting", desc: "Get real-time dashboards and analytics to make informed business decisions faster." },
  { icon: <LinkIcon size={28} color="#4CAF50" />, title: "Centralize Operations", desc: "Manage all branches, departments, and processes from a single unified platform." },
  { icon: <ZapIcon size={28} color="#4CAF50" />, title: "Boost Productivity", desc: "Automate repetitive tasks so your staff can focus on what matters most." },
];

const stats = [
  { value: "60%+", label: "Kariakoo retailers using our systems" },
  { value: "50+", label: "Institutions served across Tanzania" },
  { value: "5+", label: "Years of delivering solutions" },
  { value: "24/7", label: "Support and system uptime" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-gradient-hero"
        style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* Background pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
          <div style={{ position: "absolute", top: "10%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: "20%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "rgba(76,175,80,0.2)", filter: "blur(40px)" }} />
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8rem 1.5rem 4rem", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.1)", borderRadius: 100, marginBottom: "1.5rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.9)", fontWeight: 700, letterSpacing: "0.05em" }}>TZ</span>
                <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>#1 Software Provider in Kariakoo</span>
              </div>

              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Custom Software for{" "}
                <span style={{ background: "linear-gradient(135deg, #86efac, #4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Retailers, Schools, and Healthcare
                </span>{" "}
                Providers in Tanzania
              </h1>

              <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 540 }}>
                Streamline your operations, go paperless, and boost productivity with tailored software solutions trusted by 60%+ of Kariakoo retailers and leading institutions.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20", fontWeight: 700 }}>
                  Book a Demo →
                </Link>
                <a href="https://wa.me/255694053227" className="btn-secondary" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <MessageCircleIcon size={18} /> Talk on WhatsApp
                </a>
              </div>
            </div>

            <div className="animate-fade-in-up delay-300 hidden lg:block">
              <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop"
                  alt="Business software dashboard showing analytics and reporting"
                  width={700}
                  height={500}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(76,175,80,0.2), transparent)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#4CAF50", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "0.875rem", color: "#64748b", marginTop: "0.5rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-lg bg-gradient-section">
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4CAF50", marginBottom: "0.75rem", display: "block" }}>Industry Solutions</span>
          <h2 className="section-title" style={{ margin: "0 auto 0.75rem" }}>Built for Your Industry</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 3rem" }}>Specialized software tailored to the unique needs of retail, education, and healthcare in Tanzania.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {industries.map((ind) => (
              <Link key={ind.title} href={ind.href} style={{ textDecoration: "none" }}>
                <div className="glass-card" style={{ borderRadius: 20, overflow: "hidden", textAlign: "left" }}>
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <Image src={ind.img} alt={ind.title} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} sizes="(max-width: 768px) 100vw, 33vw" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5))" }} />
                    <span style={{ position: "absolute", top: 16, left: 16, background: "rgba(255,255,255,0.9)", borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>{ind.icon}</span>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>{ind.title}</h3>
                    <p style={{ fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.6, marginBottom: "1rem" }}>{ind.desc}</p>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4CAF50", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4CAF50", marginBottom: "0.75rem", display: "block" }}>Why SangelaSystem</span>
              <h2 className="section-title">Empower Your Organization to Thrive</h2>
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>Our software solutions are built to solve real operational challenges faced by Tanzanian businesses every day.</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="sm:grid-cols-2">
                {benefits.map((b) => (
                  <div key={b.title} className="glass-card" style={{ padding: "1.25rem", borderRadius: 16 }}>
                    <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>{b.icon}</span>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.375rem" }}>{b.title}</h3>
                    <p style={{ fontSize: "0.8125rem", color: "#64748b", lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden" }} className="hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop"
                alt="Team collaborating on software development project"
                width={600}
                height={700}
                style={{ width: "100%", height: "auto", borderRadius: 20 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-lg bg-gradient-section">
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4CAF50", marginBottom: "0.75rem", display: "block" }}>How It Works</span>
          <h2 className="section-title" style={{ margin: "0 auto 0.75rem" }}>Get Started in 4 Simple Steps</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 3rem" }}>From consultation to deployment, we make the process smooth and efficient.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              { step: "01", title: "Consultation", desc: "We learn about your operations, challenges, and goals in a free consultation.", icon: <MessageCircleIcon size={36} color="#4CAF50" style={{ margin: "0 auto" }} /> },
              { step: "02", title: "Custom Design", desc: "Our team designs a tailored solution specific to your industry and workflows.", icon: <PaletteIcon size={36} color="#4CAF50" style={{ margin: "0 auto" }} /> },
              { step: "03", title: "Development", desc: "We build, test, and iterate on your software with regular progress updates.", icon: <SettingsIcon size={36} color="#4CAF50" style={{ margin: "0 auto" }} /> },
              { step: "04", title: "Deployment & Support", desc: "We deploy your system, train your team, and provide ongoing support.", icon: <RocketIcon size={36} color="#4CAF50" style={{ margin: "0 auto" }} /> },
            ].map((s) => (
              <div key={s.step} className="glass-card" style={{ padding: "2rem 1.5rem", borderRadius: 20, textAlign: "center" }}>
                <span style={{ display: "block", marginBottom: "1rem" }}>{s.icon}</span>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#4CAF50", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>STEP {s.step}</div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-lg" style={{ background: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4CAF50", marginBottom: "0.75rem", display: "block" }}>Testimonials</span>
          <h2 className="section-title" style={{ margin: "0 auto 0.75rem" }}>What Our Clients Say</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 3rem" }}>Trusted by retailers, schools, and healthcare providers across Tanzania.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { quote: "SangelaSystem transformed our retail operations, making them efficient and paperless. Our Kariakoo store has never run smoother.", name: "Ahmed Hassan", role: "Retail Store Owner, Kariakoo" },
              { quote: "Our school has greatly benefited from SangelaSystem's solutions. Admin tasks that took days now take minutes. Truly the best in ICT!", name: "Grace Mwakasege", role: "School Administrator, Dar es Salaam" },
              { quote: "The healthcare management system has streamlined our patient records and billing. Our staff can now focus on patient care instead of paperwork.", name: "Dr. Joseph Kimaro", role: "Clinic Director, Dar es Salaam" },
            ].map((t) => (
              <div key={t.name} className="glass-card" style={{ padding: "2rem", borderRadius: 20, textAlign: "left" }}>
                <div style={{ fontSize: "2.5rem", color: "#4CAF50", marginBottom: "0.5rem", lineHeight: 1 }}>&ldquo;</div>
                <p style={{ fontSize: "0.9375rem", color: "#475569", lineHeight: 1.7, marginBottom: "1.5rem", fontStyle: "italic" }}>{t.quote}</p>
                <div>
                  <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.9375rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.8125rem", color: "#64748b" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/testimonials" className="btn-outline-green" style={{ marginTop: "2rem", display: "inline-flex" }}>View All Testimonials →</Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-lg bg-gradient-section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4CAF50", marginBottom: "0.75rem", display: "block" }}>FAQ</span>
            <h2 className="section-title" style={{ margin: "0 auto 3rem" }}>Frequently Asked Questions</h2>
          </div>
          {[
            { q: "What industries does SangelaSystem serve?", a: "We specialize in software solutions for retail businesses, schools, hospitals, and clinics across Tanzania." },
            { q: "How long does implementation take?", a: "Typical implementations range from 2-8 weeks depending on the scope and complexity of your requirements." },
            { q: "Do you offer training and support?", a: "Yes! Every deployment includes comprehensive training for your team and ongoing 24/7 technical support." },
          ].map((faq) => (
            <details key={faq.q} className="glass-card" style={{ padding: "1.25rem 1.5rem", borderRadius: 16, marginBottom: "1rem", cursor: "pointer" }}>
              <summary style={{ fontWeight: 700, color: "#1e293b", fontSize: "1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {faq.q}
                <span style={{ color: "#4CAF50", fontSize: "1.25rem", fontWeight: 400 }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.7 }}>{faq.a}</p>
            </details>
          ))}
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/faq" className="btn-outline-green">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-lg bg-gradient-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Ready to Go Paperless?</h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 auto 2rem" }}>
            Join the growing list of Tanzanian organizations transforming their operations with SangelaSystem.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#1b5e20", fontWeight: 700 }}>
              Request a Free Consultation →
            </Link>
            <a href="https://wa.me/255694053227" className="btn-secondary" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <MessageCircleIcon size={18} /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
