import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { useState } from "react";
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
    
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home cart={Cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route path="*" element={<Notfound />} />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shop cart={Cart} setCart={setCart}/>
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart  cart={Cart} setCart={setCart}/>
            </Layout>
          }
        />
        <Route
          path="/addproduct"
          element={
            <Layout>
              <Addproduct />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/singleproduct"
          element={
            <Layout>
              <Singleproduct />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
