export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center font-bold">
                K
              </div>
              <h3 className="text-xl font-bold">Kortel</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Premium shopping experience with curated products and exceptional
              service.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  On Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Kortel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
