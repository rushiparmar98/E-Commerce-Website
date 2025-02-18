import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Goddess Hiral</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
