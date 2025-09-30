'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ===================== Налаштування секцій ===================== */
const sections = [
  { id: 'overview',     label: 'Overview' },
  { id: 'architecture', label: 'Information architecture' },
  { id: 'typography',   label: 'Typography' },
  { id: 'colors',       label: 'Color System' },
  { id: 'onboarding',   label: 'Onboarding' },
  { id: 'appscreens',   label: 'App screens' },
  { id: 'interaction',  label: 'Interaction' },
  { id: 'playlist',     label: 'Playlist' },
  { id: 'profile',      label: 'Profile management' },
  { id: 'search',       label: 'Search' },
  { id: 'feed',         label: 'Feed' },
] as const;
type SectionId = (typeof sections)[number]['id'];

/* ===================== Сторінка (ЄДИНИЙ default export) ===================== */
export default function Page() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const startRef = useRef<HTMLDivElement | null>(null);
  const endRef   = useRef<HTMLDivElement | null>(null);

  // Виділення активної секції
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
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

  // Показ/приховування правого меню
  useEffect(() => {
    const recompute = () => {
      if (!startRef.current || !endRef.current) return;
      const startTop = startRef.current.getBoundingClientRect().top;
      const endTop   = endRef.current.getBoundingClientRect().top;
      setShowMenu(startTop <= 600 && endTop > 200);
    };
    recompute();
    const onScroll = () => requestAnimationFrame(recompute);
    const onResize = () => requestAnimationFrame(recompute);
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

      {/* Контент з такими ж боковими відступами, як у Hero */}
      <main className="w-full bg-white">
        <section className="px-[20px] sm:px-[40px] lg:px-[120px]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_352px] gap-[24px] lg:gap-[40px] items-start">
            {/* LEFT CONTENT */}
            <div className="min-w-0">
              <div ref={startRef} />

              {/* === OVERVIEW === */}
              <section id="overview" className="mb-[80px] lg:mb-[120px]">
                <div className="bg-[#F4F5F5] rounded-[12px] px-[20px] sm:px-[28px] lg:px-[40px] py-[24px] sm:py-[28px]">
                  <div className="flex flex-wrap gap-4 sm:gap-6 text-[14px] sm:text-[15px] text-[#909090] mb-4">
                    <span>9 min reading</span>
                    <span>May 20, 2025</span>
                  </div>
                  <h2 className="text-[18px] sm:text-[20px] font-semibold mb-4 text-[#000]">Overview</h2>
                  <p className="text-[16px] text-[#1a1a1a] mb-4">
                    Together, we embarked on a creative journey, meticulously crafting captivating user
                    interfaces and orchestrating seamless user experiences where music transcends boundaries.
                  </p>
                  <p className="text-[16px] text-[#1a1a1a] mb-6">
                    In the rhythm of innovation, our team conducted an immersive evaluation of Sonum&apos;s UI/UX,
                    harmonizing with their aspirations. For enhancement and refinement of a unified design approach.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[12px] sm:text-[13px] text-[#909090]">
                    <div>
                      Location
                      <p className="text-[15px] sm:text-[16px] font-medium text-black">New York market</p>
                    </div>
                    <div>
                      Duration
                      <p className="text-[15px] sm:text-[16px] font-medium text-black">3 month</p>
                    </div>
                    <div>
                      Industry
                      <p className="text-[15px] sm:text-[16px] font-medium text-black">Entertainment</p>
                    </div>
                    <div>
                      What was done
                      <p className="text-[15px] sm:text-[16px] font-medium text-black">UI/UX Redesign</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* === ARCHITECTURE === */}
              <CaseBlock
                id="architecture"
                kicker="UX Process"
                title="Information Architecture"
                text="The structure of a mobile application that allows users to understand where the necessary information is located."
                img="/projects/sonum/ia.png"
              />

              {/* === TYPOGRAPHY === */}
              <CaseBlock
                id="typography"
                title="Typography"
                text="We have chosen one of the most readable and modern fonts on the market."
                img="/projects/sonum/typography.png"
              />

              {/* === COLORS === */}
              <CaseBlock
                id="colors"
                title="Color System"
                text="The vibrant orange hue has long been a signature of our brand."
                img="/projects/sonum/colors.png"
              />

              {/* === ONBOARDING === */}
              <CaseBlock
                id="onboarding"
                title="Onboarding"
                text="Welcome screens collect some information about your music preferences."
                img="/projects/sonum/onboarding.png"
              />

              {/* === APP SCREENS === */}
              <CaseBlock id="appscreens" title="App Screens" img="/projects/sonum/appscreens.png" />

              {/* === INTERACTION === */}
              <CaseBlock
                id="interaction"
                title="Interact with friends"
                text="Share your music preferences, playlists, and favorite tracks with friends."
                img="/projects/sonum/interaction.png"
              />

              {/* === PLAYLIST === */}
              <CaseBlock
                id="playlist"
                title="Create unique playlists"
                text="Personalize your listening experience and discover new music."
                img="/projects/sonum/playlist.png"
              />

              {/* === PROFILE === */}
              <CaseBlock
                id="profile"
                kicker="UX Process"
                title="Profile management"
                text="Manage your personal profile and preferences with ease."
                img="/projects/sonum/profile.png"
              />

              {/* === SEARCH === */}
              <CaseBlock
                id="search"
                kicker="UX Process"
                title="Search tracks effectively"
                text="Quickly find songs, artists, albums, playlists, and podcasts."
                img="/projects/sonum/search.png"
              />

              {/* === FEED === */}
              <CaseBlock
                id="feed"
                title="Optimized Feed"
                text="Experience a curated selection of music tailored to your tastes."
                img="/projects/sonum/feed.png"
              />
            </div>

            {/* RIGHT SIDEBAR — тільки на десктопі */}
            <aside
              className={`hidden lg:block w-[352px] sticky top-20 self-start transition-opacity duration-300 ${
                showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-[#F4F5F5] rounded-[12px] shadow-[0_12px_40px_0_rgba(0,0,0,0.06)] p-5">
                <div className="flex justify-between items-center text-[16px] font-medium mb-2">
                  <span className="ml-[20px] text-[#000]">Sonum</span>
                  <span className="mr-[20px] text-[#000]">{currentIndex}/{sections.length}</span>
                </div>

                <ul className="space-y-2">
                  {sections.map(s => (
                    <li key={s.id}>
                      <Link
                        href={`#${s.id}`}
                        className={`flex justify-between items-center ml-[20px] mr-[40px] text-[16px] transition-colors ${
                          active === s.id ? 'font-medium text-[#000]' : 'text-[#909090]'
                        }`}
                      >
                        {s.label}
                        {active === s.id && <span>✓</span>}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 px-[20px]">
                  <Link
                    href="#get-in-touch"
                    className="block w-full text-center bg-black text-white rounded-full py-3 px-6 text-[16px] font-medium hover:scale-105 transition"
                  >
                    Get in touch
                  </Link>
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

/* ===================== Дрібні підкомпоненти ===================== */
function Hero() {
  return (
    <section
      id="hero"
      className="bg-white px-[20px] sm:px-[40px] lg:px-[120px]
                 pt-[88px] sm:pt-[110px] md:pt-[120px]  /* відступ під fixed-header */
                 pb-20 lg:pb-32 border-t border-white"
    >
      <nav className="text-neutral-500 text-[13px] sm:text-[14px] mb-[24px] sm:mb-[32px] tracking-wide">
        <Link href="/" className="hover:text-black">Home</Link>
        <span className="mx-2 text-neutral-400">/</span>
        <Link href="/portfolio" className="hover:text-black">Portfolio</Link>
        <span className="mx-2 text-neutral-400">/</span>
        <span className="text-black font-medium">Sonum</span>
      </nav>

      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Image src="/portfolio/sonum/sonum-logo.png" alt="Sonum Logo" className="w-10 sm:w-12 h-auto mb-6 sm:mb-8" />
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-black leading-tight">
            Revolutionary Music App
          </h1>
          <p className="mt-5 text-[16px] text-neutral-600 leading-relaxed max-w-md">
            Experience music like never before. Discover something new or keep up with what’s trending.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <span className="px-4 py-1 rounded-full border border-black text-[16px] text-black">iOS</span>
            <span className="px-4 py-1 rounded-full border border-black text-[16px] text-black">Landing page</span>
          </div>
        </div>
        <div>
          <Image
            src="/portfolio/sonum/sonum-hero.png"
            alt="Sonum App Preview"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

function CaseBlock({
  id,
  title,
  text,
  img,
  kicker,
}: {
  id: SectionId;
  title: string;
  img: string;
  text?: string;
  kicker?: string;
}) {
  return (
    <section id={id} className="mb-[80px] lg:mb-[120px]">
      {kicker && <p className="text-[13px] sm:text-[14px] text-[#808080] mb-1 uppercase">{kicker}</p>}
      <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] font-semibold mb-6 text-[#000]">{title}</h2>
      {text && <p className="text-[16px] text-[#4D4D4D] mb-8 lg:mb-10">{text}</p>}
      <Image src={img} alt={title} width={1600} height={900} className="w-full h-auto rounded-lg" />
    </section>
  );
}

function GetInTouch() {
  return (
    <section id="get-in-touch" className="border-t border-neutral-200 py-16 lg:py-20 bg-white px-[20px] sm:px-[40px] lg:px-[120px]">
      <div className="mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 className="text-[44px] sm:text-[64px] lg:text-[80px] leading-tight font-semibold font-['Plus_Jakarta_Sans']">
            Let’s <span className="italic font-extralight">talk</span>
          </h2>
          <p className="mt-6 text-[16px] text-neutral-600 leading-relaxed">
            Whether you’re looking to start a new project or discuss high-performance engineering, we’re prepared to chat!
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
            <input id="privacy" type="checkbox" required className="mt-1.5 h-6 w-6 border border-neutral-400 rounded-sm" />
            <label htmlFor="privacy" className="text-[16px] font-light text-neutral-700 leading-relaxed">
              I consent to InCube Studio Privacy Policy and having this website store my submitted information so they can respond to
            </label>
          </div>
          <button className="inline-flex items-center justify-center rounded-full border border-black bg-white px-8 py-3 text-[16px] font-medium text-black transition hover:scale-105">
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

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-black text-white py-14 lg:py-16">
      <div className="px-[20px] sm:px-[40px] lg:px-[120px]">
        <p className="mb-10 lg:mb-12 text-neutral-400 max-w-3xl">
          Whether you want to make a new project or talk about high performance engineering, we’re ready to talk!
        </p>
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <h4 className="text-lg font-medium mb-4">Address</h4>
            <p className="text-neutral-400">Lviv, Lviv oblast<br />Ukraine</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Email</h4>
            <Link href="mailto:info@incube.studio" className="text-neutral-400 hover:text-white">info@incube.studio</Link>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Main menu</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contacts" className="hover:text-white">Contacts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Social</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="https://clutch.co" target="_blank" className="hover:text-white">Clutch</Link></li>
              <li><Link href="https://upwork.com" target="_blank" className="hover:text-white">Upwork</Link></li>
              <li><Link href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 lg:mt-12 border-t border-neutral-800 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} InCube Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
