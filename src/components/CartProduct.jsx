function CartProduct({ img, title, size,price }) {
    return (
      <div >
        <div >
          <div className="flex justify-around items-center w-[90%] gap-10 border-b-2 py-[68px] ">
            <div className="flex w-[20%] gap-4">
              <img src={img} className="w-[40%]" />
              <div>
                <p>{title}</p>
                <p>{size}</p>
              </div>
            </div>
            <div className="flex border-2 px-[15px] text-[20px] gap-2">
              <button className=" ">-</button>
              <h2 className="border-l-2 border-r-2 px-[10px]">1</h2>
              <button className="">+</button>
            </div>
            <p>{price}</p>
          </div>
        </div>
      </div>
    );
  }
  export default CartProduct;





