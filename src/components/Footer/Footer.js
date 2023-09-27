import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-secondary text-base-content">
        <nav>
          <header className="footer-title">Links</header>
          <NavLink
            to="https://www.justgiving.com/page/daybreak-haunts-2023"
            className="link link-hover"
            target="_blank"
            rel="noreferrer"
          >
            Donate to the Utah Food Bank
          </NavLink>
          <NavLink to="/volunteer" className="link link-hover">
            Become a Haunts House
          </NavLink>
          <NavLink to="/faqs" className="link link-hover">
            FAQs
          </NavLink>
          <NavLink to="/about" className="link link-hover">
            About us
          </NavLink>
          <NavLink to="/contact" className="link link-hover">
            Contact us
          </NavLink>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.youtube.com/shorts/QeNFUBNYGmE"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/daybreakhaunts"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 bg-secondary text-base-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2023 - Firework Development and Daybreak Haunts</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
