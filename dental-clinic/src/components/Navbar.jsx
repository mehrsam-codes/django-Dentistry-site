import { FaTooth } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <FaTooth className="logo-icon" />
          <span>DentalCare</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">خانه</a></li>
            <li><a href="#services">خدمات</a></li>
            <li><a href="#doctors">پزشکان</a></li>
            <li><a href="#contact">تماس با ما</a></li>
          </ul>
        </nav>

        <a href="#appointment" className="btn">
          رزرو نوبت
        </a>
      </div>
    </header>
  );
}

export default Navbar;