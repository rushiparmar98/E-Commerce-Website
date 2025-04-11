import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center px-6">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to E-Shop 
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">
        Discover the best deals on top-quality products. From electronics to fashion, 
        we bring you the best shopping experience at unbeatable prices!  
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4">
        <Link to="/product"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          🛍️ Shop Now
        </Link>
        <a 
          href="/contact"
          className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition"
        >
          📞 Contact Us
        </a>
      </div>

      {/* Featured Image */}
      <div className="mt-8">
        <img 
          src="https://cdn.prod.website-files.com/5b5729421aca332c60585f78/62f41942e8da7967a4964400_ecommerce-product-pages.webp" 
          className="w-80 md:w-96 rounded-lg shadow-lg"
          alt="Shopping" 
        />
      </div>
    </div>
  );
}

export default Home;
