import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled , setisScrolled] = useState(false);
  const location = useLocation();
  const [, setIsDarkMode] = useState(false);
  const [, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("mode");       // ✅ LocalStorage se mode fetch karo
    setIsDark(stored === "dark");                      // ✅ State update karo
    if (stored === "dark") {
      document.documentElement.classList.add("dark");   // ✅ Dark mode apply karo
    } else {
      document.documentElement.classList.remove("dark");// ✅ Light mode apply karo
    }
  }, []);
  


  const enableDark = () => {
    setIsDarkMode(true);    // ✅ Dark mode ko enable karo
    document.documentElement.classList.add("dark");  
    localStorage.setItem("mode", "dark");   
 
  };

  const enableLight = () => {
    setIsDarkMode(false);   // ✅ Light mode ko enable karo
    document.documentElement.classList.remove("dark");
    localStorage.setItem("mode", "light");    
        
  };

  const ToggleFunc = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";   // Menu open → scroll disable
    } else {
      document.body.style.overflow = "auto";     // Menu close → scroll enable
    }

  };

  useEffect (()=> {

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  },[]);



  return (
    <>

      {/* Navbar */}
      <nav className={`p-4 sticky top-0 w-full z-50 transition-all duration-500 ease-in-out transform 
    ${isScrolled ? "bg-[#001F3F] shadow-lg py-2 scale-95 -translate-y-2 font-serif" : "bg-[#001F3F] py-4 shadow-md scale-100 translate-y-0 font-serif"}`}>

        <div className={`container mx-auto flex items-center text-white`}>
          
          {/* Logo */}
          <div className="flex gap-4">
          <Link to="/sidebar" className="sm:text-2xl font-bold">MyShop</Link>
          </div>

          
          <div className="flex justify-between gap-2 items-center ml-auto">
          {/* Desktop Menu */}
          <ul
            className="hidden sm:flex space-x-6">
            <li>
              <Link to="/" className={`${location.pathname === "/" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className={`${location.pathname === "/profile" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition`}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/product" className={`${location.pathname === "/product" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition`}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/cart" className={`${location.pathname === "/cart" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition`}>
                Cart
              </Link>
            </li>
          </ul>


          

            {/* ✅ Dark + Light Buttons */}
          <button onClick={enableLight} className={`p-2 bg-white text-gray-900 rounded-md shadow-md transition ${localStorage.getItem("mode") === "light" ? "hidden" : ""}`}>
          <HiOutlineSun className="text-yellow-500" size={24} />
          </button>

          <button 
            onClick={enableDark} 
            className={`p-2 bg-gray-900 text-white rounded-md shadow-md transition ${localStorage.getItem("mode") === "dark" ? "hidden" : ""}`}
          >
            <HiOutlineMoon className="text-blue-400" size={24} />  
          </button> 
          </div>  

        </div>




        <div className="relative"> 

        {/* Mobile Menu Icon */}
        <div className={`sm:hidden flex justify-end `}>
          <HiMenu
            className="hover:text-amber-950 transition text-white"
            onClick={ToggleFunc}
          />
        </div>

        {/* Mobile Menu */}

        <ul className={`bg-[#001F3F] text-white p-4 shadow-md shadow-[#001F3F] absolute top-10 right-0 ${isOpen ? "block" : "hidden"}`}>
         <li className="py-2"><Link to="/" className={`${location.pathname === "/" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition `}>Home</Link></li>
         <li className="py-2"><Link to="/profile" className={`${location.pathname === "/profile" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition`}>Profile</Link></li>
         <li className="py-2"><Link to="/product" className={`${location.pathname === "/product" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition`}>Product</Link></li>
         <li className="py-2"><Link to="/cart" className={`${location.pathname === "/cart" ? "text-blue-500 font-bold" : ""}hover:text-amber-950 transition`}>Cart</Link></li>
        </ul>

        </div>

      </nav>
    </>
  );
};

export default Navbar;
