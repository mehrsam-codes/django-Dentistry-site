import "./Testimonials.css";

const testimonials = [
  {
    name: "محمد رضایی",
    text: "برخورد پرسنل عالی بود و درمان بدون درد انجام شد. از نتیجه کاملاً راضی هستم.",
  },
  {
    name: "زهرا احمدی",
    text: "کلینیک بسیار تمیز و مجهز بود. پزشک با حوصله همه مراحل درمان را توضیح داد.",
  },
  {
    name: "علی کریمی",
    text: "بهترین تجربه دندانپزشکی که تا به حال داشتم. حتماً این کلینیک را پیشنهاد می‌کنم.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-title">
        <h2>نظرات بیماران</h2>
        <p>اعتماد شما، بزرگ‌ترین سرمایه ماست.</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote">“</div>
            <p>{item.text}</p>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;