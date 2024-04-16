import { IoCartOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
function Addproducts() {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col justify-center gap-4 text center ">
        <h1 className="text-center text-3xl font-bold">Add New Product</h1>
        <div className="border flex flex-col my-4 text-2xl">
          <input
            type="text"
            placeholder="Product Name"
            className="border my-4 mx-4 py-3 px-[4em] w-[700px]"
          />
          <input
            type="text"
            placeholder="Price"
            className="border my-4 mx-4 py-3 px-[4em] w-[700px]"
          />
          <input
            type="text"
            placeholder="Select Category"
            className="border my-4 mx-4 py-3 px-[4em] w-[700px]"
          />
          <input
            type="file"
            placeholder="Upload Product Image"
            className="border my-4 mx-4 py-3 px-[4em] w-[700px] "
          />
          <input
            type="text"
            placeholder="Detailed Product Description"
            className="border my-4 mx-4 py-3 px-[4em] w-[700px] col-span-11	 text wrap"
          />
      <button className="border border-green py-6 px-[4em] rounded-full bg-green-300 text-white text-2xl font-sans font-bold">
        Add Product
      </button>
        </div>
      </div>
    </section>
  );
}
export default Addproducts;
