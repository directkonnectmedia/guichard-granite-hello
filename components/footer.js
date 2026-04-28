import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-main-grid">
              <div className="footer-brand-column">
                <Link href="/">
                  <a>
                    <div className="footer-logo-link">
                      <span className="footer-brand-name section-subtitle">
                        GUICHARD GRANITE LLC
                      </span>
                    </div>
                  </a>
                </Link>
                <p className="footer-tagline section-content">
                  Crafted surfaces. Timeless kitchens. Beautiful bathrooms. We
                  elevate modern living through precision fabrication and luxury
                  stone installation.
                </p>
                <div className="footer-trust-badges">
                  <div className="footer-badge-item">
                    <div className="footer-badge-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-badge-text">
                      Licensed &amp; Insured
                    </span>
                  </div>
                  <div className="footer-badge-item">
                    <div className="footer-badge-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
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
                    <span className="footer-badge-text">
                      Free Consultations
                    </span>
                  </div>
                </div>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-column-title section-subtitle">
                  Quick Navigation
                </h3>
                <nav className="footer-link-list">
                  <a href="#home">
                    <div className="footer-link">
                      <span>Home</span>
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 7h10v10M7 17L17 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#services">
                    <div className="footer-link">
                      <span>Services</span>
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 7h10v10M7 17L17 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#gallery">
                    <div className="footer-link">
                      <span>Gallery</span>
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 7h10v10M7 17L17 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#contact">
                    <div className="footer-link">
                      <span>Contact</span>
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 7h10v10M7 17L17 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-contact-column">
                <h3 className="footer-column-title section-subtitle">
                  Contact Directly
                </h3>
                <div className="footer-owner-card">
                  <span className="footer-owner-name">Miguel</span>
                  <a href="tel:6025247000">
                    <div className="footer-contact-item">
                      <div className="footer-contact-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span>602-524-7000</span>
                    </div>
                  </a>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span>Serving Phoenix &amp; Surrounding Areas</span>
                  </div>
                </div>
                <div className="footer-social-group">
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-copyright section-content">
                  &copy; 2026 Guichard Granite LLC. All rights reserved.
                  Precision in every slab.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-social-link:hover, .footer-link:hover {
  transform: none;
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const icon = link.querySelector("svg")
      if (icon) {
        icon.style.color = "var(--color-accent)"
      }
    })

    link.addEventListener("mouseleave", () => {
      const icon = link.querySelector("svg")
      if (icon) {
        icon.style.color = "currentColor"
      }
    })
  })

  const copyrightYear = document.querySelector(".footer-copyright")
  if (copyrightYear) {
    const currentYear = new Date().getFullYear()
    copyrightYear.innerHTML = copyrightYear.innerHTML.replace("2026", currentYear)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
