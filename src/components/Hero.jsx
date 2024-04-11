import { IoIosSearch } from "react-icons/io";

function Hero() {
  return (
    <section className="container mx-auto flex justify-between">
      <div>
        <div className="font-san serif text-2xl my-8 text-wrap">
          <h2 className="text-wrap pt-3 font-san serif text-5xl font-bold">
            Choose the look <br></br>
            that <span className="text-green-500" >suits</span> you best
          </h2>
          <p className="my-8">
            Every day is a fashion show & the world is your runway. Clozzet will
            <br></br>
            elevate your wardrobe with the best collections. Be exclusive, Be{" "}
            <br></br>
            Devine, Be yourself. Explore outfits that will make you comfortably{" "}
            <br></br>
            beautiful.True style never dies.
          </p>
        </div>
        <div className="flex text-center py-4 gap-10 font-san serif text-2xl font-bold my-6">
          <button className="border border-green py-3 px-[4em] rounded-full bg-green-300	">
            Shop Now
          </button>
          <button className="border border-green py-3 px-[4em] rounded-full	">
            About Us
          </button>
        </div>
        <form
          action=""
          className="mr-4 border  border-green-400 py-4 px-20 flex rounded-full"
        >
          <IoIosSearch size={30} />
          <input type="text" placeholder="Search" className="outline-none	"/>
        </form>
      </div>
      <div >
        <img src="/src/assets/images//hero-background.png" alt="hero-background-inage" className="absolute top-0 right-0 z-[-1]"/>
        <img src="/src/assets/images/hero-image.png" alt="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
