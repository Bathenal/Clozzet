function Featuredcollection({ img, title, price ,cart, setCart}) {
  return (
    <div className="my-8"   
    >
      <div className="w-[320px] h-[400px] flex  flex-wrap justify-center my-6 bg-gray-200 relative group">
        <img src={img} width={200} />
        <button className="bg-green-400 flex-wrap text-white text-2xl py-2 px-9 text-center absolute bottom-0 w-[100%] hidden group-hover:block">
          ADD TO CART 
        </button>
      </div>

      <p className="flex items-center gap-9">
        {title}{" "}
        <img src="/src/assets/images/heart.png" alt="heart image" width={20} />
      </p>
      <p>{price}</p>
    </div>
  );
}
export default Featuredcollection;
