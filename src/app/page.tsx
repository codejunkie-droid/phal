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
      <section id="home" className="scroll-mt-36 min-h-[100dvh] flex flex-col items-center justify-center relative z-10">
        {/* HOME/HERO CONTENT will go here */}
        <div className="flex flex-col items-center max-w-3xl text-center px-6 py-28 sm:py-32">
          <div className="mb-6">
            <span className="px-4 py-2 rounded-xl uppercase text-xs tracking-widest bg-gold-100 lux-blur-bg text-gold-500 font-bold border border-gold-500 shadow-lg">Fruits redefined</span>
          </div>
          <h1 className="lux-header text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">Phal Sutra</h1>
          <span className="lux-tagline text-xl mb-8 block">Where taste meets luxury.<br />Premium fruits. Effortless app experience.</span>
          <div className="flex justify-center gap-5 mt-4">
            <img src="https://same-assets.com/ai/fruits/mixed-fancy-basket.png" className="h-24 drop-shadow-2xl rounded-2xl border-4 border-white/70 dark:border-zinc-900 lux-blur-bg" alt="Luxury fruit basket"/>
          </div>
        </div>
        {/* BACKGROUND FRUIT ANIMATION here */}
      </section>
      <section id="download" className="scroll-mt-36 min-h-[80dvh] flex flex-col items-center justify-center relative z-10">
        {/* DOWNLOAD CONTENT will go here */}
        <div className="flex flex-col items-center max-w-2xl w-full px-6 py-14 gap-8 lux-blur-bg shadow-2xl border-gold-500 border rounded-2xl">
          <h2 className="lux-header text-3xl md:text-4xl mb-3">Download the App</h2>
          <span className="lux-tagline mb-4">The luxury of every fruit, your way.<br />Get Phal Sutra now!</span>
          <div className="flex flex-row gap-5 justify-center items-center mt-2 mb-2">
            <a href="#" className="transition transform hover:scale-105 inline-block">
              <img src="https://same-assets.com/ai/fruits/apple-ios-download.png" alt="App Store" className="h-16 drop-shadow-xl"/>
            </a>
            <a href="#" className="transition transform hover:scale-105 inline-block">
              <img src="https://same-assets.com/ai/fruits/google-play-download.png" alt="Google Play" className="h-16 drop-shadow-xl"/>
            </a>
          </div>
          <div className="mt-6 flex justify-center relative">
            <img src="https://same-assets.com/ai/fruits/app-ui-mockup.png" alt="App UI" className="h-56 md:h-72 block rounded-2xl shadow-2xl border border-gold-500 bg-white/80"/>
            {/* Animated fruits drifting behind mockup placeholder */}
          </div>
        </div>
      </section>
      <section id="features" className="scroll-mt-36 min-h-[70dvh] flex flex-col items-center justify-center relative z-10">
        {/* FEATURES CONTENT will go here */}
        <div className="flex flex-col items-center max-w-4xl w-full px-6 py-14 gap-10 lux-blur-bg shadow-xl rounded-2xl border border-gold-500">
          <h2 className="lux-header text-3xl md:text-4xl mb-1">Why Choose Phal Sutra?</h2>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <img src="https://same-assets.com/ai/fruits/gold-apple.png" alt="Freshest Fruits" className="h-16 mb-3 animate-float-slow" />
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Premium Quality</h3>
              <span className="text-zinc-700 text-center">Only the freshest, finest fruits—handpicked and delivered with care, every time.</span>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <img src="https://same-assets.com/ai/fruits/sparkle-delivery.png" alt="Timely Delivery" className="h-16 mb-3 animate-float-medium" />
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Effortless Delivery</h3>
              <span className="text-zinc-700 text-center">Your luxury fruit basket—on schedule, right to your doorstep, beautifully packaged.</span>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center p-5 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <img src="https://same-assets.com/ai/fruits/diamond-variety.png" alt="Vast Variety" className="h-16 mb-3 animate-float-fast" />
              <h3 className="font-semibold text-lg mb-2 text-gold-500">Exquisite Variety</h3>
              <span className="text-zinc-700 text-center">From rare jewels to everyday delights—all the world’s best fruits, just a tap away.</span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="scroll-mt-36 min-h-[60dvh] flex flex-col items-center justify-center relative z-10 pb-12">
        {/* CONTACT CONTENT will go here */}
      </section>
      {/* BACKGROUND ANIMATION will be added as a separate component */}
    </main>
  );
}
