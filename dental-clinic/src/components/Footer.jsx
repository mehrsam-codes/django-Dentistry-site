import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>DentalCare</h2>
          <p>
            ارائه خدمات تخصصی دندانپزشکی با تجهیزات مدرن و تیمی از پزشکان
            مجرب برای داشتن لبخندی زیبا و سالم.
          </p>
        </div>

        <div className="footer-box">
          <h3>لینک‌های سریع</h3>
          <ul>
            <li><a href="#home">خانه</a></li>
            <li><a href="#services">خدمات</a></li>
            <li><a href="#doctors">پزشکان</a></li>
            <li><a href="#appointment">رزرو نوبت</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>اطلاعات تماس</h3>

          <p><FaPhoneAlt /> 021-12345678</p>
          <p><FaEnvelope /> info@dentalcare.com</p>
          <p><FaMapMarkerAlt /> تهران، خیابان ولیعصر</p>
        </div>

        <div className="footer-box">
          <h3>ما را دنبال کنید</h3>

          <div className="socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegramPlane /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 تمامی حقوق برای DentalCare محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;