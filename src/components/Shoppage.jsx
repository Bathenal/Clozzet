import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

function Shoppage({ img, title, price, cart, setCart }) {
  const handleAddToCart = (e, product) => {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      setCart((prev) => [...prev, product]);
      e.target.textContent = "Remove from Cart";
      e.target.style.color = "red";
      e.target.style.background = "gray";
    } else {
      e.target.textContent = "Add to cart";
      e.target.style.color = "white";
      e.target.style.background = "green";
      const cartCopy=[];
      cart.filter(item=>{
    if(item.title !==product.title)
    cartCopy.push(item)
})
setCart(cartCopy);
    }
  };
  return (
    <section>
      <div className="flex flex-wrap ">
        <div>
          <div className="bg-[#F0EFEF] flex gap-2 h-[400px] w-[300px] justify-center relative group">
            <img src={img} width={300} />
            <button
              className="bg-green-300 text-white text-2xl text-center absolute bottom-0 w-[100%] rounded-xl hidden group-hover:block"
              onClick={(e) => handleAddToCart(e, { img, title, price })}
            >
              ADD TO CART
            </button>
          </div>
          <div>
            <p className="flex items-center gap-10 text-2xl">
              {title} <MdFavoriteBorder />
            </p>
            <p className="text-green-500 text-2xl">{price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Shoppage;
