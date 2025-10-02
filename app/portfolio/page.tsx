"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "../components/Container";
import Image from "next/image";

/* ===================== Projects ===================== */
function Projects() {
  const projects = [
    {
      title: "Sonum Music App",
      description:
        "While Sonum had the vision, they sought a skilled design partner to transform their concept into reality.",
      tags: ["iOS App", "Landing page"],
      image: "/sonum.png",
      link: "/case-studies/sonum",
      w: 1200,
      h: 800,
    },
    {
      title: "BlockShare – Smart Tracker for Crypto and DeFi",
      description:
        "We enhanced BlockShare’s platform by optimizing the user experience and improving the UI, ensuring complex data was visualized in a clear, structured, and user-friendly manner.",
      tags: ["Platform", "Website", "Crypto"],
      image: "/blockshare.png",
      link: "/case-studies/blockshare",
      w: 1200,
      h: 800,
    },
    {
      title: "Apex – The Building Code App",
      description:
        "Reshaping the construction industry’s engagement with roofing codes through innovation.",
      tags: ["iOS App", "Android App", "Web App"],
      image: "/apex.png",
      link: "/case-studies/apex",
      w: 1200,
      h: 800,
    },
  ];

  return (
    <section id="projects" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <h2 className="mb-12 text-[40px] sm:text-[48px] md:text-[60px] font-normal text-left">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-8 items-center bg-[#F4F5F5] rounded-xl p-4 sm:p-6 md:p-10"
            >
              {/* Image */}
              <Link href={p.link} className="block">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={p.w}
                  height={p.h}
                  className="w-full h-auto rounded-lg object-cover transition hover:scale-[1.01]"
                  priority={i === 0}
                />
              </Link>

              {/* Content */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-[28px] sm:text-[32px] md:text-[34px] font-semibold leading-tight">
                  {p.title}
                </h3>

                <p className="text-[16px] text-neutral-600">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[14px] bg-white px-3 py-1 rounded text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href={p.link}
                    className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-6 py-3 text-[16px] font-medium text-black transition hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src="/logo.png"
                      alt="InCube Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===================== Get In Touch ===================== */
function GetInTouch() {
  return (
    <section id="get-in-touch" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Ліва колонка */}
          <div>
            <h2 className="text-[48px] sm:text-[64px] md:text-[80px] leading-tight font-semibold font-['Plus_Jakarta_Sans']">
              Let’s <span className="italic font-extralight">talk</span>
            </h2>
            <p className="mt-6 text-[16px] font-normal text-neutral-600 leading-relaxed">
              Whether you’re looking to start a new project or discuss
              high-performance engineering, we’re prepared to chat!
            </p>
          </div>

          {/* Права колонка — форма */}
          <form
            action="https://formspree.io/f/mpwjkrpd"
            method="POST"
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 block w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:outline-none focus:border-black"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:outline-none focus:border-black"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 block w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:outline-none focus:border-black"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                required
                className="mt-1.5 h-6 w-6 border border-neutral-400 rounded-sm text-black focus:ring-black"
              />
              <label htmlFor="privacy" className="text-[16px] font-light text-neutral-700 leading-relaxed">
                I consent to InCube Studio Privacy Policy and having this website
                store my submitted information so they can respond to
              </label>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-black bg-white px-8 py-3 text-[16px] font-medium text-black transition hover:scale-105"
              >
                Send message <span className="ml-2">↗</span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

/* ===================== Footer ===================== */
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-black text-white pt-[80px] pb-[80px]">
      <Container>
        <p className="mb-12 text-neutral-400">
          Whether you want to make a new project or talk about high performance engineering, we`re ready to talk!
        </p>

        <div className="grid md:grid-cols-4 gap-12">
          {/* Address */}
          <div>
            <h4 className="text-lg font-medium mb-4">Address</h4>
            <p className="text-neutral-400">
              Lviv, Lviv oblast<br />Ukraine
            </p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-lg font-medium mb-4">Email</h4>
            <Link href="mailto:info@incube.studio" className="text-neutral-400 hover:text-white">
              info@incube.studio
            </Link>
          </div>

          {/* Main Menu */}
          <div>
            <h4 className="text-lg font-medium mb-4">Main menu</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contacts" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium mb-4">Social</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">Clutch</Link></li>
              <li><Link href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Upwork</Link></li>
              <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* ===================== Scroll To Top ===================== */
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-10 right-10 z-50 flex items-center justify-center
                  w-14 h-14 rounded-full border border-black bg-white text-black
                  shadow-md cursor-pointer transition-all duration-300
                  hover:bg-black hover:text-white hover:scale-105 active:scale-95
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50
                  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

/* ===================== PAGE ===================== */
export default function PortfolioPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Projects />
      <GetInTouch />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
