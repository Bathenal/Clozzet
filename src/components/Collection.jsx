import { BiSolidRightArrow } from "react-icons/bi";

function Collection({ img, h2, classes }) {
  return (
    <div className={`flex flex-col relative ${classes}`}>
      <div className={`flex items-end h-[100%] absolute left-8`}>
        <div>
          <p className="text-gray-600 text-3xl">Casual Collection</p>
          <p className="text-5xl">{h2} </p>
          <p className="flex items-center text-3xl gap-2">
            Shop Now <BiSolidRightArrow />
          </p>
        </div>

        <div className="h-[100%]">
          <img src={img} className="h-[100%] object-fill" />
        </div>
      </div>
    </div>
  );
}
export default Collection;
