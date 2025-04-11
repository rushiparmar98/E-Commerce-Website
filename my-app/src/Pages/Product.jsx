import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-10 rounded-lg shadow-lg text-center">
      <h2 className="text-white text-2xl font-bold mb-6">Explore Our Categories</h2>

      <div className="flex justify-center gap-6">
        <Link 
          to="/mobiles" 
          className="px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-md hover:bg-blue-800 transition"
        >
          📱 Mobiles
        </Link>

        <Link 
          to="/other" 
          className="px-6 py-3 text-white font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-800 transition"
        >
          🛒 Other Products
        </Link>
      </div>

      {/* Mini product images */}
      <div className="flex justify-center gap-4 mt-6 bg-cover">
        <img 
          src="https://cdn.prod.website-files.com/5b5729421aca332c60585f78/62f41942e8da7967a4964400_ecommerce-product-pages.webp" 
          className="h-60 w-80 object-cover rounded-md shadow-md" 
          alt="Product" 
        />
        <img 
          src="https://www.abtasty.com/wp-content/uploads/product-page-apple-ipad.jpg" 
          className="h-60 w-80 object-cover rounded-md shadow-md" 
          alt="Product" 
        />
        <img 
          src="https://www.livemint.com/lm-img/img/2024/06/18/original/laptoppppp_cleanup_1718705991705.PNG" 
          className="h-60 w-80 object-cover rounded-md shadow-md" 
          alt="Product" 
        />
      </div>
    </div>
  );
}

export default Product;
