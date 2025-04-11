
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";  
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-[#001F3F] .dark:bg-gray-900 text-white py-8 font-serif w-full mt-auto">


<div className="grid grid-cols-1 md:grid-cols-4 justify-center text-center md:text-left gap-6 px-6">

<div> <h2 className="text-lg font-bold mb-4">About Us</h2>  
  <p>  
    E-Shop is your one-stop destination for all shopping needs.  
  </p>  </div>
<div ><h2 className="text-lg font-bold mb-4">Quick Links</h2>  
  <ul className="space-y-2 grid grid-rows-1">  
    <Link to="/" className="hover:text-amber-950 dark:hover:text-gray-300">Home</Link>  
    <Link to="#" className="hover:text-amber-950 dark:hover:text-gray-300">Shop</Link>  
    <Link to="#" className="hover:text-amber-950 dark:hover:text-gray-300">Contact</Link>  
    <Link to="#" className="hover:text-amber-950 dark:hover:text-gray-300">FAQ</Link>  
  </ul> </div>
<div ><h2 className="text-lg font-bold mb-4 ">Follow Us</h2>  
  <div className="flex flex-wrap space-x-4">  
    <a href="#" className="hover:text-blue-500 transition">  
      <FaFacebookF size={20} />  
    </a>  
    <a href="#" className="hover:text-blue-400 transition">  
      <FaTwitter size={20} />  
    </a>  
    <a href="#" className="hover:text-pink-500 transition">  
      <FaInstagram size={20} />  
    </a>  
    <a href="#" className="hover:text-blue-700 transition">  
      <FaLinkedinIn size={20} />  
    </a>  
  </div>  </div>
<div><h2 className="text-lg font-bold mb-4">Newsletter</h2>  
  <form>  
    <input type="email" placeholder="Enter your email"  
      className="px-4 py-2 text-gray-800 dark:text-gray-300 rounded-md border-2 max-w-15px w-full"  
    />  
    <button type="submit"  
      className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">  
      Subscribe  
    </button>  
  </form>  </div>
</div>

<div className="text-center mt-8 border-t border-gray-700 pt-4">  
  <p>© {new Date().getFullYear()} E-Shop. All rights reserved.</p>  
</div>  

</footer>





  )
}

export default Footer