import { useEffect, useState } from "react";
import { IoIosTrash } from "react-icons/io";
function CartProduct({ img, title, size, price, cart }) {
  const [cartCopy, setCartCopy] = useState([]);
  useEffect(() => {
    cart && setCartCopy([...cart]);
  }, []);

  function handleCartACtions(action, product) {
    if (action === "increment") {
      setCartCopy((prev) => [...prev, product]);
    } else if (action === "decrement") {
      const cartCopyItems = [...cartCopy];
      const cartItemIndex = cartCopyItems.indexOf(product);
      cartCopyItems.splice(cartItemIndex, 1);
      setCartCopy(cartCopyItems);
    }
  }

  return (
    <div>
      <div>
        <div className="flex justify-around items-center w-[90%] gap-10 border-b-2 py-[68px] group">
          <div className="flex w-[20%] gap-4">
            <img src={img} className="w-[40%]" />
            <div>
              <p>{title}</p>
              <p>{size}</p>
            </div>
          </div>
          <div className="flex border-2 px-[15px] text-[20px] gap-2">
            <button
              onClick={() =>
                handleCartACtions("decrement", { img, title, price })
              }
            >
              -
            </button>
            <h2 className="border-l-2 border-r-2 px-[10px]">
              {cartCopy.filter((item) => item.title === title).length}
            </h2>
            <button
              onClick={() =>
                handleCartACtions("increment", { img, title, price })
              }
            >
              +
            </button>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>{price}</p>
            <IoIosTrash className="text-red-500 group-hover:block hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartProduct;
