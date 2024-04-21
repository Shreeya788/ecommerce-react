import { CartProvider } from "./Provider/CartContext";
import MyCart from "./components/MyCart";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mycart" element={<MyCart />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
