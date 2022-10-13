import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductoIndividual from "./components/ProductoIndividual";
import CartShop from "./components/CartShop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/producto/:id" element={<ProductoIndividual />} />
        <Route path="/cart" element={<CartShop />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
