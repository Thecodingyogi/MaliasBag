import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import PageNotFound from "./components/pages/PageNotFound";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { data } from "./data/data";
import FAQs from "./components/pages/FAQs";
import ReturnPolicy from "./components/pages/ReturnPolicy";
import Checkout from "./components/Checkout";
import CheckOutForm from "./components/CheckOutForm";
import Success from "./components/pages/success";
import Login from "./components/pages/Login";

function App() {
  return (
    <CartProvider>
      <>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/ReturnPolicy" element={<ReturnPolicy />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/CheckOutForm" element={<CheckOutForm />}></Route>
          <Route path="/Success" element={<Success />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path="/Shop/:id"
            element={<ProductDetails data={data} />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </>
    </CartProvider>
  );
}

export default App;
