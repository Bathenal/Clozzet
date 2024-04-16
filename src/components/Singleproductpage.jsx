import { IoCartOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
function Singleproductpage() {
  return (
    <section className="container ">
      <div className="flex w-[100%] h-[70vh] justify-between mx-auto">
        <div className="flex h-[100vh] w-[100%]">
          <img
            src="src/assets/images/unisex.png"
            alt="login image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-12 h-[100vh] w-[100%] mt-10 mb-0 pl-10 ">
          <h2 className="text-2xl font-serif font-bold text-center">SHOES </h2>
          <p>Unisex Airforce Sneakers</p>
          <div></div>
          <p>KSh 3,500</p>
          <p>
            The sneaker has all sizes which fits to normal size,it is suitable
            for all weather conditions, it is light in weight making it
            comfortable for a long wear. The shoe can be worn by both gender. It
            is suitable for outdoor activities. Buy from our shop, get it
            delivered to your doorstep and slay the whole day.
          </p>
          <p>SELECT SIZE</p>
          <p>QUANTITY</p>
          <div>
          <button>ADD TO CART</button>
          <button>SAVE TO WISHLIST</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Singleproductpage;
