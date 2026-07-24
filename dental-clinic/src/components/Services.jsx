import "./Services.css";

const services = [
  {
    title: "ایمپلنت دندان",
    description: "جایگزینی دائمی دندان‌های از دست رفته با بهترین کیفیت.",
  },
  {
    title: "ارتودنسی",
    description: "اصلاح ناهنجاری‌های فک و دندان با روش‌های مدرن.",
  },
  {
    title: "کامپوزیت",
    description: "طراحی لبخند زیبا با کامپوزیت‌های باکیفیت.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-title">
        <h2>خدمات ما</h2>
        <p>بهترین خدمات دندانپزشکی با تجهیزات مدرن</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;