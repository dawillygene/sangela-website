"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageCircleIcon } from "@/src/components/Icons";

const faqs = [
  { q: "What industries does SangelaSystem serve?", a: "We specialize in three core industries: retail (POS, inventory, sales tracking), education (school management, admissions, fee tracking), and healthcare (patient records, billing, appointments). We also serve other organizations looking to go paperless." },
  { q: "How long does a typical implementation take?", a: "Implementation timelines vary based on project scope. A standard retail POS system can be deployed in 2-3 weeks, while a comprehensive school or hospital management system typically takes 4-8 weeks. We provide a detailed timeline during the consultation phase." },
  { q: "Do you provide training for our staff?", a: "Absolutely! Every deployment includes comprehensive training for your team — both administrators and end users. We offer on-site training, video tutorials, user manuals, and admin certification. Additional training sessions can be arranged as needed." },
  { q: "What kind of support do you offer after deployment?", a: "We provide 24/7 technical support via phone, email, and WhatsApp. Our support includes bug fixes, system updates, performance monitoring, and feature enhancements. We typically respond to critical issues within 1 hour." },
  { q: "Can the software work offline?", a: "Yes! Many of our solutions are designed to work offline, especially important for areas with intermittent internet connectivity. Data syncs automatically when connectivity is restored, ensuring no data loss." },
  { q: "How is our data secured?", a: "Data security is our top priority. We use encrypted data storage, role-based access controls, regular backups, and audit trails. For healthcare clients, we ensure compliance with relevant data privacy standards." },
  { q: "Can you integrate with existing systems we already use?", a: "Yes, we specialize in system integration. We can connect our solutions with existing tools like payment gateways, SMS services, accounting software, and other third-party systems through API integrations." },
  { q: "How much does it cost?", a: "Pricing depends on the scope and complexity of your project. We offer flexible pricing models including one-time licenses and subscription plans. Contact us for a free consultation and customized quote — there is no obligation." },
  { q: "Do you offer a demo or trial period?", a: "Yes! We offer free demos where we walk you through our solutions and show you how they can address your specific needs. Contact us to schedule a demo at a time that works for you." },
  { q: "Can you customize the software for our specific needs?", a: "Customization is at the heart of what we do. Every system we build is tailored to your specific workflows, processes, and requirements. We work closely with you during the design phase to ensure a perfect fit." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>FAQ</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto" }}>Everything you need to know about SangelaSystem and our services.</p>
        </div>
      </section>

      <section className="section-lg" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {faqs.map((faq, i) => (
            <div key={faq.q} className="glass-card" style={{ borderRadius: 16, marginBottom: "1rem", overflow: "hidden" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "1.25rem 1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
              >
                <span style={{ fontWeight: 700, color: "#1e293b", fontSize: "1rem", paddingRight: "1rem" }}>{faq.q}</span>
                <span style={{
                  color: "#4CAF50",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  flexShrink: 0,
                }}>+</span>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 1.5rem 1.25rem", animation: "fadeInUp 0.3s ease-out both" }}>
                  <p style={{ fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-lg bg-gradient-section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="section-title" style={{ margin: "0 auto 1rem" }}>Still Have Questions?</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>Our team is ready to answer any questions you have about our solutions.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact" className="btn-primary">Contact Us →</Link>
            <a href="https://wa.me/255694053227" className="btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <MessageCircleIcon size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
