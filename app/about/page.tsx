"use client";

import Image from "next/image";
import Container from "../components/Container";
import { useEffect, useState, type CSSProperties } from "react";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStatsPitch />
      <Founders />
      <GetInTouch />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

/* ===================== Hero ===================== */
function AboutHero() {
  return (
    <section id="about" className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="pt-[100px] md:pt-[120px] lg:pt-[140px] pb-12 md:pb-[72px] grid items-center gap-10 md:grid-cols-2">
          {/* Ліва частина — текст */}
          <h1 className="font-['Plus_Jakarta_Sans'] leading-none text-[48px] sm:text-[64px] md:text-[80px]">
            <span className="font-semibold">About</span>{" "}
            <span className="italic font-extralight">us</span>
          </h1>

          {/* Права частина — іконка */}
          <div className="justify-self-end">
            <Image
              src="/about/icon.png"
              alt="About us icon"
              width={720}
              height={720}
              className="w-full max-w-[520px] md:max-w-[640px] lg:max-w-[720px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* === SECTION: About – Stats & Pitch === */
function AboutStatsPitch() {
  // Outline для цифр (stroke)
  const outlineNumStyle: CSSProperties = { WebkitTextStroke: "2px #111" };

  return (
    <section className="bg-white">
      <Container>
        {/* Верхній рядок: about us + лінія */}
        <div className="py-4 border-b border-neutral-300">
          <span className="text-[14px] sm:text-[16px] text-neutral-700">about us</span>
        </div>

        {/* Контент: зліва цифри, справа заголовок + опис */}
        <div className="pt-10 md:pt-12 grid gap-12 lg:gap-20 md:grid-cols-[320px_minmax(0,1fr)]">
          {/* LEFT: stats */}
          <div className="space-y-12 md:space-y-16">
            {/* 1 */}
            <div>
              <div
                className="select-none leading-none text-transparent font-semibold text-[96px] sm:text-[120px] md:text-[140px]"
                style={outlineNumStyle}
              >
                10
              </div>
              <div className="mt-3 text-[18px] sm:text-[20px] font-semibold text-neutral-900">
                Awesome clients
              </div>
            </div>

            {/* 2 */}
            <div>
              <div
                className="select-none leading-none text-transparent font-semibold text-[96px] sm:text-[120px] md:text-[140px]"
                style={outlineNumStyle}
              >
                15
              </div>
              <div className="mt-3 text-[18px] sm:text-[20px] font-semibold text-neutral-900">
                Created projects
              </div>
            </div>

            {/* 3 */}
            <div>
              <div
                className="select-none leading-none text-transparent font-semibold text-[96px] sm:text-[120px] md:text-[140px]"
                style={outlineNumStyle}
              >
                8
              </div>
              <div className="mt-3 text-[18px] sm:text-[20px] font-semibold text-neutral-900">
                Specialists
              </div>
            </div>
          </div>

          {/* RIGHT: heading + copy */}
          <div className="flex flex-col">
            <h2 className="font-['Plus_Jakarta_Sans'] text-black leading-[1.05] text-[40px] sm:text-[54px] md:text-[64px] lg:text-[74px]">
              <span className="font-medium">
                The Expert
                <br />
                Design &amp;
              </span>
              <br />
              <span className="font-extralight italic">
                Development
                <br />
                Team
              </span>
            </h2>

            {/* опис */}
            <div className="mt-6 sm:mt-8 max-w-[720px] text-[16px] text-neutral-700 leading-[1.8] pl-0 sm:pl-8 md:pl-[54px]">
              <p>We create impactful digital experiences that elevate your brand.</p>
              <p className="mt-5">
                Our team combines expertise and agility to deliver exceptional designs and web
                solutions. We’re not just another agency; we’re your dedicated partner, committed to
                your success. Your vision is our mission, and we care about your product as much as
                you do.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===================== Founders ===================== */
function Founders() {
  const founders = [
    { name: "Dmytro Ishler", role: "CEO & Co-Founder", image: "/founder1.png" },
    { name: "Lyubomyr Rudko", role: "CTO & Co-Founder", image: "/founder2.png" },
  ];

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const el = document.getElementById("founders");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="founders" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <h2 className="text-[40px] sm:text-[50px] md:text-[60px] mb-12">
          <span className="font-light italic mr-3">Meet our creative</span>
          <span className="font-medium">staff</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((f, i) => (
            <div
              key={f.name}
              className={`group flex flex-col items-start rounded-xl
                          transition-all duration-500 motion-reduce:transition-none
                          ${reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                          hover:scale-[1.02]`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-auto object-cover rounded-lg
                           transition-transform duration-500 ease-out will-change-transform
                           group-hover:scale-105"
              />
              <p className="mt-4 text-[20px] font-semibold text-black">{f.name}</p>
              <p className="text-[14px] text-[#83838A]">/ {f.role}</p>
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
    <footer className="border-t border-neutral-200 bg-black text-white py-16">
      <Container>
        <p className="mb-12 text-neutral-400 max-w-3xl">
          Whether you want to make a new project or talk about high performance engineering, we’re
          ready to talk!
        </p>

        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-lg font-medium mb-4">Address</h4>
            <p className="text-neutral-400">
              Lviv, Lviv oblast
              <br />
              Ukraine
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Email</h4>
            <a href="mailto:info@incube.studio" className="text-neutral-400 hover:text-white transition">
              info@incube.studio
            </a>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Main menu</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contacts" className="hover:text-white">Contacts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Social</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="https://clutch.co" target="_blank" className="hover:text-white">Clutch</a></li>
              <li><a href="https://upwork.com" target="_blank" className="hover:text-white">Upwork</a></li>
              <li><a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} InCube Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

/* ===================== Floating Button (Scroll To Top) ===================== */
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
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
