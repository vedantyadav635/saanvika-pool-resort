import React, { useEffect, useMemo, useState } from "react";
import logoImage from "../assets/saanvika-logo.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" }
];

const highlights = [
  ["Clean Pool", "Fresh water, clear spaces"],
  ["Day Passes", "Solo, family, and group plans"],
  ["2 Rooms", "Simple room add-ons available"]
];

const amenities = [
  {
    number: "01",
    title: "Family Friendly",
    text: "Comfortable areas for kids, parents, and groups to spend the day together."
  },
  {
    number: "02",
    title: "Fresh Look",
    text: "Modern poolside styling, neat seating, and a clean place to relax from arrival."
  },
  {
    number: "03",
    title: "Two Rooms",
    text: "Two simple rooms are available for families or small groups who need extra comfort."
  }
];

const plans = [
  {
    name: "Single Entry",
    price: "Rs. 99/-",
    note: "Per person day access",
    features: ["Pool entry", "Changing area access", "Relaxed seating"],
    cta: "Select",
    href: "#booking"
  },
  {
    name: "Family Pass",
    price: "Rs. 399/-",
    note: "Up to 4 guests",
    features: ["Pool entry for family", "Reserved seating slot", "Best for weekends"],
    cta: "Select",
    href: "#booking",
    featured: true
  },
  {
    name: "Room Add-on",
    price: "Custom",
    note: "Two rooms available",
    features: ["Room with pool access", "Good for families", "Ask for availability"],
    cta: "Ask Now",
    href: "#contact"
  }
];

const contactLinks = [
  {
    label: "Email",
    value: "hello@saanvikapoolresort.com",
    helper: "For bookings and room availability",
    href: "mailto:hello@saanvikapoolresort.com"
  },
  {
    label: "Contact",
    value: "Landline No",
    helper: "Temporary number placeholder"
  },
  {
    label: "Best For",
    value: "Pool Visits",
    helper: "Single entry, family pass, and room add-on"
  }
];

const mapUrl =
  "https://www.google.com/maps/place/Saanvika+Pool+%26Resort/@22.5841217,75.7908295,17.15z/data=!4m6!3m5!1s0x3962f7004452ee69:0x79f55e52b5ae3456!8m2!3d22.5838884!4d75.791554!16s%2Fg%2F11z3ctbygz?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > previousScrollY;

      setIsHeaderHidden(currentScrollY > 90 && isScrollingDown);
      previousScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={isHeaderHidden && !isMenuOpen ? "site-header header-hidden" : "site-header"}
      aria-label="Main navigation"
    >
      <a className="brand" href="#home" aria-label="Saanvika Pool and Resort home" onClick={closeMenu}>
        <img className="brand-logo" src={logoImage} alt="" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="site-nav"
        aria-label="Toggle navigation menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="site-nav" className={isMenuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Saanvika Pool and Resort">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1>Saanvika Pool and Resort</h1>
        <p className="hero-copy">
          A bright, modern pool for family dips, weekend plans, day visits, and two-room stays for
          small groups.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#booking">
            Book a Visit
          </a>
          <a className="button button-secondary" href="#pricing">
            View Pricing
          </a>
        </div>
      </div>

      <div className="quick-panel" aria-label="Pool highlights">
        {highlights.map(([title, text]) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="split-layout">
        <div>
          <h2>A newly styled pool place with two simple rooms.</h2>
        </div>
        <div className="body-copy">
          <p>
            Saanvika Pool and Resort is mainly a clean swimming pool with comfortable seating,
            shaded corners, and two rooms for guests who need a little extra space.
          </p>
          <p>
            Come for a quick swim, bring the family for a sunny afternoon, or ask about room
            availability when you want a longer poolside visit.
          </p>
        </div>
      </div>

      <div className="amenity-grid">
        {amenities.map((amenity) => (
          <article className="amenity-card" key={amenity.title}>
            <span className="amenity-icon">{amenity.number}</span>
            <h3>{amenity.title}</h3>
            <p>{amenity.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="section-heading">
        <h2>Choose your pool day.</h2>
        <p>Simple starter pricing for the first website draft. You can share the exact pool and room rates next.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={plan.featured ? "price-card featured-plan" : "price-card"} key={plan.name}>
            <p className="plan-name">{plan.name}</p>
            <h3>{plan.price}</h3>
            <p className="plan-note">{plan.note}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className={plan.featured ? "button button-primary" : "button button-quiet"} href={plan.href}>
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  const [formStatus, setFormStatus] = useState("");
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").toString().trim();
    const visitType = formData.get("visitType");

    setFormStatus(`Thanks ${name}. Your ${visitType} request is ready to confirm.`);
    event.currentTarget.reset();
  }

  return (
    <section id="booking" className="section booking-section">
      <div className="booking-layout">
        <div>
          <h2>Plan your visit in a minute.</h2>
          <p className="body-copy">
            Send your preferred date, group size, and visit type. The page will show a quick
            confirmation now, and the form can later be connected to WhatsApp, email, or a backend.
          </p>
        </div>

        <form className="booking-form" id="booking-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="Mobile number" required />
          </label>
          <div className="form-row">
            <label>
              Date
              <input type="date" name="date" min={minDate} required />
            </label>
            <label>
              Guests
              <input type="number" name="guests" min="1" max="80" defaultValue="4" required />
            </label>
          </div>
          <label>
            Visit Type
            <select name="visitType" required defaultValue="Single Entry">
              <option value="Single Entry">Single Entry</option>
              <option value="Family Pass">Family Pass</option>
              <option value="Room Add-on">Room Add-on</option>
            </select>
          </label>
          <button className="button button-primary form-button" type="submit">
            Request Booking
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {formStatus}
          </p>
        </form>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-layout">
        <div className="contact-copy">
          <h2>Ready for a pool day?</h2>
          <p className="body-copy">
            Reach out for pool timings, room availability, family pass details, and group visit
            planning.
          </p>
          <a className="button button-primary contact-button" href="#booking">
            Request Booking
          </a>
        </div>

        <div className="contact-card-grid" aria-label="Contact details">
          {contactLinks.map((link) => (
            <article className="contact-card" key={link.label}>
              <span className="section-kicker">{link.label}</span>
              {link.href ? <a href={link.href}>{link.value}</a> : <strong>{link.value}</strong>}
              <p>{link.helper}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="map-panel">
        <div className="map-copy">
          <div>
            <span className="section-kicker">Location</span>
            <h3>Saanvika Pool and Resort</h3>
            <p>Gram Borkhedi, Navda road front of Sapphire college, near Veterinary College.</p>
          </div>
          <a className="button button-secondary map-button" href={mapUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
        <iframe
          title="Saanvika Pool and Resort location on Google Maps"
          src="https://www.google.com/maps?q=22.5838884,75.791554&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-watermark" aria-hidden="true">
        Vedant
      </div>
      <div className="footer-inner">
        <div>
          <a className="footer-brand" href="#home">
            <img className="footer-logo" src={logoImage} alt="" />
            <span>Saanvika Pool and Resort</span>
          </a>
          <p>Modern pool visits, family days, and two available rooms.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/saanvikaresort/" target="_blank" rel="noreferrer">
            Instagram: @saanvikaresort
          </a>
          <a href="mailto:hello@saanvikapoolresort.com">Email: hello@saanvikapoolresort.com</a>
          <span className="credit">Designed by Vedant</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Pricing />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
