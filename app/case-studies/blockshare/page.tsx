'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/* ===================== Секції для меню ===================== */
const sections = [
  { id: 'overview',       label: 'Overview' },
  { id: 'screens',        label: 'Screens' },
  { id: 'typography',     label: 'Typography' },
  { id: 'colors',         label: 'Color System' },
  { id: 'authorization',  label: 'Authorization' },
  { id: 'portfolio',      label: 'Crypto Portfolio' },
  { id: 'airdrop',        label: 'Airdrop System' },
  { id: 'dashboards',     label: 'Smart Dashboards' },
  { id: 'performance',    label: 'Performance Page' },
  { id: 'social',         label: 'Social Media Page' },
] as const;

type SectionId = (typeof sections)[number]['id'];

/* ===================== Сторінка ===================== */
export default function BlockshareCaseStudy() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const startRef = useRef<HTMLDivElement | null>(null);
  const endRef   = useRef<HTMLDivElement | null>(null);

  /* ---------- Active section ---------- */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  /* ---------- Show/hide menu (тільки коли контент у середині сторінки) ---------- */
  useEffect(() => {
    const recompute = () => {
      if (!startRef.current || !endRef.current) return;
      const startTop = startRef.current.getBoundingClientRect().top;
      const endTop   = endRef.current.getBoundingClientRect().top;
      const shouldShow = startTop <= 600 && endTop > 200;
      setShowMenu(shouldShow);
    };

    const onScroll = () => requestAnimationFrame(recompute);
    const onResize = () => requestAnimationFrame(recompute);

    recompute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const currentIndex = active ? sections.findIndex(s => s.id === active) + 1 : 1;

  return (
    <>
      <Hero />

      <div ref={startRef} />

      {/* ГОЛОВНИЙ КОНТЕНТ */}
      <main className="w-full bg-white">
        <section className="px-4 sm:px-8 lg:px-[120px]">
          {/* grid: ліва колонка + меню (меню з'являється з lg) */}
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_352px] gap-8 lg:gap-[40px] items-start">
            {/* LEFT CONTENT */}
            <div className="min-w-0">
              {/* === OVERVIEW === */}
              <section id="overview" className="mb-16 md:mb-20 lg:mb-[120px]">
                <div className="bg-[#F4F5F5] rounded-[12px] px-5 sm:px-8 md:px-10 py-6 md:py-7">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[14px] md:text-[15px] text-[#909090] mb-4">
                    <span>9 min reading</span>
                    <span>May 20, 2025</span>
                  </div>
                  <h2 className="text-[18px] md:text-[20px] font-semibold mb-4 text-[#000000]">Overview</h2>
                  <p className="text-[15px] md:text-[16px] text-[#1a1a1a] mb-4">
                    BlockShare, a crypto trading tracker, sought our help to improve their platform’s UX and UI.
                    Despite being fully operational, user feedback pointed to a cluttered interface that reduced
                    traffic and lead quality.
                  </p>
                  <p className="text-[15px] md:text-[16px] text-[#1a1a1a] mb-6">
                    We analyzed the platform, restructured the data presentation, and implemented a more intuitive
                    design. This resulted in a clearer, more cohesive UI that enhanced user engagement and improved
                    overall performance.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[12px] md:text-[13px] text-[#909090]">
                    <div>
                      Location
                      <p className="text-[15px] md:text-[16px] font-medium text-black">US Market</p>
                    </div>
                    <div>
                      Duration
                      <p className="text-[15px] md:text-[16px] font-medium text-black">3 months</p>
                    </div>
                    <div>
                      Industry
                      <p className="text-[15px] md:text-[16px] font-medium text-black">Fintech</p>
                    </div>
                    <div>
                      What was done
                      <p className="text-[15px] md:text-[16px] font-medium text-black">UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* === SCREENS === */}
              <Figure id="screens" title="" src="/projects/blockshare/screens.png" className="mb-16 md:mb-20 lg:mb-[120px]" />

              {/* === TYPOGRAPHY === */}
              <CaseBlock
                id="typography"
                kicker="UI Process"
                title="Set of Fonts"
                text="We have chosen one of the most readable and modern fonts on the market to give users accessibility and maximum comfort of interaction."
                img="/projects/blockshare/typography.png"
              />

              {/* === COLOR SYSTEM === */}
              <CaseBlock
                id="colors"
                kicker="UI Process"
                title="Color System"
                text="Purple, symbolizing crypto and blockchain, was the core of the brand. We refreshed it and crafted complementary shades to enhance the visual identity."
                img="/projects/blockshare/colors.png"
              />

              {/* === AUTHORIZATION === */}
              <CaseBlock
                id="authorization"
                kicker="UI Process"
                title="Authorization"
                text="We implemented a streamlined authorization process that allows users to quickly learn about the system's functions and capabilities."
                img="/projects/blockshare/authorization.png"
                imgHeight={800}
              />

              {/* === CRYPTO PORTFOLIO === */}
              <CaseBlock
                id="portfolio"
                kicker="UI Process"
                title="Crypto Portfolio Dashboard"
                text="We developed an intuitive Crypto Portfolio Dashboard that enables users to manage and track their digital assets effortlessly. With real-time data and dynamic charts, users can easily monitor performance and make informed investment decisions."
                img="/projects/blockshare/portfolio.png"
              />

              {/* === AIRDROP SYSTEM === */}
              <CaseBlock
                id="airdrop"
                kicker="UI Process"
                title="Airdrop System"
                text="A multifunctional airdrops system has been developed for customers to manually or automatically load stocks using a file."
                img="/projects/blockshare/airdrop.png"
              />

              {/* === SMART DASHBOARDS === */}
              <CaseBlock
                id="dashboards"
                kicker="UI Process"
                title="Smart Dashboards"
                text="We designed powerful dashboards that transform complex blockchain data into clear, actionable insights."
                img="/projects/blockshare/dashboards.png"
              />

              {/* === PERFORMANCE PAGE === */}
              <CaseBlock
                id="performance"
                kicker="UI Process"
                title="Performance Page"
                text="The Performance Page has been improved to offer users visualizations of transaction dynamics and history for better analysis."
                img="/projects/blockshare/performance.png"
              />

              {/* === SOCIAL MEDIA PAGE === */}
              <CaseBlock
                id="social"
                kicker="UI Process"
                title="Social Media Page"
                text="The Social Media Page has been reimagined to foster user interaction, featuring an engaging layout that highlights dynamic content and encourages community participation."
                img="/projects/blockshare/social.png"
              />
            </div>

            {/* RIGHT MENU — тільки з lg */}
            <aside
              className={`hidden lg:block w-[352px] sticky top-20 self-start transition-opacity duration-300 ${
                showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-[#F4F5F5] rounded-[12px] shadow-[0_12px_40px_0_rgba(0,0,0,0.06)] p-5">
                <div className="flex justify-between items-center text-[16px] font-medium mb-2">
                  <span className="ml-[20px] text-[#000000]">Blockshare</span>
                  <span className="mr-[20px] text-[#000000]">{currentIndex}/{sections.length}</span>
                </div>
                <ul className="space-y-2">
                  {sections.map(s => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        id={`menu-${s.id}`}
                        className={`flex justify-between items-center ml-[20px] mr-[40px] text-[16px] transition-colors ${
                          active === s.id ? 'font-medium text-[#000000]' : 'text-[#909090]'
                        }`}
                      >
                        {s.label}
                        {active === s.id && <span>✓</span>}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 px-[20px]">
                  <a
                    href="#get-in-touch"
                    className="block w-full text-center bg-black text-white rounded-full py-3 px-6 text-[16px] font-medium hover:scale-105 transition"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <div ref={endRef} />

      <GetInTouch />
      <Footer />
    </>
  );
}

/* ===================== Hero ===================== */
function Hero() {
  return (
    <section
      id="hero"
      className="bg-white px-4 sm:px-8 lg:px-[120px] pt-0 pb-16 sm:pb-24 lg:pb-32 scroll-mt-[120px] border-t border-white"
    >
      <nav className="text-neutral-500 text-[13px] sm:text-[14px] mb-6 sm:mb-8 tracking-wide mt-[96px] sm:mt-[110px] lg:mt-[120px]">
        <a href="/" className="hover:text-black transition-colors">Home</a>
        <span className="mx-2 text-neutral-400">/</span>
        <a href="/portfolio" className="hover:text-black transition-colors">Portfolio</a>
        <span className="mx-2 text-neutral-400">/</span>
        <span className="text-black font-medium">Blockshare</span>
      </nav>

      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <img
            src="/projects/blockshare/blockshare-logo.png"
            alt="Blockshare Logo"
            className="w-28 sm:w-32 lg:w-40 h-auto mb-6 sm:mb-8"
          />
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#000000] leading-tight">
            Smart Tracker for Crypto and DeFi Portfolio
          </h2>
          <p className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed max-w-md">
            Start managing your crypto portfolio like a pro.
          </p>
          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
            <span className="px-4 py-1 rounded-full border border-black text-[14px] sm:text-[16px] text-black">
              Web application
            </span>
          </div>
        </div>
        <div>
          <img
            src="/projects/blockshare/blockshare-hero.png"
            alt="Blockshare App Preview"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

/* ===================== Універсальний блок з картинкою ===================== */
function CaseBlock({
  id,
  title,
  text,
  img,
  kicker,
  imgHeight = 600,
}: {
  id: SectionId;
  title: string;
  img: string;
  text?: string;
  kicker?: string;
  imgHeight?: number;
}) {
  return (
    <section id={id} className="mb-16 md:mb-20 lg:mb-[120px]">
      {kicker && <p className="text-[12px] sm:text-[13px] text-[#808080] mb-1 uppercase">{kicker}</p>}
      <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-4 sm:mb-6 text-[#000000]">{title}</h2>
      {text && <p className="text-[15px] sm:text-[16px] text-[#4D4D4D] mb-6 sm:mb-10">{text}</p>}
      <Image
        src={img}
        alt={title}
        width={1200}
        height={imgHeight}
        className="w-full h-auto rounded-lg"
        sizes="(min-width: 1024px) 800px, 100vw"
        priority={id === 'screens'}
      />
    </section>
  );
}

function Figure({
  id,
  title,
  src,
  className = '',
}: {
  id: SectionId;
  title?: string;
  src: string;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      {title ? (
        <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-4 sm:mb-6 text-[#000000]">
          {title}
        </h2>
      ) : null}
      <Image
        src={src}
        alt={title ?? id}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg"
        sizes="(min-width: 1024px) 800px, 100vw"
        priority
      />
    </section>
  );
}

/* ===================== Get In Touch ===================== */
function GetInTouch() {
  return (
    <section
      id="get-in-touch"
      className="border-t border-neutral-200 py-16 sm:py-20 bg-white px-4 sm:px-8 lg:px-[120px]"
    >
      <div className="mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 max-w-[1440px]">
        <div>
          <h2 className="text-[44px] sm:text-[64px] lg:text-[80px] leading-tight font-semibold font-['Plus_Jakarta_Sans']">
            Let’s <span className="italic font-extralight">talk</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] font-normal text-neutral-600 leading-relaxed">
            Whether you’re looking to start a new project or discuss
            high-performance engineering, we’re prepared to chat!
          </p>
        </div>

        <form
          action="https://formspree.io/f/mpwjkrpd"
          method="POST"
          target="_blank"
          rel="noopener noreferrer"
          className="space-y-6"
        >
          <Field label="Name *" id="name" type="text" required />
          <Field label="Email *" id="email" type="email" required />
          <Textarea label="Message" id="message" rows={4} />
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              type="checkbox"
              required
              className="mt-1.5 h-5 w-5 sm:h-6 sm:w-6 border border-neutral-400 rounded-sm text-black focus:ring-black"
            />
            <label
              htmlFor="privacy"
              className="text-[15px] sm:text-[16px] font-light text-neutral-700 leading-relaxed"
            >
              I consent to InCube Studio Privacy Policy and having this website
              store my submitted information so they can respond to
            </label>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full border border-black bg-white px-6 sm:px-8 py-3 text-[15px] sm:text-[16px] font-medium text-black transition hover:scale-105"
          >
            Send message <span className="ml-2">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field(props: { label: string; id: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-neutral-700">
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        required={props.required}
        className="mt-2 block w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:outline-none focus:border-black"
      />
    </div>
  );
}

function Textarea(props: { label: string; id: string; rows?: number }) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-neutral-700">
        {props.label}
      </label>
      <textarea
        id={props.id}
        name={props.id}
        rows={props.rows ?? 4}
        className="mt-2 block w-full border-b border-neutral-400 bg-transparent py-2 text-neutral-900 focus:outline-none focus:border-black"
      />
    </div>
  );
}

/* ===================== Footer ===================== */
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-black text-white py-12 sm:py-16">
      <div className="px-4 sm:px-8 lg:pl-[120px] lg:pr-0">
        <p className="mb-10 sm:mb-12 text-neutral-400 max-w-3xl">
          Whether you want to make a new project or talk about high performance engineering,
          we’re ready to talk!
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h4 className="text-lg font-medium mb-4">Address</h4>
            <p className="text-neutral-400">Lviv, Lviv oblast<br />Ukraine</p>
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
        <div className="mt-10 sm:mt-12 border-t border-neutral-800 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} InCube Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
