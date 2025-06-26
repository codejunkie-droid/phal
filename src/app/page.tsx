
"use client";

import React from "react";

// Section anchors
const sections = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it Works" },
  { id: "contact", label: "Contact" }
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-zinc-50 to-zinc-200 dark:from-[#273028] dark:to-[#171813]">
      {/* Enhanced Falling Fruits Animation Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="falling-fruits-container">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className={`falling-fruit fruit-${(i % 15) + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {['🍎', '🍊', '🍌', '🥝', '🍇', '🍓', '🥭', '🍑', '🍒', '🍍', '🥥', '🍈', '🍉', '🫐', '🥑'][Math.floor(Math.random() * 15)]}
            </div>
          ))}
          {/* Additional layer of smaller fruits */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`small-${i}`}
              className="falling-fruit"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                fontSize: '1.2rem',
                animation: `fall-spiral ${12 + Math.random() * 6}s ease-in-out infinite`,
                opacity: 0.6
              }}
            >
              {['🍓', '🫐', '🍒', '🥝'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-yellow-50/30 to-green-50/30"></div>
      </div>

      {/* Sticky Luxurious Navigation with Logo */}
      <nav className="fixed top-6 left-1/2 z-50 flex -translate-x-1/2 rounded-xl bg-white/70 dark:bg-black/40 backdrop-blur-lg px-6 py-2 shadow-lg gap-6 border border-zinc-100 dark:border-zinc-900 text-lg font-semibold tracking-wider items-center" style={{fontFamily: 'serif'}}>
        <img src="/logo-phal.jpeg" alt="Phal Sutra Logo" className="h-10 w-10 object-contain rounded-full bg-transparent"/>
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
          {/* Logo with transparent background */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-white rounded-full opacity-0"></div>
            <img src="/logo-phal.jpeg" alt="Phal Sutra Logo" className="h-48 w-48 object-contain drop-shadow-lg relative z-10 rounded-full"/>
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

        {/* Right side - App UI */}
        <div className="flex-1 flex flex-col items-center justify-center px-12">
          <h2 className="lux-header text-2xl md:text-3xl mb-4 text-center">Experience Our App</h2>
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
            <div className="relative">
              <img 
                src="/phal-sutra-app-mockup.png" 
                alt="Phal Sutra Mobile App" 
                className="h-80 md:h-96 w-auto block rounded-3xl shadow-2xl border-4 border-white object-contain bg-white"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/app-ui-phone.png";
                }}
                onLoad={() => console.log('App mockup loaded successfully')}
              />
              {/* Fallback if both images fail */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl border-4 border-white shadow-2xl opacity-0 transition-opacity duration-300" 
                   style={{display: 'none'}} 
                   id="fallback-placeholder">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-gray-600 font-semibold">Phal Sutra App</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-36 min-h-[80dvh] flex flex-col items-center justify-center relative z-10 py-20">
        {/* Background overlay with floating fruits */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 via-yellow-50/30 to-green-50/30 rounded-3xl mx-8">
          <div className="absolute top-10 left-10 text-4xl opacity-20 leaf-float">🍃</div>
          <div className="absolute top-20 right-20 text-3xl opacity-25 leaf-float" style={{animationDelay: '1s'}}>🍊</div>
          <div className="absolute bottom-20 left-20 text-3xl opacity-20 leaf-float" style={{animationDelay: '2s'}}>🥭</div>
          <div className="absolute bottom-10 right-10 text-4xl opacity-25 leaf-float" style={{animationDelay: '0.5s'}}>🍃</div>
        </div>
        
        <div className="flex flex-col items-center max-w-6xl w-full px-8 py-16 gap-12 lux-blur-bg shadow-xl rounded-2xl border border-gold-500 relative z-10">
          <h2 className="lux-header text-3xl md:text-4xl mb-2">Why Choose Phal Sutra?</h2>
          <span className="lux-tagline mb-6 text-center">We provide everything you need to streamline your fruit sourcing and boost your business.</span>
          <div className="grid md:grid-cols-3 gap-8 pt-8 w-full">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-slow rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Direct Sourcing</h3>
              <span className="text-zinc-700 text-center flex-grow">Connect directly with farmers and wholesalers for the freshest produce at competitive prices.</span>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-medium rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Real-Time Price Comparison</h3>
              <span className="text-zinc-700 text-center flex-grow">Compare prices across multiple suppliers instantly to ensure the best deals for your business.</span>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-fast rounded-full bg-purple-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Seamless Ordering</h3>
              <span className="text-zinc-700 text-center flex-grow">Place orders with just a few taps. Our intuitive interface makes bulk ordering simple and efficient.</span>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-medium rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.5h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9A.5.5 0 015 16v-1a.5.5 0 01.5-.5H7V8a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h1v1a2 2 0 002 2h8a2 2 0 002-2v-1h1a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Timely Delivery</h3>
              <span className="text-zinc-700 text-center flex-grow">Reliable delivery network ensures your fruits arrive fresh and on time, every time.</span>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-slow rounded-full bg-red-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Quality Guarantee</h3>
              <span className="text-zinc-700 text-center flex-grow">Every fruit is quality-checked before delivery. Your satisfaction is our top priority.</span>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-fast rounded-full bg-indigo-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">24/7 Support</h3>
              <span className="text-zinc-700 text-center flex-grow">Our dedicated support team is always ready to help you with any questions or concerns.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-36 min-h-[70dvh] flex flex-col items-center justify-center relative z-10 py-20">
        {/* Background overlay with floating fruits */}
        <div className="absolute inset-0 bg-gradient-to-l from-green-50/30 via-yellow-50/30 to-orange-50/30 rounded-3xl mx-8">
          <div className="absolute top-16 left-16 text-3xl opacity-20 leaf-float">🍌</div>
          <div className="absolute top-32 right-16 text-4xl opacity-25 leaf-float" style={{animationDelay: '1.5s'}}>🍃</div>
          <div className="absolute bottom-24 left-24 text-3xl opacity-20 leaf-float" style={{animationDelay: '3s'}}>🍇</div>
          <div className="absolute bottom-16 right-24 text-3xl opacity-25 leaf-float" style={{animationDelay: '2.5s'}}>🥝</div>
        </div>
        
        <div className="flex flex-col items-center max-w-6xl w-full px-8 py-16 gap-10 lux-blur-bg shadow-2xl border-gold-500 border rounded-2xl relative z-10">
          <h2 className="lux-header text-3xl md:text-4xl mb-4">How It Works</h2>
          <span className="lux-tagline mb-6">Get started with Phal Sutra in just three simple steps</span>
          <div className="grid md:grid-cols-3 gap-8 pt-8 w-full">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="text-5xl font-bold text-gold-500 mb-4">1</div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Register & Verify</h3>
              <span className="text-zinc-700 text-center flex-grow">Sign up for your Phal Sutra account and verify your business details to get started with premium fruit sourcing.</span>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="text-5xl font-bold text-gold-500 mb-4">2</div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Browse & Compare</h3>
              <span className="text-zinc-700 text-center flex-grow">Browse our extensive catalog and compare prices from multiple verified suppliers to find the best deals.</span>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="text-5xl font-bold text-gold-500 mb-4">3</div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Order & Receive</h3>
              <span className="text-zinc-700 text-center flex-grow">Select your fruits, choose delivery preferences, and place your order with confidence. Fresh delivery guaranteed.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-36 min-h-[70dvh] flex flex-col items-center justify-center relative z-10 py-20">
        {/* Background overlay with floating fruits */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-orange-50/30 to-red-50/30 rounded-3xl mx-8">
          <div className="absolute top-12 left-12 text-4xl opacity-25 leaf-float">🍓</div>
          <div className="absolute top-20 right-12 text-3xl opacity-20 leaf-float" style={{animationDelay: '2s'}}>🍃</div>
          <div className="absolute bottom-20 left-16 text-3xl opacity-25 leaf-float" style={{animationDelay: '1s'}}>🍑</div>
          <div className="absolute bottom-12 right-16 text-4xl opacity-20 leaf-float" style={{animationDelay: '3.5s'}}>🍃</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl opacity-15 leaf-float" style={{animationDelay: '4s'}}>🥭</div>
        </div>
        
        <div className="flex flex-col items-center max-w-4xl w-full px-8 py-16 gap-10 lux-blur-bg shadow-2xl border-gold-500 border rounded-2xl relative z-10">
          <h2 className="lux-header text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <span className="lux-tagline mb-6">Ready to revolutionize your fruit business? Contact us today!</span>
          
          <div className="grid md:grid-cols-2 gap-12 w-full">
            {/* Contact Form */}
            <div className="w-full">
              <form className="w-full space-y-6">
                <div>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                    Full Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                    Email Address
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                    Phone Number
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                    Message
                  </label>
                  <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Tell us about your business needs..." rows={4}></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="bg-gold-500 hover:bg-gold-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition-all" type="button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full space-y-8">
              <div className="text-center">
                <h3 className="font-semibold text-xl text-gold-500 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <span className="text-zinc-700">support@phalsutra.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <span className="text-zinc-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-zinc-700">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-xl text-gold-500 mb-4">Business Hours</h3>
                <div className="space-y-2 text-zinc-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-xl text-gold-500 mb-4">Quick Response</h3>
                <p className="text-zinc-700">We typically respond to all inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 text-center text-zinc-500 text-sm bg-zinc-100 dark:bg-zinc-900 relative z-10">
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
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
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
