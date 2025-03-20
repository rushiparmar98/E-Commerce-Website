import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <>
      <div className="bg-blue-500 text-white p-4 rounded-lg">Goddess Hiral</div>

      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/product" element={< Product />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </>
  );
};

export default App;
