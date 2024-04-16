import { IoCartOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="flex-col sm:flex-row">
      <div className="container mx-auto flex justify-between flex-col sm:flex-row">
        <ul className="flex items-center gap-4 cursor-pointer	">
          <Link to="/">
            {" "}
            <li>
              <img src="/src/assets/images/logo.svg" alt="logo-image" />
            </li>
          </Link>
          <Link to="/">
            <li className="hidden md:block">Home</li>
          </Link>
          <Link to="/aboutus">
            <li className="hidden md:block">About Us</li>
          </Link>
          <Link to="/shop">
            <li className="hidden md:block">Shop</li>
          </Link>
        </ul>

        <ul className="flex items-center gap-4">
          <Link to="/cart">
            {" "}
            <li>
              <IoCartOutline size={30} />
            </li>
          </Link>
          <Link to="/signup">
            <li className="hidden md:block">Sign Up</li>
          </Link>
          <Link to="/login">
            <li className="hidden md:block border border-black py-3 px-[4em] rounded-full cursor-pointer">
              Log In
            </li>
          </Link>
          <HiBars3 size={20} className="sm:hidden" />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
