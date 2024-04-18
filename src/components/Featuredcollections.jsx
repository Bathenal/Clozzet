import Featuredcollection from "./Featuredcollection";
import Jackets from "../assets/images/leather-jacket.png";
import Sweatshirts from "../assets/images/sweatshirts.png";
import Trousers from "../assets/images/pallazo.png";
import Jacket from "../assets/images/denim.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Featuredcollections(cart, setCart) {
  return (
    <div>
      <h2 className="text-4xl flex flex-wrap justify-center mt-4">
        Featured Collection
      </h2>
      <div className="flex text-2xl flex-wrap items-center justify-around mt-3">
        <IoIosArrowBack size={30} />

        <Featuredcollection
          img={Jackets}
          title="Brown Leather Jacket"
          price="KSh 2,250"
        />
        <Featuredcollection
          img={Sweatshirts}
          title="Round-neck Sweatshirts"
          price="KSh 2,000"
        />
        <Featuredcollection
          img={Trousers}
          title="Pleated Pallazo Trousers"
          price="KSh 1,800"
        />
        <Featuredcollection
          img={Jacket}
          title="M-22 Denim Jacket"
          price="KSh 1,250"
        />
        <IoIosArrowForward size={30} />
      </div>
    </div>
  );
}
export default Featuredcollections;
