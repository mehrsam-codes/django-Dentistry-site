import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "20px",
          lineHeight: "2",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#0ea5e9" }}>
          درباره کلینیک DentalCare
        </h1>

        <p>
          کلینیک DentalCare با بهره‌گیری از پزشکان متخصص، تجهیزات مدرن و
          جدیدترین روش‌های درمانی، خدمات جامع دندانپزشکی را ارائه می‌دهد.
        </p>

        <br />

        <h2>چرا ما؟</h2>

        <ul>
          <li>✔ پزشکان متخصص و با تجربه</li>
          <li>✔ تجهیزات مدرن</li>
          <li>✔ رزرو آنلاین نوبت</li>
          <li>✔ محیطی آرام و بهداشتی</li>
          <li>✔ ارائه خدمات زیبایی و درمانی</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}

export default About;