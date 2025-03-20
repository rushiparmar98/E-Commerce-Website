import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-amber-300 text-white p-4 shadow-md shadow-amber-600">

        <div className="container mx-auto flex justify-between items-center" > 

        <div className="text-2xl font-bold">MyShop</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-amber-950 transition">Home</Link></li>
          <li><Link to="/profile" className="hover:text-amber-950 transition" >Profile</Link></li>
          <li><Link to="/product" className="hover:text-amber-950 transition" >Product</Link></li>
          <li><Link to="/cart" className="hover:text-amber-950 transition">Cart</Link></li>
        </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
