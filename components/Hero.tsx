export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-20 -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 -ml-48 -mb-48"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-900/30 text-orange-300 border border-orange-500/30">
              🚀 Welcome to Kortek
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Premium Shopping
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the finest selection of premium products curated exclusively for you. Experience seamless shopping with cutting-edge technology and exceptional service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200 transform hover:scale-105"
            >
              Shop Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#featured"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
            >
              View Collections
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-800">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">10K+</div>
              <div className="text-sm text-gray-400">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">50K+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
