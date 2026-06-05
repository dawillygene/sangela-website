"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", industry: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry from SangelaSystem Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Industry:* ${formData.industry}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/255694053227?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-hero" style={{ padding: "10rem 1.5rem 5rem", textAlign: "center" }}>
        <div className="container">
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#86efac", marginBottom: "0.75rem", display: "block" }}>Contact Us</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "white", marginBottom: "1rem" }}>Let&apos;s Talk About Your Project</h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto" }}>Book a free consultation or reach out on WhatsApp. We typically respond within 1 hour during business hours.</p>
        </div>
      </section>

      <section className="section-lg" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} className="lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", marginBottom: "0.5rem" }}>Request a Consultation</h2>
              <p style={{ fontSize: "0.9375rem", color: "#64748b", marginBottom: "2rem" }}>Fill in your details and we will get back to you within 24 hours.</p>

              {submitted ? (
                <div style={{ padding: "3rem 2rem", textAlign: "center", background: "#f0fdf4", borderRadius: 20, border: "1px solid #bbf7d0" }}>
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>✅</span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1b5e20", marginBottom: "0.5rem" }}>Message Sent!</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#475569" }}>Thank you for reaching out. We will get back to you shortly.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", industry: "", message: "" }); }} className="btn-outline-green" style={{ marginTop: "1rem" }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input id="name" type="text" required className="form-input" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input id="email" type="email" required className="form-input" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input id="phone" type="tel" className="form-input" placeholder="+255..." value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="industry" className="form-label">Industry</label>
                    <select id="industry" className="form-input" value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})}>
                      <option value="">Select your industry</option>
                      <option value="Retail">Retail</option>
                      <option value="Education">Education / Schools</option>
                      <option value="Healthcare">Healthcare / Clinics</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea id="message" required className="form-input" rows={5} placeholder="Tell us about your project or challenges..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ resize: "vertical" }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%" }}>Send Message →</button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop" alt="SangelaSystem office" width={600} height={300} style={{ borderRadius: 20, width: "100%", height: "auto", marginBottom: "2rem" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { icon: "📍", title: "Our Location", value: "Dar es Salaam, Tanzania" },
                  { icon: "📧", title: "Email", value: "helpdesk@sangelasystem.com", href: "mailto:helpdesk@sangelasystem.com" },
                  { icon: "📞", title: "Phone", value: "+255 694 053 227", href: "tel:+255694053227" },
                  { icon: "🕘", title: "Business Hours", value: "Monday – Saturday, 9:00 AM – 6:00 PM" },
                ].map((item) => (
                  <div key={item.title} className="glass-card" style={{ padding: "1.25rem", borderRadius: 16, display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span style={{ fontSize: "1.75rem" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.title}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: "1rem", fontWeight: 600, color: "#1e293b", textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <div style={{ fontSize: "1rem", fontWeight: 600, color: "#1e293b" }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}

                <a href="https://wa.me/255694053227" className="btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ width: "100%", padding: "1rem" }}>
                  💬 Chat with Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
