function Footer() {
  return (
    <footer className=" bg-gray-200 flex-col sm:flex-row">
      <div className="container mx-auto ">
      <div className="text-center py-4">
        <p className="py-4 text-5xl my-5"  >Subscribe & get up to 30% OFF</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="mr-4 border border-green-400 py-3 px-20  outline-none	rounded-full"
        />
        <button className="border border-green py-3 px-[4em] rounded-full bg-green-300	">
          Subscribe
        </button>
      </div>
      <div className="flex gap-8 justify-between my-5 flex-col sm:flex-row">
        <div>
          <img src="/src/assets/images/logo.svg" alt="logo-image" />
          <p className="text-wrap pt-3 font-san serif text-2xl">
            Offering a unique and <br /> stylish perspective on <br /> fashion
            is our number
            <br />
            one priority. Confuse
            <br /> your mirror by our <br /> trendy outfits
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Store</h2>
          <ul className="font-san serif text-2xl">
            <li className="py-4">Women’s Fashion</li>
            <li className="py-4">Men’s Fashion</li>
            <li className="py-4">Store Sale</li>
            <li className="py-4">Collections</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Help</h2>
          <ul className="font-san serif text-2xl" >
            <li className="py-4">Customer Support</li>
            <li className="py-4">Terms& Conditions</li>
            <li className="py-4">Privacy Policy</li>
            <li className="py-4">Track Your Order</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Contact Us</h2>
          <div className="flex gap-4 py-4">
            <img
              src="/src/assets/images/email.png"
              alt="email-image"
              width={30}
            />
            <p className="font-san serif text-2xl">contact@clozzet.com</p>
          </div>

          <div className="flex gap-4 py-4">
            <img
              src="/src/assets/images/phone.png"
              alt="phone-image"
              width={30}
            />
            <p className="font-san serif text-2xl"> 254-700-333-333</p>
          </div>

          <p className="gap-4 py-4">Follow Us</p>
          <div className="flex gap-4 py-4">
            <img
              src="/src/assets/images/facebook.png"
              alt="facebook-image"
              width={40}
            />
            <img
              src="/src/assets/images/instagram.png"
              alt="instagram-image"
              width={40}
            />
            <img
              src="/src/assets/images/twitter.png"
              alt="twitter-image"
              width={40}
            />
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
