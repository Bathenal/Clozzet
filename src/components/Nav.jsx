import { IoCartOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

function Nav() {
  return (
    <nav className="flex-col sm:flex-row">
      <div className="container mx-auto flex justify-between flex-col sm:flex-row">
        <ul className="flex items-center gap-4">
          <li>
            <img src="/src/assets/images/logo.svg" alt="logo-image" />
          </li>
          <li className="hidden md:block">Home</li>
          <li className="hidden md:block">About Us</li>
          <li className="hidden md:block">Shop</li>
        </ul>

        <ul className="flex items-center gap-4">
          <li>
            <IoCartOutline size={30} />
          </li>
          <li className="hidden md:block">Sign Up</li>
          <li className="hidden md:block border border-black py-3 px-[4em] rounded-full cursor-pointer">
            Log In
          </li>
          <HiBars3 size={20} className="sm:hidden" />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
