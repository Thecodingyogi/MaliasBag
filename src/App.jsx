import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import PageNotFound from "./components/pages/PageNotFound";
import ProductDetails from "./components/ProductDetails";
import { data } from "./data/data";

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
