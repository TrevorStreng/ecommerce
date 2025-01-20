// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Mens } from "./pages/Mens";
import { Womens } from "./pages/Womens";
import { Sale } from "./pages/Sale";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </Router>
  );
}
