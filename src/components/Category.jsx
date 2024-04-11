function Category({img,title}) {
  return (
    <div>
      <div className="w-[100px] h-[100px] flex flex-wrap items-center justify-center my-6 bg-gray-200 rounded-full">
        <img src={img} width={50}/>
      </div>
      <p>{title}</p>
    </div>
  );
}
export default Category;
