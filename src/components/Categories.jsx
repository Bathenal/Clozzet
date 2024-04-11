import Category from "./Category";
import Jackets from "../assets/images/jacket.png";
import Handbags from "../assets/images/handbag.png";
import Shirts from "../assets/images/tshirt.png";
import Dresses from "../assets/images/dress.png";
import Jeans from "../assets/images/jeans.png";
import Shoes from "../assets/images/shoe.png";
import Sweaters from "../assets/images/sweater.png";

function Categories() {
  return (
    <div>
      <h2 className="text-4xl flex-wrap	flex justify-center mt-4">
        Top Categories
      </h2>
      <div className="flex flex-wrap	text-center justify-around mt-3">
        <Category img={Jackets} title="Jacket" />
        <Category img={Handbags} title="Handbags" />
        <Category img={Shirts} title="Shirts" />
        <Category img={Dresses} title="Dresses" />
        <Category img={Jeans} title="Jeans" />
        <Category img={Shoes} title="Shoes" />
        <Category img={Sweaters} title="Sweaters" />
      </div>
    </div>
  );
}
export default Categories;
