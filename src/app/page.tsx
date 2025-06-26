
"use client";

import React from "react";

// Section anchors
const sections = [
  { id: "home", label: "Home" },
  { id: "download", label: "Download" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" }
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-zinc-50 to-zinc-200 dark:from-[#273028] dark:to-[#171813]">
      {/* Sticky Luxurious Navigation */}
      <nav className="fixed top-6 left-1/2 z-50 flex -translate-x-1/2 rounded-xl bg-white/70 dark:bg-black/40 backdrop-blur-lg px-6 py-2 shadow-lg gap-6 border border-zinc-100 dark:border-zinc-900 text-lg font-semibold tracking-wider" style={{fontFamily: 'serif'}}>
        {sections.map(sec => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="hover:text-gold-500 transition-colors lux-nav-link"
          >
            {sec.label}
          </a>
        ))}
      </nav>
      {/* Sections */}
      <section id="home" className="scroll-mt-36 min-h-[100dvh] flex relative z-10">
        {/* Left side - Logo and text content */}
        <div className="flex-1 flex flex-col items-start justify-center px-12">
          {/* Logo */}
          <div className="mb-8">
            <img src="/logo-phal.jpeg" alt="Phal Sutra Logo" className="h-48 w-48 object-contain drop-shadow-lg"/>
          </div>
          <div className="mb-6">
            <span className="px-4 py-2 rounded-xl uppercase text-sm tracking-widest bg-gold-100 lux-blur-bg text-gold-500 font-bold border border-gold-500 shadow-lg">Fruits redefined</span>
          </div>
          <h1 className="lux-header text-6xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg">Phal Sutra</h1>
          <span className="lux-tagline text-2xl mb-8 block">Where taste meets luxury.<br />Premium fruits. Effortless app experience.</span>
          <div className="flex gap-4">
            <img src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop&crop=center" className="h-20 drop-shadow-2xl rounded-xl border-2 border-white/70 dark:border-zinc-900 lux-blur-bg" alt="Premium fruit basket"/>
          </div>
        </div>

        {/* Right side - Download content */}
        <div className="flex-1 flex flex-col items-center justify-start pt-32 px-12">
          <h2 className="lux-header text-2xl md:text-3xl mb-4 text-center">Download the App</h2>
          <span className="lux-tagline mb-6 text-center">The luxury of every fruit, your way.<br />Get Phal Sutra now!</span>
          <div className="flex flex-row gap-4 justify-center items-center mb-8">
            <a href="#" className="transition transform hover:scale-105 inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12 w-auto drop-shadow-xl"/>
            </a>
            <a href="#" className="transition transform hover:scale-105 inline-block">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-16 w-auto drop-shadow-xl"/>
            </a>
          </div>
          <div className="flex justify-center relative mt-4">
            <img 
              src="/phal-sutra-app-mockup.png" 
              alt="Phal Sutra Mobile App" 
              className="h-72 md:h-96 w-auto block rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
        {/* BACKGROUND FRUIT ANIMATION here */}
      </section>
      <section id="features" className="scroll-mt-36 min-h-[70dvh] flex flex-col items-center justify-center relative z-10">
        {/* FEATURES CONTENT will go here */}
        <div className="flex flex-col items-center max-w-4xl w-full px-6 py-14 gap-10 lux-blur-bg shadow-xl rounded-2xl border border-gold-500">
          <h2 className="lux-header text-3xl md:text-4xl mb-1">Why Choose Phal Sutra?</h2>
          <span className="lux-tagline mb-4 text-center">We provide everything you need to streamline your fruit sourcing and boost your business.</span>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-16 w-16 mb-3 animate-float-slow rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Direct Sourcing</h3>
              <span className="text-zinc-700 text-center">Connect directly with farmers and wholesalers for the freshest produce at competitive prices.</span>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-16 w-16 mb-3 animate-float-medium rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Real-Time Price Comparison</h3>
              <span className="text-zinc-700 text-center">Compare prices across multiple suppliers instantly to ensure the best deals for your business.</span>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-16 w-16 mb-3 animate-float-fast rounded-full bg-purple-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Seamless Ordering</h3>
              <span className="text-zinc-700 text-center">Place orders with just a few taps. Our intuitive interface makes bulk ordering simple and efficient.</span>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-16 w-16 mb-3 animate-float-medium rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.5h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9A.5.5 0 015 16v-1a.5.5 0 01.5-.5H7V8a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h1v1a2 2 0 002 2h8a2 2 0 002-2v-1h1a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Timely Delivery</h3>
              <span className="text-zinc-700 text-center">Reliable delivery network ensures your fruits arrive fresh and on time, every time.</span>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-16 w-16 mb-3 animate-float-slow rounded-full bg-red-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Quality Guarantee</h3>
              <span className="text-zinc-700 text-center">Every fruit is quality-checked before delivery. Your satisfaction is our top priority.</span>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-16 w-16 mb-3 animate-float-fast rounded-full bg-indigo-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">24/7 Support</h3>
              <span className="text-zinc-700 text-center">Our dedicated support team is always ready to help you with any questions or concerns.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-36 min-h-[60dvh] flex flex-col items-center justify-center relative z-10 pb-12">
        <div className="flex flex-col items-center max-w-4xl w-full px-6 py-14 gap-8 lux-blur-bg shadow-2xl border-gold-500 border rounded-2xl">
          <h2 className="lux-header text-3xl md:text-4xl mb-3">Simple Process</h2>
          <span className="lux-tagline mb-4">Get started with Phal Sutra in just three simple steps</span>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="text-5xl font-bold text-gold-500 mb-3">1</div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Register</h3>
              <span className="text-zinc-700 text-center">Sign up for your Phal Sutra account and verify your business details to get started.</span>
            </div>
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="text-5xl font-bold text-gold-500 mb-3">2</div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Compare Prices</h3>
              <span className="text-zinc-700 text-center">Browse our extensive catalog and compare prices from multiple verified suppliers.</span>
            </div>
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="text-5xl font-bold text-gold-500 mb-3">3</div>
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Place Orders</h3>
              <span className="text-zinc-700 text-center">Select your fruits, choose delivery preferences, and place your order with confidence.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="customer-love" className="scroll-mt-36 min-h-[60dvh] flex flex-col items-center justify-center relative z-10 pb-12">
        <div className="flex flex-col items-center max-w-4xl w-full px-6 py-14 gap-8 lux-blur-bg shadow-2xl border-gold-500 border rounded-2xl">
          <h2 className="lux-header text-3xl md:text-4xl mb-3">Customer Love</h2>
          <span className="lux-tagline mb-4">What Our Retailers Say</span>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <p className="text-zinc-700 text-center mb-4">"Phal Sutra helped me find the best suppliers! The quality is consistently excellent, and the prices are unbeatable!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold mr-3">RK</div>
                <div>
                  <h4 className="font-semibold text-lg text-gold-500">Rajesh Kumar</h4>
                  <span className="text-zinc-700 text-sm">Fresh Fruits Market, Delhi</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <p className="text-zinc-700 text-center mb-4">"The ordering process became so simple with Phal Sutra. Fresh deliveries every time!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold mr-3">PS</div>
                <div>
                  <h4 className="font-semibold text-lg text-gold-500">Priya Sharma</h4>
                  <span className="text-zinc-700 text-sm">Sharma Fruit Store, Mumbai</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <p className="text-zinc-700 text-center mb-4">"Since working with Phal Sutra, our profit margins improved significantly!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold mr-3">AS</div>
                <div>
                  <h4 className="font-semibold text-lg text-gold-500">Amit Singh</h4>
                  <span className="text-zinc-700 text-sm">Singh Brothers Fruits, Bangalore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-36 min-h-[60dvh] flex flex-col items-center justify-center relative z-10 pb-12">
        {/* CONTACT CONTENT will go here */}
        <div className="flex flex-col items-center max-w-2xl w-full px-6 py-14 gap-8 lux-blur-bg shadow-2xl border-gold-500 border rounded-2xl">
          <h2 className="lux-header text-3xl md:text-4xl mb-3">Contact Us</h2>
          <span className="lux-tagline mb-4">We'd love to hear from you! Reach out to us for any queries or feedback.</span>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Jane Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="jane.doe@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Your message here..." rows={4}></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-gold-500 hover:bg-gold-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* BACKGROUND ANIMATION will be added as a separate component */}
      <footer className="w-full py-8 text-center text-zinc-500 text-sm bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="font-semibold text-lg text-gold-500 mb-4">Phal Sutra</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Connecting freshness with retail. Your trusted partner in fruit distribution.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gold-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-gold-500 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-gold-500 transition-colors">How it Works</a></li>
              <li><a href="#customer-love" className="hover:text-gold-500 transition-colors">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gold-500 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gold-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-zinc-700 dark:text-zinc-300">Email: support@phalsutra.com</li>
              <li className="text-zinc-700 dark:text-zinc-300">Phone: +91 98765 43210</li>
              <li className="text-zinc-700 dark:text-zinc-300">Address: Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-zinc-500">&copy; {new Date().getFullYear()} Phal Sutra. All rights reserved. Made with ❤️ for fresh produce retailers.</p>
        </div>
      </footer>
    </main>
  );
}
