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

function Shoppages({ cart, setCart }) {
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
          <input
            type="text"
            placeholder="Filter Category"
            cart={cart}
            setCart={setCart}
          />
          <SlArrowDown />
        </form>
      </div>

      <div className="container mx-auto mb-10">
        <div className="flex items-center justify-around mt-5">
          <Shoppage
            img={Jeans}
            title="Blue Rageed Jeans"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Jacket}
            title="Brown Leather Jacket"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Dress}
            title="Slim Banquet Dress"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Denim}
            title="Blue Denim Jacket"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage
            img={Leather}
            title="Brown Leather Jacket"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Quartz}
            title="Quartz Men’s Watch"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Women}
            title="Women Denim Jeans"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Brown}
            title="Brown handbag"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage
            img={Unisex}
            title="Unisex Graphic T-shirt"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Bomber}
            title="Black Bomber Jacket"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Pallazo}
            title="Pleated pallazo Pants"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Shoes}
            title="Pure Leather Shoes"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage
            img={Serpenti}
            title="Purple Serpenti purse"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Airforce}
            title="Unisex Airforce Sneakers"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Cocktail}
            title="Blue Cocktail Dress"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Crop}
            title="Off-Shoulder Crop Top"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
        </div>
        <div className="flex items-center justify-around mt-5">
          <Shoppage
            img={Airsense}
            title="Airsense Pleated Pants"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Smartwatch}
            title="Classy Smart Watch"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Heels}
            title="Blue Platform Heels"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
          <Shoppage
            img={Sweater}
            title="Strip Knitted Sweater"
            price="Ksh 2,250"
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
      <div className="flex items-center justify-center group">
        <div className="rounded-full border border-gray-700 w-[80px] h-[80px] m-8 flex items-center justify-center text-4xl">
          <IoIosArrowBack
            size={40}
            className="text-gray-400 cursor-pointer "
            cart={cart}
            setCart={setCart}
          />
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
