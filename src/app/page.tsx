'use client';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' }
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
      </div>

      {/* Gradient overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-green-50/30"></div>
      </div>

      {/* Sticky Luxurious Navigation with Logo and Login Button */}
      <nav className="fixed top-6 left-1/2 z-50 flex -translate-x-1/2 rounded-xl bg-white/70 dark:bg-black/40 backdrop-blur-lg px-6 py-2 shadow-lg gap-6 border border-zinc-100 dark:border-zinc-900 text-lg font-semibold tracking-wider items-center" style={{fontFamily: 'serif'}}>
        <img src="/phal-sutra-logo.png" alt="Phal Sutra Logo" className="h-10 w-10 object-contain bg-transparent"/>
        {sections.map(sec => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="hover:text-gold-500 transition-colors lux-nav-link"
          >
            {sec.label}
          </a>
        ))}
        <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium">
          Login
        </button>
      </nav>

      {/* Sections */}
      <section id="home" className="scroll-mt-20 min-h-[100dvh] flex relative z-10">
        {/* Left side - Logo and text content */}
        <div className="flex-1 flex flex-col items-start justify-center px-12">
          {/* Logo with transparent background */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-white rounded-full opacity-0"></div>
            <img src="/phal-sutra-logo.png" alt="Phal Sutra Logo" className="h-48 w-48 object-contain drop-shadow-lg relative z-10"/>
          </div>
          <div className="mb-6">
            <span className="px-4 py-2 rounded-xl uppercase text-sm tracking-widest bg-gold-100 lux-blur-bg text-gold-500 font-bold border border-gold-500 shadow-lg">🍃 Connecting India's Freshest Fruits 🍊</span>
          </div>
          <h1 className="lux-header text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">
            Connecting <span className="text-green-600">Freshness</span> with Retail
          </h1>
          <span className="lux-tagline text-xl mb-8 block max-w-2xl">
            Your trusted partner in fruit distribution for retailers. Experience seamless B2B fruit sourcing with real-time pricing and guaranteed quality.
          </span>
          <div className="flex gap-4 mb-8">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Download the App →
            </button>
            <button className="border-2 border-green-500 text-green-500 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right side - Enhanced App UI Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-12 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-yellow-200 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-xl"></div>
          </div>

          {/* Floating statistics cards */}
          <div className="absolute top-16 left-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-green-100">
            <div className="text-2xl font-bold text-green-600">1000+</div>
            <div className="text-sm text-gray-600">Active Retailers</div>
          </div>

          <div className="absolute bottom-32 right-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100">
            <div className="text-2xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-600">Fruit Varieties</div>
          </div>

          {/* Enhanced Phone mockup with surrounding elements */}
          <div className="relative">
            {/* Floating fruit elements around phone */}
            <div className="absolute -top-8 -left-8 animate-bounce" style={{animationDelay: '0s'}}>
              <div className="bg-orange-100 rounded-full p-3 shadow-lg">
                <span className="text-2xl">🍊</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-12 animate-bounce" style={{animationDelay: '1s'}}>
              <div className="bg-red-100 rounded-full p-3 shadow-lg">
                <span className="text-2xl">🍎</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-12 animate-bounce" style={{animationDelay: '2s'}}>
              <div className="bg-purple-100 rounded-full p-3 shadow-lg">
                <span className="text-2xl">🍇</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-8 animate-bounce" style={{animationDelay: '0.5s'}}>
              <div className="bg-green-100 rounded-full p-3 shadow-lg">
                <span className="text-2xl">🥝</span>
              </div>
            </div>

            {/* Main phone container with enhanced styling */}
            <div className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 rounded-3xl p-8 shadow-2xl border border-green-200">
              {/* Decorative patterns */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-green-200 rounded-full opacity-30"></div>
              <div className="absolute top-8 right-4 w-4 h-4 bg-yellow-200 rounded-full opacity-40"></div>
              <div className="absolute bottom-8 left-6 w-5 h-5 bg-orange-200 rounded-full opacity-35"></div>
              <div className="absolute bottom-4 right-6 w-3 h-3 bg-red-200 rounded-full opacity-45"></div>

              {/* Phone mockup */}
              <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                {/* Phone screen */}
                <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl p-8 h-96 w-64 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Background pattern on screen */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 text-4xl">🍃</div>
                    <div className="absolute top-12 right-8 text-3xl">🌿</div>
                    <div className="absolute bottom-12 left-6 text-3xl">🍃</div>
                    <div className="absolute bottom-4 right-4 text-4xl">🌿</div>
                  </div>

                  {/* Screen content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse">
                        <span className="text-white text-3xl">🍎</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-800 mb-2">Phal Sutra App</h3>
                    <p className="text-sm text-gray-600 text-center mb-6 px-4">Fresh fruits at your fingertips with real-time pricing</p>

                    {/* App interface elements */}
                    <div className="w-full px-4 space-y-3 mb-6">
                      <div className="bg-white/60 rounded-lg p-2 flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                        <div className="text-xs text-gray-600">Fresh Apples - ₹120/kg</div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-2 flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                        <div className="text-xs text-gray-600">Premium Oranges - ₹80/kg</div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-2 flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                        <div className="text-xs text-gray-600">Fresh Grapes - ₹150/kg</div>
                      </div>
                    </div>

                    {/* Call to action */}
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
                      Order Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-20 py-20 relative z-10">
        <div className="container mx-auto px-12">
          <h2 className="lux-header text-4xl md:text-5xl text-center mb-16 drop-shadow-lg">
            Why Choose <span className="text-green-600">Phal Sutra</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Real-time Pricing</h3>
              <span className="text-zinc-700 text-center flex-grow">Get live market prices and make informed purchasing decisions with our dynamic pricing system.</span>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-fast rounded-full bg-purple-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Quality Guarantee</h3>
              <span className="text-zinc-700 text-center flex-grow">Every fruit is quality-checked and comes with our freshness guarantee for your peace of mind.</span>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-slow rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Seamless Ordering</h3>
              <span className="text-zinc-700 text-center flex-grow">Place orders with just a few taps. Our intuitive interface makes bulk ordering simple and efficient.</span>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-medium rounded-full bg-red-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">Reliable Delivery</h3>
              <span className="text-zinc-700 text-center flex-grow">Reliable delivery network ensures your fruits arrive fresh and on time, every time.</span>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative min-h-[280px] justify-between">
              <div className="h-16 w-16 mb-4 animate-float-fast rounded-full bg-teal-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gold-500">24/7 Support</h3>
              <span className="text-zinc-700 text-center flex-grow">Our dedicated support team is always ready to help you with any questions or concerns.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section id="how-it-works" className="scroll-mt-20 py-20 relative z-10">
        <div className="container mx-auto px-12">
          <h2 className="lux-header text-4xl md:text-5xl text-center mb-8 drop-shadow-lg">
            Simple <span className="text-green-600">Process</span>
          </h2>
          <p className="text-xl text-center mb-16 text-zinc-600">
            How It Works - Get started with Phal Sutra in just three simple steps
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-20 w-20 mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-gold-500">Register</h3>
              <p className="text-zinc-700">Sign up for your Phal Sutra account and verify your business details to get started.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-20 w-20 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-gold-500">Compare Prices</h3>
              <p className="text-zinc-700">Browse our extensive catalog and compare prices from multiple verified suppliers.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gold-100 shadow hover:shadow-gold-300/40 transition relative">
              <div className="h-20 w-20 mb-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-gold-500">Place Orders</h3>
              <p className="text-zinc-700">Select your fruits, choose delivery preferences, and place your order with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Love Section */}
      <section id="reviews" className="scroll-mt-20 py-20 relative z-10 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-12">
          <h2 className="lux-header text-4xl md:text-5xl text-center mb-8 drop-shadow-lg">
            Customer <span className="text-green-600">Love</span>
          </h2>
          <p className="text-xl text-center mb-16 text-zinc-600">
            What Our Retailers Say - Join thousands of satisfied fruit retailers who trust Phal Sutra for their business
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 italic mb-6">"Phal Sutra helped me find the best suppliers! The quality is consistently excellent, and the prices are unbeatable!"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  RK
                </div>
                <div>
                  <div className="font-semibold text-zinc-800">Rajesh Kumar</div>
                  <div className="text-sm text-zinc-600">Fresh Fruits Market, Bangalore</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 italic mb-6">"The ordering process became so simple with Phal Sutra. Fresh deliveries every time!"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  PS
                </div>
                <div>
                  <div className="font-semibold text-zinc-800">Priya Sharma</div>
                  <div className="text-sm text-zinc-600">Sharma Fruit Store, Bangalore</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 italic mb-6">"Since working with Phal Sutra, our profit margins improved significantly!"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  AS
                </div>
                <div>
                  <div className="font-semibold text-zinc-800">Amit Singh</div>
                  <div className="text-sm text-zinc-600">Singh Brothers Fruits, Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 py-20 relative z-10">
        <div className="container mx-auto px-12">
          <h2 className="lux-header text-4xl md:text-5xl text-center mb-16 drop-shadow-lg">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gold-500">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-zinc-600">support@phalsutra.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-zinc-600">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-zinc-600">Mumbai, India</div>
                  </div>
                </div>
              </div>
            </div>
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
                  <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none" id="grid-message" placeholder="Your message here..."></textarea>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-zinc-900 text-white py-16">
        <div className="container mx-auto px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gold-500 mb-4">Phal Sutra</h3>
              <p className="text-zinc-300 mb-4">Connecting freshness with retail across India.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gold-500 transition-colors">📘</a>
                <a href="#" className="hover:text-gold-500 transition-colors">🐦</a>
                <a href="#" className="hover:text-gold-500 transition-colors">📷</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gold-500 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-gold-500 transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-gold-500 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-gold-500 transition-colors">How It Works</a></li>
                <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gold-500 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gold-500 transition-colors">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gold-500 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-zinc-300">Email: support@phalsutra.com</li>
                <li className="text-zinc-300">Phone: +91 98765 43210</li>
                <li className="text-zinc-300">Address: Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-zinc-800 text-center">
            <p className="text-zinc-500">&copy; {new Date().getFullYear()} Phal Sutra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}