import Collection from "./Collection";
import Mens from "../assets/images/mens.png";
import Watches from "../assets/images/watches.png";
import Handbags from "../assets/images/hbags.png";
import Ladies from "../assets/images/ladies.png";

function Collections() {
  return (
    <div className=" container mx-auto my-20 grid grid-cols-2 grid-rows-[300px_300px_300px] gap-2">
      <Collection
        img={Mens}
        h2="Men’s Collection"
        classes="row-start-1 row-end-3 bg-[#F0EFEF]"
      />
      <Collection
        img={Watches}
        h2="Luxury Watches"
        classes="bg-[#E3F9FB]"
      />
      <Collection
        img={Handbags}
        h2="Designer Handbags"
        classes="bg-[#FFF1F1]"
      />
      <Collection
        img={Ladies}
        h2="Ladies Collection"
        classes="row-start-2 row-end-4 bg-[#FEDBDB]"
      />
    </div>
  );
}
export default Collections;
