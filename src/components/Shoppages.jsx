import Shoppage from "./Shoppage";
import Jeans from "../assets/images/ragged-jeans.png";
import Jacket from "../assets/images/leather-jacket.png";
import Dress from "../assets/images/slim-banquet-dress.png";
import Denim from "../assets/images/denim.png";
import Leather from "../assets/images/leather-jacket.png";
import Quartz from "../assets/images/quartz-watch.png";
import Women from "../assets/images/denim-jeans.png";
import Brown from "../assets/images/brown-handbag.png";
import Unisex from "../assets/images/graphic-tshirts.png";
import Bomber from "../assets/images/bomber.png";
import Pallazo from "../assets/images/pallazo.png";
import Shoes from "../assets/images/leather-shoes.png";
import Serpenti from "../assets/images/serpenti-forever.png";
import Airforce from "../assets/images/unisex.png";
import Cocktail from "../assets/images/cocktail.png";
import Crop from "../assets/images/Off-The-Shoulder.png";
import Airsense from "../assets/images/Airsense-pleated.png";
import Smartwatch from "../assets/images/smartwatch.png";
import Heels from "../assets/images/ZOOSHI-COBALT.png";
import Sweater from "../assets/images/knitted-sweater.png";

import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Shoppages({cart, setCart}) {
  const handleAddToCart=(e, product)=>{
if(e.target.textContent.toLowerCase()==="add to cart");
setCart(prev=>[...prev,product])
e.target.textContent==="Remove from Cart";
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <form
          action=""
          className="mr-4 border  border-green-400 py-4 px-20 flex rounded-full w-[800px] "
        >
          <IoIosSearch size={30} />
          <input
            type="text"
            placeholder="Search Products and categories"
            className="	"
          />
          <input type="text" placeholder="Filter Category" />
          <SlArrowDown />
        </form>
      </div>

      <div className="container mx-auto mb-10">
        <div className="flex items-center justify-around mt-5">
          <Shoppage img={Jeans} title="Blue Rageed Jeans" />
          <Shoppage img={Jacket} title="Brown Leather Jacket" />
          <Shoppage img={Dress} title="Slim Banquet Dress" />
          <Shoppage img={Denim} title="Blue Denim Jacket" />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage img={Leather} title="Brown Leather Jacket" />
          <Shoppage img={Quartz} title="Quartz Men’s Watch" />
          <Shoppage img={Women} title="Women Denim Jeans" />
          <Shoppage img={Brown} title="Brown handbag" />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage img={Unisex} title="Unisex Graphic T-shirt" />
          <Shoppage img={Bomber} title="Black Bomber Jacket" />
          <Shoppage img={Pallazo} title="Pleated pallazo Pants" />
          <Shoppage img={Shoes} title="Pure Leather Shoes" />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage img={Serpenti} title="Purple Serpenti purse" />
          <Shoppage img={Airforce} title="Unisex Airforce Sneakers" />
          <Shoppage img={Cocktail} title="Blue Cocktail Dress" />
          <Shoppage img={Crop} title="Off-Shoulder Crop Top" />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage img={Airsense} title="Airsense Pleated Pants" />
          <Shoppage img={Smartwatch} title="Classy Smart Watch" />
          <Shoppage img={Heels} title="Blue Platform Heels" />
          <Shoppage img={Sweater} title="Strip Knitted Sweater" />
        </div>
      </div>
      <div className="flex items-center justify-center group">
        <div className="rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl">
          <IoIosArrowBack size={40} className="text-gray-400 cursor-pointer " />
        </div>
        <div className="text-gray-400 rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl group-hover:bg-green-300 ">
          1
        </div>
        <div className="text-gray-400 rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl group-hover:bg-green-300">
          2
        </div>
        <div className="text-gray-400 rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl group-hover:bg-green-300">
          3
        </div>
        <div className="text-gray-400 rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl group-hover:bg-green-300">
          4
        </div>
        <div className="text-gray-400 rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl group-hover:bg-green-300">
          5
        </div>
        <div className="text-gray-400 rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl ">
          <IoIosArrowForward
            size={40}
            className="text-gray-400 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
export default Shoppages;
