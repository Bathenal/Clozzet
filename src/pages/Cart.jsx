import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CartProducts from "../components/CartProducts";
function Cart({cart, setCart}) {
  return (
    <div>
      <CartProducts cart={cart} setCart={setCart}/>
    </div>
  );
}

export default Cart;
