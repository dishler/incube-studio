'use client';

import Link from "next/link";

/* ===================== Footer ===================== */
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-black text-white py-12 sm:py-16">
      <div className="px-4 sm:px-8 lg:px-[120px]">
        <p className="mb-8 sm:mb-12 text-neutral-400 max-w-3xl text-[15px] sm:text-[16px]">
          Whether you want to make a new project or talk about high-performance engineering, we`re ready to talk!
        </p>

        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Address */}
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Address</h4>
            <p className="text-neutral-400">
              Lviv, Lviv oblast
              <br />
              Ukraine
            </p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Email</h4>
            <Link
              href="mailto:info@incube.studio"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              info@incube.studio
            </Link>
          </div>

          {/* Main Menu */}
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Main menu</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contacts" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Social</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link
                  href="https://clutch.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Clutch
                </Link>
              </li>
              <li>
                <Link
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Upwork
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
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

/* ===================== Contact Page ===================== */
export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Contact Form Section */}
      <section
        id="get-in-touch"
        className="border-t border-neutral-200 pt-24 sm:pt-28 lg:pt-40 pb-16 sm:pb-20 lg:pb-[120px] px-4 sm:px-8 lg:px-[120px]"
      >
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 max-w-[1440px] mx-auto">
          {/* Left */}
          <div>
            <h1 className="leading-tight font-semibold text-[40px] sm:text-[56px] lg:text-[80px]">
              Contact <span className="italic font-extralight">Us</span>
            </h1>
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed max-w-xl">
              Whether you’re looking to start a new project or discuss high-performance engineering, we’re prepared to chat!
            </p>
          </div>

          {/* Form */}
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

            {/* Bigger checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                required
                className="mt-1.5 h-5 w-5 sm:h-6 sm:w-6 border border-neutral-400 rounded-sm text-black focus:ring-black"
              />
              <label htmlFor="privacy" className="text-[15px] sm:text-[16px] font-light text-neutral-700 leading-relaxed">
                I consent to InCube Studio Privacy Policy and having this website store my submitted information so they can respond to
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-black bg-white px-6 sm:px-8 py-3 text-[15px] sm:text-[16px] font-medium text-black transition-transform hover:scale-105"
              >
                Send message <span className="ml-2">↗</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
