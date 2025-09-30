'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';

/* ===================== Секції для меню (Apex) ===================== */
const sections = [
  { id: 'overview',                 label: 'Overview' },
  { id: 'user-personas',            label: 'User Personas' },
  { id: 'information-architecture', label: 'Information Architecture' },
  { id: 'typography',               label: 'Typography' },
  { id: 'color-system',             label: 'Color System' },
  { id: 'roofing',                  label: 'Roofing' },
  { id: 'calculators',              label: 'Calculators' },
  { id: 'plans',                    label: 'Plans' },
  { id: 'project-creation',         label: 'Project Creation' },
  { id: 'monetization',             label: 'Monetization' },
  { id: 'web-app-screens',          label: 'Web app screens' },
  { id: 'team-creation',            label: 'Team Creation' },
] as const;

type SectionId = (typeof sections)[number]['id'];

export default function ApexCaseStudy() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const startRef = useRef<HTMLDivElement | null>(null);
  const endRef   = useRef<HTMLDivElement | null>(null);

  /* ---------- Active section ---------- */
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

  /* ---------- Show/hide menu ---------- */
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

      <main className="w-full bg-white">
        <section className="px-4 sm:px-8 lg:px-[120px]">
          {/* grid: ліва колонка + меню, відстань 40px (меню лише з lg) */}
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_352px] gap-8 lg:gap-[40px] items-start">
            {/* LEFT CONTENT */}
            <div className="min-w-0">
              {/* === OVERVIEW === */}
              <section id="overview" className="mb-16 md:mb-20 lg:mb-[120px]">
                <div className="bg-[#F4F5F5] rounded-[16px] px-5 sm:px-8 md:px-10 py-6 md:py-7">
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[13px] sm:text-[14px] md:text-[15px] text-[#909090] mb-4">
                    <span>9 min reading</span>
                    <span>May 20, 2025</span>
                  </div>
                  <h2 className="text-[18px] md:text-[20px] font-semibold mb-4 text-[#000000]">Overview</h2>
                  <p className="text-[15px] md:text-[16px] text-[#1a1a1a] mb-6">
                    As Apex conceived their pioneering solution, they realized the importance
                    of a design partner to realize their vision with engaging interfaces
                    and seamless user experiences.
                  </p>
                  <p className="text-[15px] md:text-[16px] text-[#1a1a1a] mb-8">
                    InCube Studio embarked on an extensive discovery phase, collaborating
                    closely with Apex to comprehend their target audience, goals, and
                    distinctive value proposition. In partnership, we delved into design
                    concepts and pinpointed key functionalities necessary for rapid and
                    precise access to address-specific enforced roofing codes compatible
                    with both mobile and desktop devices.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[12px] md:text-[13px] text-[#8A8A8A]">
                    <div>
                      Location
                      <p className="text-[15px] md:text-[16px] font-medium text-black mt-1">New York</p>
                    </div>
                    <div>
                      Duration
                      <p className="text-[15px] md:text-[16px] font-medium text-black mt-1">1 year</p>
                    </div>
                    <div>
                      Industry
                      <p className="text-[15px] md:text-[16px] font-medium text-black mt-1">Infrastructure</p>
                    </div>
                    <div>
                      What was done
                      <p className="text-[15px] md:text-[16px] font-medium text-black mt-1">UI/UX Design</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* === USER PERSONAS === */}
              <section id="user-personas" className="mb-16 md:mb-20 lg:mb-[120px] scroll-mt-[120px]">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-3 sm:mb-2 text-[#000000]">User Personas</h2>
                <p className="text-[15px] sm:text-[16px] text-neutral-600 mb-6">
                  We’ve developed comprehensive user personas to ensure our app
                  caters to a diverse range of construction industry professionals.
                </p>
                <Image
                  src="/projects/apex/personas.png"
                  alt="Apex User Personas"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </section>

              {/* === INFORMATION ARCHITECTURE === */}
              <section id="information-architecture" className="mb-16 md:mb-20 lg:mb-[120px] scroll-mt-[120px]">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-4 text-[#000000]">Information Architecture</h2>
                <p className="text-[15px] sm:text-[16px] text-neutral-600 mb-6">
                  The structure of a mobile application allows users to understand
                  where the necessary information is located.
                </p>
                <Image
                  src="/projects/apex/ia.png"
                  alt="Apex Information Architecture"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </section>

              {/* === TYPOGRAPHY === */}
              <section id="typography" className="mb-16 md:mb-20 lg:mb-[120px] scroll-mt-[120px]">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-4 text-[#000000]">Set of Fonts</h2>
                <p className="text-[15px] sm:text-[16px] text-neutral-600 mb-6">
                  We have chosen one of the most readable and modern fonts
                  to give users accessibility and maximum comfort of interaction.
                </p>
                <Image
                  src="/projects/apex/typography.png"
                  alt="Apex Typography"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </section>

              {/* === COLOR SYSTEM === */}
              <section id="color-system" className="mb-16 md:mb-20 lg:mb-[120px] scroll-mt-[120px]">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-4 text-[#000000]">Color System</h2>
                <p className="text-[15px] sm:text-[16px] text-neutral-600 mb-6">
                  The vibrant green hue has long been a signature of our brand.
                  We rejuvenated this iconic color, meticulously crafting a
                  harmonious spectrum of shades and gradients.
                </p>
                <Image
                  src="/projects/apex/colors.png"
                  alt="Apex Color System"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </section>

              {/* === ROOFING (image only) === */}
              <section id="roofing" className="mb-16 md:mb-20 lg:mb-[120px] scroll-mt-[120px]">
                <Image
                  src="/projects/apex/roofing.png"
                  alt="Apex Roofing"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </section>

              {/* === CALCULATORS === */}
              <SectionShell
                id="calculators"
                title="Calculators"
                intro="Our roofing calculators streamline project planning, helping you
                       determine materials, costs, ventilation needs, and waste reduction."
              >
                <Image
                  src="/projects/apex/calculators.png"
                  alt="Apex Calculators"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </SectionShell>

              {/* === PLANS === */}
              <SectionShell
                id="plans"
                title="Plans"
                intro="Apex offers a wide range of plans designed to fit your organization.
                       Keep things optimized for one state, or expand your solutions nationally."
              >
                <Image
                  src="/projects/apex/plans.png"
                  alt="Apex Plans"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </SectionShell>

              {/* === PROJECT CREATION === */}
              <SectionShell
                id="project-creation"
                title="Project Creation"
                intro="Craft projects according to your requirements, whether it's
                       for individual tasks or comprehensive organization-wide solutions."
              >
                <Image
                  src="/projects/apex/project-creation.png"
                  alt="Apex Project Creation"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </SectionShell>

              {/* === MONETIZATION === */}
              <SectionShell
                id="monetization"
                title="Monetization"
                intro="Apex offers a range of plans to suit your needs. Start with a free plan,
                       or unlock advanced features and more projects with a pro plan
                       as your requirements grow."
              >
                <Image
                  src="/projects/apex/monetization.png"
                  alt="Apex Monetization"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </SectionShell>

              {/* === WEB APP SCREENS (image only) === */}
              <section id="web-app-screens" className="mb-16 md:mb-20 lg:mb-[120px] scroll-mt-[120px]">
                <Image
                  src="/projects/apex/web-screens.png"
                  alt="Apex Web App Screens"
                  width={1200}
                  height={620}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </section>

              {/* === TEAM CREATION === */}
              <SectionShell
                id="team-creation"
                title="Team Creation"
                intro="Team creation functionality enables users to establish and manage groups.
                       Users can create teams, invite members, as well as define roles and permissions."
              >
                <Image
                  src="/projects/apex/team.png"
                  alt="Apex Team Creation"
                  width={1200}
                  height={520}
                  className="w-full h-auto rounded-lg"
                  sizes="(min-width:1024px) 800px, 100vw"
                />
              </SectionShell>
            </div>

            {/* RIGHT MENU — ховаємо на мобайлі, показуємо з lg */}
            <aside
              className={`hidden lg:block w-[352px] sticky top-20 self-start transition-opacity duration-300 ${
                showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-[#F4F5F5] rounded-[12px] shadow-[0_12px_40px_0_rgba(0,0,0,0.06)] p-5">
                <div className="flex justify-between items-center text-[16px] font-medium mb-2">
                  <span className="ml-[20px] text-[#000000]">Apex</span>
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

/* ===================== Shell для секцій ===================== */
function SectionShell({
  id,
  title,
  intro,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="mb-16 md:mb-20 lg:mb-[120px] scroll-mt-[120px]">
      {eyebrow && <p className="text-[12px] sm:text-[13px] text-[#808080] mb-1 uppercase">{eyebrow}</p>}
      <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-3 sm:mb-4 text-[#000000]">{title}</h2>
      {intro && <p className="text-[15px] sm:text-[16px] text-[#4D4D4D] mb-6 sm:mb-10">{intro}</p>}
      {children}
    </section>
  );
}

/* ===================== Hero ===================== */
function Hero() {
  return (
    <section
      id="hero"
      className="bg-white px-4 sm:px-8 lg:px-[120px] pt-0 pb-16 sm:pb-24 lg:pb-32 scroll-mt-[120px] border-t border-white"
    >
      <nav className="text-neutral-400 text-[13px] sm:text-[14px] mb-6 sm:mb-8 mt-[96px] sm:mt-[110px] lg:mt-[120px]">
        <a href="/" className="hover:text-black transition-colors">Home</a>
        <span className="mx-2">/</span>
        <a href="/portfolio" className="hover:text-black transition-colors">Portfolio</a>
        <span className="mx-2">/</span>
        <span className="text-black">Apex</span>
      </nav>
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <img
            src="/projects/apex/apex-logo.png"
            alt="Apex Logo"
            className="w-28 sm:w-32 lg:w-32 h-auto mb-6 sm:mb-8"
          />
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#000000] leading-tight">
            The Building Code App
          </h2>
          <p className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed max-w-xl">
            The first-ever application to verify address-specific enforced roofing codes.
            Get fast and accurate building codes from any mobile or desktop device.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-3 mt-6 sm:mt-8">
            <span className="px-4 py-1 rounded-full border border-black text-[14px] sm:text-[16px] text-black">iOS</span>
            <span className="px-4 py-1 rounded-full border border-black text-[14px] sm:text-[16px] text-black">Android</span>
            <span className="px-4 py-1 rounded-full border border-black text-[14px] sm:text-[16px] text-black">Web</span>
          </div>
        </div>
        <div>
          <img
            src="/projects/apex/hero.png"
            alt="Apex App Preview"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
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
    <footer className="border-t border-neutral-200 bg-black text-white py-12 sm:py-16 scroll-mt-[120px]">
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
        <div className="mt-10 sm:mt-12 border-top border-neutral-800 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} InCube Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
