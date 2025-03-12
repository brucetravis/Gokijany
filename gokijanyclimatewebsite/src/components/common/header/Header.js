import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../../images/gokijany-logo-nobg.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Header style and hide/reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const header = document.getElementById("header");

      if (header) {
        if (scrollTop > 50) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }

        if (scrollTop > lastScrollTop) {
          header.style.transform = "translateY(-100%)";
        } else {
          header.style.transform = "translateY(0)";
        }
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Scroll spy functionality to set the active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScrollSpy = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const menuItems = [
    { path: "/", label: "Home", sectionId: "home" },
    { path: "/who", label: "About Us", sectionId: "who" },
    { path: "/features", label: "Features", sectionId: "features" },
    { path: "/objectives", label: "Objectives", sectionId: "objectives" },
    { path: "/whyus", label: "Why Us", sectionId: "whyus" },
    { path: "/events", label: "Events", sectionId: "events" },
    { path: "/contacts", label: "Contact Us", sectionId: "contacts" },
  ];

  const toggleMobileMenu = () => setIsMobile((prev) => !prev);
  const closeMobileMenu = () => setIsMobile(false);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo me-auto me-lg-0">
          <img
            src={logo}
            alt="Gokijany Logo"
            className="img-fluid"
            loading="lazy"
          />
        </a>

        <nav id="navbar" className={`navbar${isMobile ? "-mobile" : ""}`}>
          <ul>
            {menuItems.map(({ path, label, sectionId }) => (
              <li key={path} onClick={closeMobileMenu}>
                {path === "/events" ? (
                  <Link to={`${path}`}>{label}</Link>
                ) : (
                  <a
                    href={`#${sectionId}`}
                    className={activeSection === sectionId ? "active" : ""}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div onClick={toggleMobileMenu} className="mobile-nav-toggle">
            {isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            )}
          </div>
        </nav>

        <a
          href="https://play.google.com/store/apps/details?id=com.electrixitaty.gokijany&pcampaignid=web_share"
          target="_blank"
          rel="noreferrer"
          className="section_btn scrollto"
        >
          Download
        </a>
      </div>
    </header>
  );
}
