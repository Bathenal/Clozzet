import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

function Shoppage(img, title) {
  return (
    <section>
      <div >
        <div>
          <form
            action=""
            className="mr-4 border   border-green-400 py-4 px-20 flex rounded-full"
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
        <div className="flex flex-wrap h-[100%] w-[100%]">
          <div className="bg-gray-400">
            <div>
              <img src={img} />
            </div>
            <div>
              <p>{title}</p>
              <p>KSh 2,250</p>
              <MdFavoriteBorder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Shoppage;
