import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

function Shoppage({ img, title,price, cart, setCart }) {
  return (
    <section>
      <div className="flex flex-wrap ">
        <div>
          <div className="bg-[#F0EFEF] flex gap-2 h-[400px] w-[300px] justify-center relative group">
            <img src={img} width={300} />
            <button
              className="bg-green-300 text-white text-2xl text-center absolute bottom-0 w-[100%] rounded-xl hidden group-hover:block"
              onClick={(e) => handleAddToCart(e, { img, title,price })}
            >
              ADD TO CART
            </button>
          </div>
          <div>
            <p className="flex items-center gap-10 text-2xl">
              {title} <MdFavoriteBorder />
            </p>
            <p className="text-green-500 text-2xl">KSh 2,250</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Shoppage;
