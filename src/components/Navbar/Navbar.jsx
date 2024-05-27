import "./Navbar.css";
import logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FiAlignCenter } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
        <FiAlignCenter className="menu"/>
          <img src={logo} alt="logo" className="logo" />
          <a href="#"className="cat">Categories</a>
          <div className="search-bar" style={{flexShrink:1}}>
            <IoIosSearch className="search-icon" />
            <input type="text" placeholder="Search for anything" />
          </div>
          <a href="#"className="pricing">Plans & Pricing</a>
          <a href="#" className="business">Udemy Business</a>
          <a href="#"className="pricing">Teach on Udemy</a>
          <div>

          <IoIosSearch className="search-icon-responsive" />
          <IoMdCart className="cart" />
          </div>
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
          <button className="globe">
            <MdLanguage />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
