"use client"; 

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../../components/Container"; // ← за потреби змінити
import { useRouter } from "next/navigation";
import Link from "next/link";

/* ===================== What We Build (FAQ-style) ===================== */
function WhatWeBuild() {
  const items = [
    { q: "iOS & Android Apps", a: "Native or cross-platform apps with smooth performance on any device." },
    { q: "MVPs for Startups", a: "Rapid development of lean, functional apps to validate ideas and attract investors." },
    { q: "Productivity & Business Apps", a: "Internal tools that automate workflows and boost productivity." },
    { q: <>Consumer-Facing<br />Apps</>, a: "Engaging apps with flawless UX for customers in any industry." },
    { q: <>API-Driven &<br />Cloud-Connected Apps</>, a: "Robust backend systems, API integrations, and cloud infrastructure." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-neutral-200">
      {items.map((it, index) => {
        const open = openIndex === index;
        return (
          <div key={index} className="py-6">
            <button
              onClick={() => setOpenIndex(open ? null : index)}
              className="w-full flex justify-between items-center text-left cursor-pointer group"
              aria-expanded={open}
              aria-controls={`wwb-item-${index}`}
            >
              <span className="text-[28px] sm:text-[34px] md:text-[38px] font-normal leading-snug">
                {it.q}
              </span>

              {/* фіксований розмір іконки, не тягнеться від шрифтів */}
              <span className="relative w-6 h-6 flex-shrink-0" aria-hidden="true">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[2px] bg-black rounded-full" />
                <span
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[16px] w-[2px] bg-black rounded-full transition-transform duration-300 ${open ? "scale-0" : "scale-100"}`}
                />
              </span>
            </button>

            <div
              id={`wwb-item-${index}`}
              className={`transition-all duration-500 ease-in-out transform origin-top overflow-hidden ${open ? "max-h-40 opacity-100 scale-y-100 mt-4" : "max-h-0 opacity-0 scale-y-95"}`}
            >
              <p className="text-[16px] text-neutral-600 leading-relaxed">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===================== What We Do ===================== */
function WhatWeDo() {
  return (
    <section className="border-t border-neutral-200 py-16 md:py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 items-start gap-10 lg:gap-24">
          <div className="shrink-0 flex justify-center md:justify-start">
            <Image
              src="/mobile-development/faq.png"
              alt="Mobile App Example"
              width={614}
              height={354}
              className="rounded-xl w-full h-auto max-w-[614px]"
              priority
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-[40px] sm:text-[52px] md:text-[64px] leading-tight mb-8 md:mb-12">
              <span className="font-medium">What We </span>
              <span className="italic font-extralight">Build</span>
            </h2>
            <WhatWeBuild />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===================== Works Section ===================== */
function Works() {
  const router = useRouter();
  const works = [
    {
      title: "Sonum",
      desc: "While Sonum had the vision, they sought a skilled design partner to transform their concept into reality.",
      img: "/web-development/sonum-card.png",
      href: "/case-studies/sonum",
    },
    {
      title: "APEX",
      desc: "We enhanced BlockShare's platform by optimizing the user experience and improving the UI, ensuring complex data was visualized in a clear, structured, and user-friendly manner.",
      img: "/web-development/apex-card.png",
      href: "/case-studies/apex",
    },
    {
      title: "Blockshare",
      desc: "We enhanced BlockShare's platform by optimizing the user experience and improving the UI, ensuring complex data was visualized in a clear, structured, and user-friendly manner.",
      img: "/web-development/blockshare-card.png",
      href: "/case-studies/blockshare",
    },
  ];

  return (
    <section className="border-t border-neutral-200 py-16 md:py-20 bg-white">
      <Container>
        <div className="mb-12 md:mb-20">
          <h2 className="text-[40px] sm:text-[52px] md:text-[60px] leading-tight text-left">
            <span className="italic font-extralight block">These works deserve</span>
            <span className="font-normal block">the highest awards</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-lg h-full group">
              <div
                className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] rounded-[10px] overflow-hidden cursor-pointer"
                onClick={() => router.push(work.href)}
              >
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={idx === 0}
                />
              </div>

              <div className="flex flex-col flex-grow pt-6 pb-6">
                <h3 className="text-[20px] font-semibold mb-3">{work.title}</h3>
                <p className="text-[16px] text-neutral-700 mb-6 leading-relaxed">{work.desc}</p>
                <div className="mt-auto">
                  <Link
                    href={work.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black text-[16px] font-medium text-black cursor-pointer h-[48px] px-[20px] transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src="/web-development/incube-logo.svg"
                      alt="Incube Logo"
                      width={20}
                      height={20}
                      className="inline-block"
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

/* ===================== Fix & Better ===================== */
function FixAndBetter() {
  const troubles = [
    "Users expect mobile-first experiences, but your product is still stuck on desktop.",
    "Engagement is low — installs happen, but retention, usage, or monetization disappoints.",
    "UX feels clunky; features go unnoticed, leading to wasted dev hours and frustration.",
    "Scaling feels risky — hiring an in-house mobile team is expensive and slow.",
    "Bugs, crashes, and poor performance damage your reputation.",
  ];

  const solutions = [
    "8+ years of experience in building mobile-first experiences for both startups and enterprises.",
    "We speak the language of both tech teams and business leaders, keeping development smooth and aligned.",
    "Beautiful, intuitive UI/UX that guides users effortlessly and boosts engagement.",
    "Cross-platform development (React Native, Flutter) or native iOS/Android – whichever fits your needs.",
    "Scalable architecture, cloud infrastructure, and robust APIs – so your product can grow without limits.",
    "Ongoing support, feature updates, and maintenance — without the headache of an in-house team.",
  ];

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  useEffect(() => {
    solutions.forEach((_, i) => {
      setTimeout(() => setVisibleIndexes((prev) => [...prev, i]), i * 250);
    });
  }, []);

  return (
    <section className="border-t border-neutral-200 py-16 md:py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="max-w-[560px]">
            <h3 className="text-[26px] sm:text-[28px] md:text-[31px] font-medium">
              Let’s fix what <br />
              <span className="italic font-light">troubles you…</span>
            </h3>
            <ul className="mt-5 space-y-4">
              {troubles.map((t, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-[150%]">
                  <span className="text-black text-lg">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <Image src="/mobile-development/arrow-icon.png" alt="Arrow Icon" width={135} height={140} />
            </div>

            <div className="bg-black text-white rounded-[16px] p-6 sm:p-7 md:p-9 max-w-[560px]">
              <h3 className="text-[26px] sm:text-[28px] md:text-[31px] font-medium">
                Here’s how we <br />
                <span className="italic font-light">make it better…</span>
              </h3>
              <ul className="mt-5 space-y-4">
                {solutions.map((s, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 text-[14px] leading-[150%] transition-all duration-500 ease-out ${visibleIndexes.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                  >
                    <span className="text-white text-lg">＋</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===================== Process Section ===================== */
function Process() {
  const steps = [
    { num: "1", title: "Discovery", desc: "We start by understanding your goals, target audience, and vision." },
    { num: "2", title: "Design", desc: "Wireframes and clickable prototypes that match your MVP goals." },
    { num: "3", title: "Development", desc: "Agile, scalable front-end & backend coding with best practices." },
    { num: "4", title: "Launch", desc: "Deploy a functional MVP ready for real users or investor demos." },
    { num: "5", title: "Iterate & Grow", desc: "Collect feedback, improve features, and scale with confidence." },
  ];

  return (
    <section className="border-t border-neutral-200 py-16 md:py-20 bg-white">
      <Container>
        <div className="mb-12 md:mb-20">
          <h2 className="text-[40px] sm:text-[52px] md:text-[60px] leading-tight text-left">
            <span className="italic font-extralight block">Clear processes,</span>
            <span className="font-normal block">Reliable delivery</span>
          </h2>
        </div>

        <div
          className="overflow-x-auto pb-4
                     [&::-webkit-scrollbar]:h-2
                     [&::-webkit-scrollbar-thumb]:bg-black
                     [&::-webkit-scrollbar-thumb]:rounded-lg
                     [&::-webkit-scrollbar-track]:bg-transparent"
        >
          <div className="flex gap-6 min-w-max">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-shrink-0 bg-white rounded-lg p-6 w-[280px] sm:w-[300px] md:w-[320px] shadow-sm">
                <div className="text-[28px] sm:text-[30px] md:text-[32px] font-semibold mb-4">{step.num}</div>
                <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-semibold mb-3">{step.title}</h3>
                <p className="text-[16px] font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===================== Banner (full-bleed) ===================== */
function Banner() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="h-[340px] sm:h-[380px] md:h-[434px] flex items-center justify-center text-center">
        {/* Приховано на мобільних, показано від sm і вище */}
        <Image
          src="/mobile-development/arrow-left.png"
          alt="Arrow Left"
          width={220}
          height={224}
          className="hidden sm:block absolute bottom-0 left-0"
        />
        <Image
          src="/mobile-development/arrow-right.png"
          alt="Arrow Right"
          width={220}
          height={224}
          className="hidden sm:block absolute top-0 right-0"
        />

        <Container>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[40px] sm:text-[52px] md:text-[60px] leading-tight mb-6">
              <span className="font-medium">Ready to </span>
              <span className="italic">Build an App</span>
              <br />
              <span className="font-medium">That Users Love?</span>
            </h2>

            <Link
              href="#get-in-touch"
              className="bg-white text-black text-[16px] font-medium rounded-[24px] px-[24px] py-2 hover:scale-105 transition-transform"
            >
              Start Your Project
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ===================== Get In Touch ===================== */
function GetInTouch() {
  return (
    <section id="get-in-touch" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[48px] sm:text-[64px] md:text-[80px] leading-tight font-semibold font-['Plus_Jakarta_Sans']">
              Let’s <span className="italic font-extralight">talk</span>
            </h2>
            <p className="mt-6 text-[16px] font-normal text-neutral-600 leading-relaxed">
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

            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                required
                className="mt-1.5 h-6 w-6 border border-neutral-400 rounded-sm text-black focus:ring-black"
              />
              <label htmlFor="privacy" className="text-[16px] font-light text-neutral-700 leading-relaxed">
                I consent to InCube Studio Privacy Policy and having this website store my submitted
                information so they can respond to
              </label>
            </div>

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
    <footer className="border-t border-neutral-200 bg-black text-white py-[80px]">
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
            <Link href="mailto:info@incube.studio" className="text-neutral-400 hover:text-white">
              info@incube.studio
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Main menu</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contacts" className="hover:text-white">Contacts</Link></li>
            </ul>
          </div>

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
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

/* ===================== PAGE ===================== */
export default function Page() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Header секції: від контейнера горизонтальні відступи 20/80/120 */}
      <section className="border-0 pt-[100px] sm:pt-[110px] md:pt-[120px] pb-12 md:pb-16">
        <Container>
          <nav className="text-neutral-500 text-[13px] mb-6 sm:mb-8">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-black">Mobile App Development</span>
          </nav>

          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] leading-none mb-6 md:mb-8">
            <span className="font-semibold">Mobile App </span>
            <span className="italic font-light">Development</span>
          </h1>

          <p className="text-[16px] max-w-3xl leading-relaxed text-neutral-700">
            We design and develop mobile apps that solve real problems, delight users, and scale as your business grows.
            Whether it’s a startup MVP, a consumer app, or an internal product — we deliver sleek design paired with robust, future-proof code.
          </p>
        </Container>
      </section>

      <WhatWeDo />
      <Works />
      <FixAndBetter />
      <Process />
      <Banner />
      <GetInTouch />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
