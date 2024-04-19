import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CartProducts from "../components/CartProducts";
function Cart({ cart, setCart, cartCopy, setCartCopy }) {
  return (
    <div>
      <CartProducts
        cart={cart}
        setCart={setCart}
        cartCopy={cartCopy}
        setCartCopy={setCartCopy}
      />
    </div>
  );
}

export default Cart;
