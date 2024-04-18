import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Shoppages from "../components/Shoppages";
function Shop({ cart, setCart }) {
  return (
    <div>
      <Shoppages cart={cart} setCart={setCart} />
    </div>
  );
}

export default Shop;
