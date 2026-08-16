const PRODUCTS = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299.99",
    category: "Audio",
    image: "🎧",
  },
  {
    id: 2,
    name: "Smart Watch Elite",
    price: "$399.99",
    category: "Wearables",
    image: "⌚",
  },
  {
    id: 3,
    name: "Portable Charger Pro",
    price: "$79.99",
    category: "Accessories",
    image: "🔋",
  },
  {
    id: 4,
    name: "Backpack Ultra",
    price: "$149.99",
    category: "Bags",
    image: "🎒",
  },
  {
    id: 5,
    name: "USB-C Cable Pack",
    price: "$29.99",
    category: "Cables",
    image: "🔌",
  },
  {
    id: 6,
    name: "Screen Protector Glass",
    price: "$19.99",
    category: "Protection",
    image: "🛡️",
  },
];

export default function Products() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked selection of the finest products available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-600 hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-3">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-black mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {product.price}
                  </span>
                  <button className="p-2 bg-black text-white rounded-lg hover:bg-orange-600 transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
