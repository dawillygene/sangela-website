import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #0f172a 0%, #071a09 100%)", color: "white", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* CTA Banner */}
        <div style={{ background: "linear-gradient(135deg, #4CAF50 0%, #2e7d32 100%)", borderRadius: 20, padding: "3rem 2rem", textAlign: "center", marginBottom: "3rem", position: "relative", overflow: "hidden" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem" }}>Ready to Transform Your Operations?</h2>
          <p style={{ fontSize: "1.0625rem", opacity: 0.9, marginBottom: "1.5rem", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>Join 60%+ of Kariakoo retailers and leading institutions who trust SangelaSystem.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-secondary">Book a Demo</Link>
            <a href="https://wa.me/255694053227" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          </div>
        </div>

        {/* Footer Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Image src="/logo.png" alt="SangelaSystem" width={36} height={36} style={{ borderRadius: 8, width: 36, height: 36 }} />
              <span style={{ fontSize: "1.125rem", fontWeight: 800 }}>Sangela<span style={{ color: "#4CAF50" }}>System</span></span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>Custom software solutions for retailers, schools, hospitals, and clinics in Tanzania.</p>
          </div>

          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }}>Solutions</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[{ href: "/solutions/retail", label: "Retail Software" }, { href: "/solutions/schools", label: "School Management" }, { href: "/solutions/hospitals", label: "Healthcare Systems" }].map(l => (
                <li key={l.href} style={{ marginBottom: "0.75rem" }}><Link href={l.href} style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }}>Company</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[{ href: "/about", label: "About Us" }, { href: "/services", label: "Services" }, { href: "/testimonials", label: "Testimonials" }, { href: "/faq", label: "FAQ" }].map(l => (
                <li key={l.href} style={{ marginBottom: "0.75rem" }}><Link href={l.href} style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }}>Contact</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)" }}>📍 Dar es Salaam, Tanzania</span>
              <a href="mailto:helpdesk@sangelasystem.com" style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>📧 helpdesk@sangelasystem.com</a>
              <a href="tel:+255694053227" style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>📞 +255 694 053 227</a>
              <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)" }}>🕘 Mon – Sat, 9am – 6pm</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>© {new Date().getFullYear()} SangelaSystem. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
