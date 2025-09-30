'use client';
import Link from "next/link";
import Container from "./components/Container";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Services />
      <Team />
      <Projects />
      <Founders />
      <FAQ />
      <GetInTouch />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

/* ===================== Hero ===================== */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-white text-black border-b border-neutral-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Ліва колонка */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-[93px] leading-none">
              <span className="font-semibold">InCube</span>{" "}
              <span className="font-extralight">Studio</span>
            </h1>

            <p className="mt-6 text-3xl sm:text-4xl lg:text-[60px] font-normal tracking-wide">
              WE BRING YOUR
            </p>
            <p className="text-3xl sm:text-4xl lg:text-[60px] font-light italic leading-tight">
              VISIONS TO LIFE
            </p>
          </div>

          {/* Права колонка */}
          <div className="flex flex-col items-start md:items-start">
            <div className="flex items-baseline">
              <a
                href="#get-in-touch"
                className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-10 py-4 
                           text-black text-[16px] font-medium transition hover:bg-black hover:text-white cursor-pointer"
              >
                Start Your Project
                <span className="text-lg">→</span>
              </a>
            </div>

            <p className="mt-10 text-[16px] font-normal text-neutral-600 max-w-md leading-relaxed">
              We create amazing UI/UX designs <br />
              for mobile and web platforms, <br />
              along with expert web development services 🚀
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===================== Services ===================== */
function Services() {
  const services = [
    { name: "Web Development", link: "/services/web-development" },
    { name: "Mobile App Development", link: "/services/mobile-app-development" },
    { name: "Mobile Web Development", link: "/services/mobile-web-development" },
    { name: "MVP Development", link: "/services/mvp-development" },
    { name: "UI/UX Design", link: "/services/ui-ux-design" },
  ];

  return (
    <section id="services" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <h2 className="text-[60px]">
          <span className="font-light italic mr-4">Our</span>
          <span className="font-medium not-italic">Services</span>
        </h2>

        <ul className="mt-8 space-y-8 w-full md:w-3/4 ml-auto">
          {services.map((service, index) => (
            <li key={service.name}>
              <Link
                href={service.link}
                className="flex items-center justify-between border-b border-[#7B7C88] py-2 cursor-pointer group transition-transform duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[20px] font-semibold text-neutral-700">
                    .{String(index + 1).padStart(2, "0")}/
                  </span>
                  <span className="text-[40px] font-semibold leading-tight">
                    {service.name}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ===================== Team ===================== */
function Team() {
  return (
    <section id="team" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Ліва колонка — картинка */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/team.png"
              alt="The Team"
              className="w-full h-auto rounded-lg object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Права колонка — текст */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-[80px] leading-tight font-medium">
              The <span className="font-extralight italic">team</span>{" "}
              you can count on
            </h2>

            <p className="text-[16px] font-normal text-neutral-700 leading-relaxed pl-0 sm:pl-8">
              We craft visually compelling designs that elevate your brand and engage your audience.
              <br /><br />
              Our team works with creativity, precision, and a flair for the extraordinary. 
              We’re not a big agency, but we live by one principle: deliver impactful designs that matter. 
              Clients come to us for UI/UX, graphic design, and Webflow development, 
              but they stay because they find a dedicated partner who is as invested in their brand’s success as they are.
            </p>

            <div className="pl-0 sm:pl-8">
              <a
                href="#founders"
                className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-6 py-3 
                           text-[16px] font-medium text-black transition hover:scale-105 cursor-pointer group"
              >
                Explore more
                <img
                  src="/arrow-down-right.svg"
                  alt="Arrow Down"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

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
    },
    {
      title: "BlockShare – Smart Tracker for Crypto and DeFi",
      description:
        "We enhanced BlockShare’s platform by optimizing the user experience and improving the UI, ensuring complex data was visualized in a clear, structured, and user-friendly manner.",
      tags: ["Platform", "Website", "Crypto"],
      image: "/blockshare.png",
      link: "/case-studies/blockshare",
    },
    {
      title: "Apex – The Building Code App",
      description:
        "Reshaping the construction industry’s engagement with roofing codes through innovation.",
      tags: ["iOS App", "Android App", "Web App"],
      image: "/apex.png",
      link: "/case-studies/apex",
    },
  ];

  return (
    <section id="projects" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <h2 className="text-[60px] font-normal mb-12 text-right">Projects</h2>

        <div className="space-y-12">
          {projects.map((p) => (
            <div
              key={p.title}
              className="grid md:grid-cols-2 gap-8 items-center bg-[#F4F5F5] rounded-xl p-4 sm:p-6 md:p-10"
            >
              <Link href={p.link} className="block p-0 md:p-10">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto rounded-lg object-cover hover:scale-[1.01] transition"
                />
              </Link>

              <div className="flex flex-col space-y-4">
                <h3 className="text-[34px] font-semibold">{p.title}</h3>
                <p className="text-[16px] text-neutral-600">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[14px] bg-white px-3 py-1 rounded text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href={p.link}
                    className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-6 py-3 text-[16px] font-medium text-black transition hover:scale-105 cursor-pointer"
                  >
                    <img src="/logo.png" alt="InCube Logo" className="w-5 h-5 object-contain" />
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
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReveal(true);
        io.disconnect();
      }
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="founders" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <h2 className="text-[60px] mb-12">
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

/* ===================== FAQ ===================== */
function FAQ() {
  const items = [
    { q: "Do you work with startups or only established companies?", a: "We specialize in software development, MVP development, web development, mobile app development, and UI/UX design. Our goal is to bring your vision to life with tailor-made solutions." },
    { q: "How does the project process look like?", a: "We start with discovery & strategy, then move to design & prototyping, followed by development & testing, and finally launch & support. You’ll be involved at every stage." },
    { q: "How long does it take to build an app or website?", a: "The timeline depends on project scope and complexity. MVPs may take a few weeks, while full-scale products can take several months. After our first consultation, we’ll give you a clear estimate." },
    { q: "Do you offer post-launch support and maintenance?", a: "Yes. We provide ongoing support, updates, and optimizations to ensure your product runs smoothly and grows with your business." },
    { q: "How do you ensure product quality?", a: "We use agile methodologies, code reviews, automated testing, and UI/UX best practices. Quality and performance are always our top priorities." },
    { q: "How much does a project cost?", a: "Every project is unique, so pricing depends on requirements. After a free consultation, we’ll provide a transparent proposal with clear deliverables." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-neutral-200 py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Ліва частина */}
          <div className="md:col-span-2">
            <h2 className="text-[48px] font-light italic">
              Frequently Asked{" "}
              <span className="not-italic font-medium">Questions</span>
            </h2>

            <div className="mt-10 divide-y divide-neutral-200">
              {items.map((it, index) => {
                const open = openIndex === index;
                return (
                  <div key={index} className="py-6">
                    <button
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="w-full flex justify-between items-center text-left cursor-pointer group"
                    >
                      <span className="text-[28px] sm:text-[32px] leading-[150%]">
                        {it.q}
                      </span>

                      {/* Іконка – обертання при відкритті */}
                      <span
                        className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <span className="absolute w-full h-[2px] bg-black rounded-full transition-all duration-300" />
                        <span
                          className={`absolute h-full w-[2px] bg-black rounded-full transition-all duration-300 ${
                            open ? "scale-0" : "scale-100"
                          }`}
                        />
                      </span>
                    </button>

                    {/* Контент з анімацією появи */}
                    <div
                      className={`transition-all duration-500 ease-in-out transform origin-top ${
                        open
                          ? "max-h-40 opacity-100 scale-y-100 mt-4"
                          : "max-h-0 opacity-0 scale-y-95"
                      } overflow-hidden`}
                    >
                      <p className="text-[16px] text-neutral-600 leading-relaxed">
                        {it.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Права частина */}
          <div className="flex flex-col">
            <h3 className="text-[30px] leading-snug">
              <span className="font-semibold">Do you want</span>{" "}
              <span className="font-extralight italic">to talk</span>{" "}
              <span className="font-semibold">with us?</span>
            </h3>

            <p className="mt-4 text-[16px] font-normal text-neutral-600 leading-relaxed">
              Whether you want to make a new project or talk about high
              performance engineering, we’re ready to talk!
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-black text-[16px] font-medium text-black hover:scale-105 transition cursor-pointer"
              style={{ padding: "14px 24px", width: "auto" }}
            >
              Contact us <span className="ml-2">↘</span>
            </a>
          </div>
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
            <h2 className="text-[80px] leading-tight font-semibold font-['Plus_Jakarta_Sans']">
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
            {/* поля форми без змін */}
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
                I consent to InCube Studio Privacy Policy and having this website
                store my submitted information so they can respond to
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
    <footer className="border-t border-neutral-200 bg-black text-white pt-[80px] pb-[80px]">
      <Container>
        <p className="mb-12 text-neutral-400">
          Whether you want to make a new project or talk about high performance engineering, we're ready to talk!
        </p>

        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-lg font-medium mb-4">Address</h4>
            <p className="text-neutral-400">
              Lviv, Lviv oblast<br />Ukraine
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Email</h4>
            <a href="mailto:info@incube.studio" className="text-neutral-400 hover:text-white">
              info@incube.studio
            </a>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Main menu</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contacts" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Social</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">Clutch</a></li>
              <li><a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Upwork</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
