import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home.jsx";
import Notfound from "../pages/Notfound.jsx";
import Layout from "../pages/Layout.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import Aboutus from "../pages/Aboutus.jsx";
import Cart from "../pages/Cart.jsx";
import Addproduct from "../pages/Addproduct.jsx";
import Shop from "../pages/Shop.jsx";
import Singleproduct from "../pages/Singleproduct.jsx";

function Router() {
  const [cart, setCart] = useState([]);
  const [cartCopy, setCartCopy] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Home
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
        <Route path="*" element={<Notfound />} />
        <Route
          path="/shop"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Shop
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Cart
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
        <Route
          path="/addproduct"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Addproduct
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Aboutus
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
        <Route
          path="/singleproduct"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartCopy={cartCopy}
              setCartCopy={setCartCopy}
            >
              <Singleproduct
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
