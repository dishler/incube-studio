"use client";
import Link from "next/link";
import Container from "./Container";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hover / Pin стан для Services
  const [servicesHover, setServicesHover] = useState(false);
  const [servicesPinned, setServicesPinned] = useState(false);

  // відкритий стан дропдауну
  const isServicesOpen = servicesPinned || servicesHover;

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // не ховаємо хедер, коли відкрите моб. меню
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setServicesPinned(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const services = [
    { name: "Web Development", link: "/services/web-development" },
    { name: "Mobile App Development", link: "/services/mobile-app-development" },
    { name: "Mobile Web Development", link: "/services/mobile-web-development" },
    { name: "MVP Development", link: "/services/mvp-development" },
    { name: "UI/UX Design", link: "/services/ui-ux-design" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-[80] w-full border-b border-neutral-200 bg-white transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <div className="relative grid grid-cols-[auto_1fr_auto] items-center py-6">
          {/* Logo */}
          <Link href="/#hero" className="justify-self-start cursor-pointer">
            <Image src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop menu */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-10 text-[16px] font-medium text-neutral-800">
                <li>
                  <Link href="/" className="hover:text-neutral-700 cursor-pointer">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/portfolio" className="hover:text-neutral-700 cursor-pointer">
                    Portfolio
                  </Link>
                </li>

                {/* Services dropdown */}
                <li
                  className="
                    relative cursor-pointer
                    before:content-[''] before:absolute before:left-0 before:top-full before:h-2 before:w-full
                    before:cursor-pointer
                  "
                  onMouseEnter={() => setServicesHover(true)}
                  onMouseLeave={() => setServicesHover(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesPinned(v => !v)}
                    className="flex items-center gap-1 hover:text-neutral-700 !cursor-pointer select-none focus:outline-none"
                    aria-haspopup="menu"
                    aria-expanded={isServicesOpen}
                    aria-controls="services-menu"
                  >
                    Services
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <ul
                    id="services-menu"
                    role="menu"
                    className={`
                      absolute left-0 top-full z-[120] mt-2 w-64 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg
                      origin-top transition-[opacity,transform,visibility] duration-150 cursor-pointer
                      ${isServicesOpen ? "opacity-100 visible pointer-events-auto scale-y-100" : "opacity-0 invisible pointer-events-none scale-y-95"}
                    `}
                  >
                    {services.map((s) => (
                      <li key={s.name} role="none">
                        <Link
                          role="menuitem"
                          href={s.link}
                          onClick={() => setServicesPinned(false)}
                          className="block w-full px-6 py-2.5 text-neutral-700 hover:bg-neutral-100 hover:text-black !cursor-pointer"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link href="/about" className="hover:text-neutral-700 cursor-pointer">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact desktop */}
          <div className="hidden justify-self-end lg:block">
            <Link
              href="/contact"
              className="cursor-pointer rounded-full border border-transparent bg-black px-6 py-2 text-[16px] font-medium text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="relative z-[90] justify-self-end lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`my-1 block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="relative z-[85] lg:hidden border-t border-neutral-200 bg-white shadow-md"
        >
          <nav className="flex flex-col space-y-4 p-5" aria-label="Mobile">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-neutral-700 cursor-pointer"
            >
              Home
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="hover:text-neutral-700 cursor-pointer"
            >
              Portfolio
            </Link>

            <details>
              <summary className="list-none hover:text-neutral-700 cursor-pointer">
                Services
              </summary>
              <ul className="ml-4 mt-2 space-y-2">
                {services.map((s) => (
                  <li key={s.name}>
                    <Link
                      href={s.link}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-black !cursor-pointer"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-neutral-700 cursor-pointer"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer rounded-full border border-transparent bg-black px-6 py-2 text-center text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
