import CartProduct from "./CartProduct";
import sweater from "../assets/images/knitted-sweater.png";
import forces from "../assets/images/unisex.png";
import dress from "../assets/images/slim-banquet-dress.png";
import denimjeans from "../assets/images/denim-jeans.png";
function CartProducts({ cart, setCart }) {
  return (
    <div className="w-[100%] flex gap-3 my-[50px] container mx-auto">
      <div className=" w-[80%] border-2  container mx-auto h-[100vh]">
        <div className="flex justify-around border-b-2 py-[20px] w-[100%] ">
          <h2>Product</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
        </div>
        <div>
          {cart &&
            cart.map((item) => {
              return (
                <CartProduct
                  img={item.img}
                  title={item.title}
                  size={item.size}
                  price={item.price}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
        </div>
      </div>
      <div className="h-fit bg-gray-100 p-[20px] flex flex-col gap-4 shodow-[400px] box-border ">
        <h1 className="text-[20px] font-bold flex items-center justify-center">
          Cart Summary
        </h1>
        <p className="flex items-center justify-center">
          Have a promo code? Apply here
        </p>
        <div className="flex gap-2 my-[20px]">
          <input
            type="text"
            placeholder="Promo Code(optional)"
            className="border-2 p-[10px] "
          />
          <button className="bg-[#45C9A1] p-[10px] text-white font-bold rounded-lg">
            Apply
          </button>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>Ksh 16,000</p>
        </div>
        <div className="flex justify-between ">
          <p>Delivery Fee</p>
          <p>KSh 450</p>
        </div>
        <div className="border-b-2 my-[10px]"></div>
        <div className="flex justify-between font-bold ">
          <p>Total</p>
          <p>KSh 16,450</p>
        </div>
        <div className="flex justify-center my-[30px]">
          <button className="bg-[#45C9A1] py-[20px] px-[50px] rounded-lg text-white font-bold ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartProducts;
