import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">کلینیک تخصصی دندانپزشکی</span>

        <h1>
          لبخندی سالم،
          <br />
          آینده‌ای زیباتر
        </h1>

        <p>
          با استفاده از تجهیزات مدرن و پزشکان مجرب، بهترین خدمات
          دندانپزشکی را با بالاترین کیفیت ارائه می‌دهیم.
        </p>

        <div className="hero-buttons">
          <a href="#appointment" className="primary-btn">
            رزرو نوبت
          </a>

          <a href="#services" className="secondary-btn">
            مشاهده خدمات
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
          alt="Dentist"
        />
      </div>
    </section>
  );
}

export default Hero;