// =============================
// CA Firm Website (React + CSS)
// Domain: cainindore.com (Indore, India)
// Single-file React component + separate CSS (scroll down for styles)
// Requirements covered: modern UI, lead-gen CTAs, services, pricing, blog/resources,
// testimonials, SEO (Helmet + JSON-LD), local business schema, contact form,
// WhatsApp floating button, speed-minded (no heavy libs), responsive, map embed,
// basic appointment booking embed placeholder (Calendly/Google Appointments).
// =============================

import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function App() {
  // --------- Basic site constants (edit without touching JSX) ---------
  const SITE = {
    brand: "CAIN Indore",
    domain: "https://cainindore.com",
    phone: "+91 98765 43210",
    email: "hello@cainindore.com",
    address: "201, Business Park, Vijay Nagar, Indore, MP 452010",
    city: "Indore",
    state: "Madhya Pradesh",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14661.090!2d75.89!3d22.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd!2sIndore!5e0!3m2!1sen!2sin!4v1680000000000",
    whatsapp: "919876543210", // no + sign for wa.me
    calendly: "https://calendly.com/your-calendly/15min", // replace or use Google appointment link
  };

  // --------- Data ---------
  const services = useMemo(
    () => [
      {
        key: "itr",
        title: "ITR Filing",
        desc:
          "Individual, Proprietor, Partnership & Company ITR filing with compliance review and planning.",
        points: ["Document checklist", "Tax planning tips", "E-verify support"],
      },
      {
        key: "gst",
        title: "GST Services",
        desc:
          "GST registration, monthly/quarterly returns, reconciliations, audits, notices & advisory.",
        points: ["Registrations", "GSTR-1/3B/9", "E-invoicing setup"],
      },
      {
        key: "acct",
        title: "Accounting & Bookkeeping",
        desc:
          "End-to-end bookkeeping on Tally/Zoho/QuickBooks with MIS, payroll & vendor management.",
        points: ["Monthly P&L/BS", "TDS/EPF/ESI", "Bank Reco"],
      },
      {
        key: "comp",
        title: "ROC & Compliance",
        desc:
          "Company/LLP incorporation, ROC filings, annual returns, secretarial & statutory compliance.",
        points: ["MCA filings", "Annual returns", "Change in directors"],
      },
      {
        key: "advisory",
        title: "Tax & Business Advisory",
        desc:
          "Capital gains, startup structuring, valuations, due diligence, assessments & appeals.",
        points: ["Capital gains", "Startup setup", "Representation"],
      },
      {
        key: "audit",
        title: "Audit & Assurance",
        desc:
          "Tax audit, GST audit, internal audit, special purpose audits for banks and investors.",
        points: ["Tax audit", "Internal audit", "Process review"],
      },
    ],
    []
  );

  const plans = [
    {
      name: "Starter",
      price: "₹1,499",
      suited: "Individuals & freelancers",
      features: ["ITR filing (basic)", "Document checklist", "Email support"],
      cta: "Request Quote",
    },
    {
      name: "Business",
      price: "₹4,999",
      suited: "Small businesses (GST)",
      features: ["Monthly GST returns", "Accounting review", "Phone support"],
      cta: "Book Consultation",
      highlight: true,
    },
    {
      name: "Premium",
      price: "Custom",
      suited: "Growing SMEs & Startups",
      features: ["End-to-end compliance", "Quarterly MIS", "Dedicated CA"],
      cta: "Talk to an Expert",
    },
  ];

  const posts = [
    {
      title: "ITR AY 2025–26: What’s New?",
      excerpt: "Key changes, forms, and due dates you should know for AY 2025–26.",
      url: "#",
      date: "Aug 10, 2025",
    },
    {
      title: "GST Reconciliation: A 10‑minute Guide",
      excerpt: "Avoid notices with simple monthly checks between books and GST portal.",
      url: "#",
      date: "Jul 28, 2025",
    },
    {
      title: "Capital Gains on Property: Save Tax Legally",
      excerpt: "Sections, timelines, and smart planning for property sale gains.",
      url: "#",
      date: "Jul 05, 2025",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Jain",
      role: "Founder, Indore Foods",
      quote:
        "Very professional GST and accounting support. Filing is on time and advice is practical.",
    },
    {
      name: "Ankita Verma",
      role: "Freelance Designer",
      quote:
        "They made ITR filing effortless. Clear checklist and great tax‑saving tips!",
    },
    {
      name: "K. Sharma",
      role: "Director, TechStart LLP",
      quote:
        "Handled incorporation, ROC and ongoing compliance smoothly. Highly recommend.",
    },
  ];

  // ---------- Contact form (static demo) ----------
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "ITR Filing", message: "" });
  const [status, setStatus] = useState({ sent: false, error: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // OPTION A (production): connect to your backend / Formspree / Netlify Forms / EmailJS
      // Example (Formspree): POST to https://formspree.io/f/your-id with JSON body
      // await fetch("https://formspree.io/f/xxxxxx", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(form) });

      // Demo fallback: open mailto with prefilled subject/body
      const subject = encodeURIComponent(`Lead from ${SITE.brand}: ${form.service}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`);
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus({ sent: true, error: "" });
    } catch (err) {
      setStatus({ sent: false, error: "Something went wrong. Please WhatsApp or call us." });
    }
  };

  // ---------- JSON-LD LocalBusiness Schema ----------
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: SITE.brand,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: "IN",
      postalCode: "452010",
    },
    areaServed: ["Indore", "Madhya Pradesh", "India"],
    sameAs: [
      "https://www.linkedin.com/company/your-handle",
      "https://www.instagram.com/your-handle",
      "https://x.com/your-handle",
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "11:00", closes: "19:30" },
    ],
    logo: `${SITE.domain}/logo.png`,
    image: [`${SITE.domain}/og-image.jpg`],
  };

  // ---------- UI ----------
  return (
    <div>
      <Helmet>
        <title>CA in Indore | Tax, GST, Accounting | {SITE.brand}</title>
        <meta name="description" content="CA firm in Indore for ITR filing, GST, accounting, ROC compliance, audits & advisory. Fast, reliable, professional." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`CA in Indore | ${SITE.brand}`} />
        <meta property="og:description" content="ITR, GST, accounting, audits, ROC & advisory in Indore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.domain} />
        <meta property="og:image" content={`${SITE.domain}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>

      <Header SITE={SITE} />
      <Hero SITE={SITE} />
      <TrustBar />
      <Services services={services} />
      <CTASection SITE={SITE} />
      <Plans plans={plans} />
      <Testimonials testimonials={testimonials} />
      <Blog posts={posts} />
      <About SITE={SITE} />
      <Contact SITE={SITE} onSubmit={onSubmit} form={form} setForm={setForm} status={status} />
      <Footer SITE={SITE} />

      <Floaters SITE={SITE} />
    </div>
  );
}

// ---------------- Components ----------------

function Header({ SITE }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="container row between center">
        <a href="#top" className="brand">{SITE.brand}</a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Resources</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn primary sm">Contact</a>
        </nav>
        <button className="hamb" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero({ SITE }) {
  return (
    <section className="hero" id="top">
      <div className="container grid2">
        <div className="hero-txt">
          <h1>Trusted CA Firm in {SITE.city}</h1>
          <p>
            ITR, GST, Accounting, ROC & Advisory — expert help for individuals, startups and SMEs.
            Get compliant, stay confident.
          </p>
          <div className="row gap">
            <a href="#contact" className="btn primary">Book Free Consultation</a>
            <a href={`https://wa.me/${SITE.whatsapp}`} className="btn outline">Chat on WhatsApp</a>
          </div>
          <ul className="ticks">
            <li>Expert CA guidance</li>
            <li>Transparent pricing</li>
            <li>On‑time filings</li>
          </ul>
        </div>
        <div className="hero-card">
          <div className="card">
            <h3>Quick Enquiry</h3>
            <p>Tell us what you need help with. We’ll reach out within 1 business day.</p>
            <a className="btn block" href="#contact">Get Started</a>
            <p className="mini">or call <a href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="trust">
      <div className="container row wrap center between">
        <span>✅ 10+ years combined experience</span>
        <span>🔒 SSL‑secured & data‑safe</span>
        <span>⚡ Fast response & on‑time filings</span>
        <span>⭐ 4.9/5 client rating</span>
      </div>
    </div>
  );
}

function Services({ services }) {
  return (
    <section className="sec" id="services">
      <div className="container">
        <h2 className="center">Services</h2>
        <p className="sub center">Complete taxation and compliance under one roof.</p>
        <div className="grid3">
          {services.map((s) => (
            <div className="card" key={s.key}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="mini">
                {s.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
              <a className="btn ghost sm" href="#contact">Enquire</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ SITE }) {
  return (
    <section className="cta">
      <div className="container row between center wrap">
        <h3>Not sure where to begin?</h3>
        <div className="row gap">
          <a href="#contact" className="btn primary">Speak to a CA</a>
          <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn outline">Book a Slot</a>
        </div>
      </div>
    </section>
  );
}

function Plans({ plans }) {
  return (
    <section className="sec alt" id="pricing">
      <div className="container">
        <h2 className="center">Pricing</h2>
        <p className="sub center">Clear, transparent plans — or request a custom quote.</p>
        <div className="grid3">
          {plans.map((p) => (
            <div className={`card plan ${p.highlight ? "highlight" : ""}`} key={p.name}>
              <div className="plan-hd">
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <div className="muted">{p.suited}</div>
              </div>
              <ul className="mini">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#contact" className="btn block">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ testimonials }) {
  return (
    <section className="sec" id="testimonials">
      <div className="container">
        <h2 className="center">What Clients Say</h2>
        <div className="grid3">
          {testimonials.map((t, i) => (
            <div className="card" key={i}>
              <p className="quote">“{t.quote}”</p>
              <div className="muted">— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog({ posts }) {
  return (
    <section className="sec alt" id="blog">
      <div className="container">
        <h2 className="center">Resources & Updates</h2>
        <p className="sub center">Tax guides, updates and FAQs for individuals and businesses.</p>
        <div className="grid3">
          {posts.map((p, i) => (
            <article className="card" key={i}>
              <h3>{p.title}</h3>
              <div className="muted mini">{p.date}</div>
              <p>{p.excerpt}</p>
              <a className="btn ghost sm" href={p.url}>Read More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ SITE }) {
  return (
    <section className="sec" id="about">
      <div className="container grid2">
        <div>
          <h2>About Us</h2>
          <p>
            {SITE.brand} is a professional CA firm based in {SITE.city}. We help individuals,
            startups and SMEs with taxation, accounting and compliance so they can focus on growth.
          </p>
          <ul className="ticks">
            <li>Experienced & responsive team</li>
            <li>Process‑driven, on‑time compliance</li>
            <li>Practical, growth‑oriented advice</li>
          </ul>
        </div>
        <div className="card">
          <h3>Credentials</h3>
          <ul className="mini">
            <li>• Chartered Accountants (ICAI)</li>
            <li>• Registered GST Practitioners</li>
            <li>• Tally/Zoho/QuickBooks experts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact({ SITE, onSubmit, form, setForm, status }) {
  return (
    <section className="sec alt" id="contact">
      <div className="container grid2">
        <div>
          <h2>Contact Us</h2>
          <p>Share your details and we’ll get back within one business day.</p>
          <form className="form" onSubmit={onSubmit}>
            <div className="row gap wrap">
              <input required type="text" placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
              <input required type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
            </div>
            <div className="row gap wrap">
              <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
              <select value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})}>
                <option>ITR Filing</option>
                <option>GST Services</option>
                <option>Accounting & Bookkeeping</option>
                <option>ROC & Compliance</option>
                <option>Tax & Business Advisory</option>
                <option>Audit & Assurance</option>
              </select>
            </div>
            <textarea rows="4" placeholder="Briefly describe your requirement" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
            <button className="btn primary" type="submit">Send Enquiry</button>
            {status.sent && <div className="ok">Thanks! Your email draft opened — hit send. We’ll respond soon.</div>}
            {status.error && <div className="err">{status.error}</div>}
          </form>
        </div>
        <div>
          <div className="card">
            <h3>Visit Us</h3>
            <p className="mini">{SITE.address}</p>
            <iframe title="map" src={SITE.mapEmbed} width="100%" height="220" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="row gap mt">
              <a className="btn sm" href={`tel:${SITE.phone}`}>Call</a>
              <a className="btn sm" href={`mailto:${SITE.email}`}>Email</a>
              <a className="btn sm" href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp</a>
            </div>
          </div>

          <div className="card mt">
            <h3>Book an Appointment</h3>
            <p className="mini">Choose a time that suits you.</p>
            <div className="scheduler">
              {/* Replace iframe src with your Calendly / Google Appointments embed */}
              <iframe title="appointment" src={SITE.calendly} width="100%" height="320" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ SITE }) {
  return (
    <footer className="ftr">
      <div className="container grid3">
        <div>
          <div className="brand">{SITE.brand}</div>
          <p className="mini">Professional CA services in Indore — ITR, GST, accounting, ROC, audits & advisory.</p>
          <div className="row gap mt">
            <a className="link" href="#privacy">Privacy</a>
            <a className="link" href="#terms">Terms</a>
            <a className="link" href="#disclaimer">Disclaimer</a>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <p className="mini">{SITE.address}</p>
          <p className="mini">Phone: <a className="link" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
          <p className="mini">Email: <a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
        <div>
          <h4>Follow</h4>
          <div className="row gap">
            <a className="link" href="https://www.linkedin.com/company/your-handle">LinkedIn</a>
            <a className="link" href="https://www.instagram.com/your-handle">Instagram</a>
            <a className="link" href="https://x.com/your-handle">Twitter</a>
          </div>
        </div>
      </div>
      <div className="container mini muted center mt">© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</div>
    </footer>
  );
}

function Floaters({ SITE }) {
  return (
    <>
      <a className="float wa" href={`https://wa.me/${SITE.whatsapp}`} aria-label="WhatsApp">💬</a>
      <a className="float call" href={`tel:${SITE.phone}`} aria-label="Call">📞</a>
    </>
  );
}
