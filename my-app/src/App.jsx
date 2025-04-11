import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import Layout2 from "./Components/Layout2";
import About from "./Pages/About";
import Mobiles from "./Pages/Mobiles";
import Othersproduct from "./Pages/Othersproduct";



const App = () => {
  return (
    <>
      <div className="bg-emerald-100 flex justify-center items-center"></div>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<Layout2 />}>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/about" element ={<About />} />
           <Route path='/mobiles' element={<Mobiles/>} />
           <Route path='/other' element={<Othersproduct/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
