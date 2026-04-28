import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Guichard Granite LLC | Luxury Quartz &amp; Granite Countertops</title>
          <meta
            name="description"
            content="Guichard Granite LLC delivers precision-fabricated quartz and granite countertops for kitchens and bathrooms. Owner Miguel personally oversees every project."
          />
          <meta property="og:title" content="Guichard Granite LLC | Luxury Quartz & Granite Countertops" />
          <meta
            property="og:description"
            content="Precision-fabricated luxury countertops for modern kitchens and bathrooms. Free consultations with owner Miguel."
          />
          <meta property="og:type" content="website" />
        </Head>
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section id="home" className="hero-reveal">
          <div className="hero-reveal-media">
            <img
              src="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=2400"
              alt="Luxury quartz countertop kitchen with stone island"
              className="hero-reveal-image"
            />
            <div className="hero-reveal-overlay"></div>
            <div className="hero-reveal-orb hero-reveal-orb-one"></div>
            <div className="hero-reveal-orb hero-reveal-orb-two"></div>
          </div>
          <div className="hero-reveal-container">
            <div className="hero-reveal-data-bar">
              <div className="hero-reveal-data-item">
                <span className="hero-reveal-data-label">Owner:</span>
                <span className="hero-reveal-data-value">Miguel</span>
              </div>
              <div className="hero-reveal-data-divider"></div>
              <div className="hero-reveal-data-item">
                <span className="hero-reveal-data-value">
                  Specializing in Kitchens &amp; Baths
                </span>
              </div>
              <div className="hero-reveal-data-divider"></div>
              <div className="hero-reveal-data-item">
                <span className="hero-reveal-data-value">
                  Free Consultations
                </span>
              </div>
            </div>
            <div className="hero-reveal-content">
              <span className="hero-reveal-kicker">
                Quartz &amp; Granite Countertop Studio
              </span>
              <h1 className="hero-title">
                <span>
                  {' '}
                  Luxury Quartz &amp; Granite.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  {' '}
                  Crafted for Your Kitchen &amp; Bath.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <p className="hero-subtitle">
                Guichard Granite LLC delivers precision fabrication and flawless
                installation for modern homes.
              </p>
              <div className="hero-reveal-tags">
                <span className="hero-reveal-tag">Granite</span>
                <span className="hero-reveal-tag">Quartz</span>
                <span className="hero-reveal-tag">Kitchens</span>
                <span className="hero-reveal-tag">Bathrooms</span>
              </div>
              <div className="hero-reveal-actions">
                <a href="#contact">
                  <div className="btn-primary btn btn-lg">
                    <span>Start Your Project</span>
                  </div>
                </a>
                <a href="#gallery">
                  <div className="btn-outline btn btn-lg">
                    <span>View Our Work</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services-spotlight">
          <div className="services-spotlight-wrapper">
            <div className="services-spotlight-column">
              <div className="services-spotlight-image-container">
                <img
                  alt="Luxury Kitchen Countertop"
                  src="https://images.pexels.com/photos/10827305/pexels-photo-10827305.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-spotlight-image"
                />
                <div className="services-spotlight-image-overlay"></div>
              </div>
              <div className="services-spotlight-info">
                <h2 className="section-title">Kitchen Countertops</h2>
                <p className="section-content">
                  The heart of the home deserves the finest surfaces. We
                  emphasize seamless edges and stunning granite islands that
                  redefine your culinary space. From durable quartz to timeless
                  natural stone, our fabrication ensures millimeter precision
                  for a lifetime of beauty.
                </p>
                <div className="services-spotlight-features">
                  <div className="services-spotlight-feature-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>Seamless Edge Profiles</span>
                  </div>
                  <div className="services-spotlight-feature-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>Custom Island Fabrication</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-spotlight-column">
              <div className="services-spotlight-image-container">
                <img
                  alt="Luxury Bathroom Vanity"
                  src="https://images.pexels.com/photos/8142047/pexels-photo-8142047.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="services-spotlight-image"
                />
                <div className="services-spotlight-image-overlay"></div>
              </div>
              <div className="services-spotlight-info">
                <h2 className="section-title">Bathroom Vanities</h2>
                <p className="section-content">
                  Transform your bathroom into a spa-like retreat with
                  custom-cut stone vanities. We specialize in under-mount sink
                  precision and luxury finishes that withstand the test of time
                  and moisture, bringing architectural elegance to your private
                  sanctuary.
                </p>
                <div className="services-spotlight-features">
                  <div className="services-spotlight-feature-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>Under-mount Sink Precision</span>
                  </div>
                  <div className="services-spotlight-feature-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>Moisture-Resistant Sealing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="portfolio-teaser">
          <div className="portfolio-teaser-header">
            <h2 className="section-title">Curated Masterpieces</h2>
            <p className="section-content">
              A visual feast of our most recent transformations.
            </p>
          </div>
          <div className="portfolio-teaser-scroller">
            <div className="portfolio-teaser-track">
              <div className="portfolio-teaser-item">
                <img
                  alt="Modern Quartz Kitchen"
                  src="https://images.pexels.com/photos/7027854/pexels-photo-7027854.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-teaser-overlay">
                  <span className="portfolio-teaser-caption">
                    Modern Quartz Kitchen
                  </span>
                </div>
              </div>
              <div className="portfolio-teaser-item">
                <img
                  alt="Custom Granite Island"
                  src="https://images.pexels.com/photos/6835085/pexels-photo-6835085.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-teaser-overlay">
                  <span className="portfolio-teaser-caption">
                    Custom Granite Island
                  </span>
                </div>
              </div>
              <div className="portfolio-teaser-item">
                <img
                  alt="Luxury Bathroom Vanity"
                  src="https://images.pexels.com/photos/10511536/pexels-photo-10511536.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-teaser-overlay">
                  <span className="portfolio-teaser-caption">
                    Luxury Bathroom Vanity
                  </span>
                </div>
              </div>
              <div className="portfolio-teaser-item">
                <img
                  alt="Waterfall Edge Detail"
                  src="https://images.pexels.com/photos/3935337/pexels-photo-3935337.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-teaser-overlay">
                  <span className="portfolio-teaser-caption">
                    Waterfall Edge Detail
                  </span>
                </div>
              </div>
              <div className="portfolio-teaser-item">
                <img
                  alt="Dual Sink Master Bath"
                  src="https://images.pexels.com/photos/8583532/pexels-photo-8583532.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-teaser-overlay">
                  <span className="portfolio-teaser-caption">
                    Dual Sink Master Bath
                  </span>
                </div>
              </div>
              <div className="portfolio-teaser-item">
                <img
                  alt="Veined Marble Backsplash"
                  src="https://images.pexels.com/photos/10099160/pexels-photo-10099160.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="portfolio-teaser-overlay">
                  <span className="portfolio-teaser-caption">
                    Veined Marble Backsplash
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="craftsmanship-process">
          <div className="craftsmanship-process-container">
            <div className="craftsmanship-process-header">
              <h2 className="section-title">The Path to Perfection</h2>
              <p className="section-content">
                Our structured approach ensures millimeter precision and
                absolute quality control.
              </p>
            </div>
            <div className="craftsmanship-process-steps">
              <div className="craftsmanship-process-step">
                <div className="craftsmanship-process-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="craftsmanship-process-info">
                  <span className="craftsmanship-process-number">01</span>
                  <h3 className="section-subtitle">Consultation</h3>
                  <p className="section-content">
                    Direct meeting with Miguel to select materials and define
                    your vision.
                  </p>
                </div>
              </div>
              <div className="craftsmanship-process-step">
                <div className="craftsmanship-process-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="m11.414 10l-7.383 7.418a2.09 2.09 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0L14.414 13m3.707 2.293l2.586-2.586a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0L9.121 6.293a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="craftsmanship-process-info">
                  <span className="craftsmanship-process-number">02</span>
                  <h3 className="section-subtitle">Fabrication</h3>
                  <p className="section-content">
                    Precision cutting and polishing in our state-of-the-art
                    stone facility.
                  </p>
                </div>
              </div>
              <div className="craftsmanship-process-step">
                <div className="craftsmanship-process-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 15v-3m4 3v-3m4 3v-3M2 8V4m20 2H2m20 2V4M6 15v-3"></path>
                      <rect x="2" y="12" rx="2" width="20" height="8"></rect>
                    </g>
                  </svg>
                </div>
                <div className="craftsmanship-process-info">
                  <span className="craftsmanship-process-number">03</span>
                  <h3 className="section-subtitle">Precision Install</h3>
                  <p className="section-content">
                    Flawless on-site placement with seamless joints and expert
                    sealing.
                  </p>
                </div>
              </div>
              <div className="craftsmanship-process-step">
                <div className="craftsmanship-process-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11l3 3L22 4"></path>
                    </g>
                  </svg>
                </div>
                <div className="craftsmanship-process-info">
                  <span className="craftsmanship-process-number">04</span>
                  <h3 className="section-subtitle">Final Reveal</h3>
                  <p className="section-content">
                    A walk-through of your new luxury surfaces to ensure total
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-metrics">
          <div className="trust-metrics-wrapper">
            <div className="trust-metrics-item">
              <span className="trust-metrics-number">15+</span>
              <span className="trust-metrics-label">Years of Experience</span>
            </div>
            <div className="trust-metrics-item">
              <span className="trust-metrics-number">1.2k</span>
              <span className="trust-metrics-label">Projects Completed</span>
            </div>
            <div className="trust-metrics-item">
              <span className="trust-metrics-number">98%</span>
              <span className="trust-metrics-label">Repeat Clients</span>
            </div>
            <div className="trust-metrics-item">
              <span className="trust-metrics-number">Free</span>
              <span className="trust-metrics-label">Consultations</span>
            </div>
          </div>
        </section>
        <section className="testimonials-carousel">
          <div className="testimonials-carousel-container">
            <div className="testimonials-carousel-header">
              <h2 className="section-title">Client Voices</h2>
              <p className="section-content">
                Hear from homeowners who elevated their living spaces with
                Guichard Granite.
              </p>
            </div>
            <div className="testimonials-carousel-track">
              <div className="testimonials-carousel-item active">
                <div className="testimonials-carousel-quote">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M14.017 21H11.017C10.4647 21 10.017 20.5523 10.017 20V15C10.017 14.4477 10.4647 14 11.017 14H14.017M4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12M4.017 21H1.017C0.464722 21 0.017 20.5523 0.017 20V15C0.017 14.4477 0.464722 14 1.017 14H4.017"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="section-content">
                    &quot;The precision that Miguel and his team brought to our
                    kitchen renovation was astounding. The quartz island is the
                    centerpiece of our home now. Truly professional
                    installation.&quot;
                  </p>
                  <div className="testimonials-carousel-author">
                    <span className="testimonials-carousel-name">
                      Sarah Jenkins
                    </span>
                    <span className="testimonials-carousel-role">
                      Homeowner, Scottsdale
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-carousel-controls">
              <button
                aria-label="Previous testimonial"
                className="testimonials-carousel-btn prev"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="m15 18l-6-6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="testimonials-carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <button
                aria-label="Next testimonial"
                className="next testimonials-carousel-btn"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section id="contact" className="quote-contact">
          <div className="quote-contact-container">
            <div className="quote-contact-info">
              <h2 className="section-title">Ready to elevate your home?</h2>
              <p className="section-content">
                Start your transformation today. Miguel handles every project
                with personal attention and decades of stone mastery.
              </p>
              <div className="quote-contact-direct">
                <div className="quote-contact-card">
                  <div className="quote-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="quote-contact-details">
                    <span className="quote-contact-label">
                      Talk to Miguel directly:
                    </span>
                    <a href="tel:6025247000">
                      <div className="quote-contact-value">
                        <span>602-524-7000 ext. 0178</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="quote-contact-badges">
                <div className="quote-contact-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="quote-contact-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M8 2v4m8-4v4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18M9 16l2 2l4-4"></path>
                  </svg>
                  <span>Free Estimates</span>
                </div>
              </div>
            </div>
            <div className="quote-contact-form-wrapper">
              <form
                action="/submit"
                method="POST"
                data-form-id="4f05abfd-820c-4798-9c0b-97b181fec77d"
                className="quote-contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    data-form-field-id="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(602) 000-0000"
                    data-form-field-id="phone"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="project">Project Type</label>
                    <select
                      id="project"
                      name="project"
                      required
                      defaultValue=""
                      data-form-field-id="project"
                    >
                      <option value="" disabled>
                        Select option
                      </option>
                      <option value="kitchen">Kitchen</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="material">Material Interest</label>
                    <select
                      id="material"
                      name="material"
                      required
                      defaultValue=""
                      data-form-field-id="material"
                    >
                      <option value="" disabled>
                        Select option
                      </option>
                      <option value="quartz">Quartz</option>
                      <option value="granite">Granite</option>
                      <option value="undecided">Undecided</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Brief Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    data-form-field-id="message"
                  ></textarea>
                </div>
                <button
                  id="thq_button_6EoA"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_6EoA"
                  className="btn-primary btn btn-xl btn-full"
                >
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInDown {from {opacity: 0;
transform: translateY(-20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeIn {from {opacity: 0;}
to {opacity: 1;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container6">
          <div className="home-container7">
            <Script
              html={`<script defer data-name="guichard-interactions">
(function(){
  const testimonials = [
    {
      quote: "The precision that Miguel and his team brought to our kitchen renovation was astounding. The quartz island is the centerpiece of our home now. Truly professional installation.",
      author: "Sarah Jenkins",
      role: "Homeowner, Scottsdale",
    },
    {
      quote: "Guichard Granite delivered exactly what they promised: millimeter precision. The bathroom vanity cuts around our custom sinks are perfect. I wouldn't go anywhere else.",
      author: "David Miller",
      role: "Interior Designer",
    },
    {
      quote: "Working with Miguel was a breeze. He personally oversaw the selection and installation of our granite countertops. The quality is architectural grade. Five stars.",
      author: "Elena Rodriguez",
      role: "Homeowner, Phoenix",
    },
  ]

  let currentTestimonial = 0
  const track = document.querySelector(".testimonials-carousel-track")
  const dots = document.querySelectorAll(".testimonials-carousel-dots .dot")
  const prevBtn = document.querySelector(".testimonials-carousel-btn.prev")
  const nextBtn = document.querySelector(".testimonials-carousel-btn.next")

  function updateTestimonial(index) {
    const t = testimonials[index]
    track.innerHTML = \`
    <div class="testimonials-carousel-quote">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M14.017 21H11.017C10.4647 21 10.017 20.5523 10.017 20V15C10.017 14.4477 10.4647 14 11.017 14H14.017M4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12M4.017 21H1.017C0.464722 21 0.017 20.5523 0.017 20V15C0.017 14.4477 0.464722 14 1.017 14H4.017" /></svg>
      <p class="section-content">"\${t.quote}"</p>
      <div class="testimonials-carousel-author">
        <span class="testimonials-carousel-name">\${t.author}</span>
        <span class="testimonials-carousel-role">\${t.role}</span>
      </div>
    </div>
  \`

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })
  }

  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    updateTestimonial(currentTestimonial)
  })

  prevBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
    updateTestimonial(currentTestimonial)
  })

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentTestimonial = i
      updateTestimonial(currentTestimonial)
    })
  })

  // Reveal on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".services-spotlight-column, .craftsmanship-process-step, .quote-contact-info, .quote-contact-form-wrapper").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
    revealObserver.observe(el)
  })

  // Form Submission handling (Native-first approach)
  const contactForm = document.querySelector(".quote-contact-form")
  contactForm.addEventListener("submit", (e) => {
    // Let native validation happen first
    if (!contactForm.checkValidity()) return

    // UX enhancement: button state
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    submitBtn.disabled = true
    submitBtn.textContent = "Sending Request..."
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
