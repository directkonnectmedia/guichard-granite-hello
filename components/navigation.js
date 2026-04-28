import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-logo-link">
                  <span className="navigation-brand section-title">
                    <span>
                      {' '}
                      Guichard Granite
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="navigation-thq-navigation-brand-accent-elm">
                      LLC
                    </span>
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-links-desktop">
              <a href="#home">
                <div className="navigation-link">
                  <span>Home</span>
                </div>
              </a>
              <a href="#services">
                <div className="navigation-link">
                  <span>Services</span>
                </div>
              </a>
              <a href="#gallery">
                <div className="navigation-link">
                  <span>Gallery</span>
                </div>
              </a>
              <a href="#contact">
                <div className="navigation-link">
                  <span>Contact</span>
                </div>
              </a>
            </div>
            <div className="navigation-actions">
              <a href="tel:6025247000">
                <div className="btn-outline navigation-call-btn btn">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-1.33a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Call Miguel</span>
                </div>
              </a>
              <button
                id="navToggle"
                aria-label="Toggle Menu"
                aria-expanded="false"
                className="navigation-toggle"
              >
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div id="mobileOverlay" className="navigation-mobile-overlay">
            <div className="navigation-mobile-header">
              <Link href="/">
                <a>
                  <div className="navigation-logo-link">
                    <span className="navigation-brand section-title">
                      Guichard Granite
                    </span>
                  </div>
                </a>
              </Link>
              <button
                id="navClose"
                aria-label="Close Menu"
                className="navigation-close"
              >
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="navigation-mobile-content">
              <div className="navigation-mobile-links">
                <a href="#home">
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="navigation-mobile-link">
                    <span>Services</span>
                  </div>
                </a>
                <a href="#gallery">
                  <div className="navigation-mobile-link">
                    <span>Gallery</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="navigation-mobile-link">
                    <span>Contact</span>
                  </div>
                </a>
              </div>
              <div className="navigation-mobile-footer">
                <a href="#contact">
                  <div className="navigation-cta-mobile btn-primary btn btn-lg">
                    <span>Get a Free Quote</span>
                  </div>
                </a>
                <div className="navigation-mobile-contact-info">
                  <p className="section-content">Owner: Miguel</p>
                  <p className="section-content">602-524-7000 ext. 0178</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  const navWrapper = document.querySelector(".navigation-wrapper")

  const toggleMenu = (isOpen) => {
    navToggle.setAttribute("aria-expanded", isOpen)
    mobileOverlay.classList.toggle("is-active", isOpen)
    document.body.style.overflow = isOpen ? "hidden" : ""
  }

  navToggle.addEventListener("click", () => toggleMenu(true))
  navClose.addEventListener("click", () => toggleMenu(false))

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false))
  })

  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.boxShadow = "none"
      navWrapper.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      navWrapper.style.transform = "translateY(0)"
      navWrapper.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.1)"
      navWrapper.style.background = "color-mix(in srgb, var(--color-surface) 95%, transparent)"
      navWrapper.style.backdropFilter = "blur(12px)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-brand-accent-elm {
            color: var(--color-accent);
            font-weight: 300;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
