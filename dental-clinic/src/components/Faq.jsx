import { useState } from "react";
import "./Faq.css";

const questions = [
  {
    question: "چگونه نوبت رزرو کنم؟",
    answer: "از طریق فرم رزرو آنلاین یا تماس با کلینیک می‌توانید نوبت خود را ثبت کنید."
  },
  {
    question: "آیا امکان پرداخت اقساطی وجود دارد؟",
    answer: "بله، برای برخی خدمات شرایط پرداخت اقساطی در نظر گرفته شده است."
  },
  {
    question: "ساعات کاری کلینیک چگونه است؟",
    answer: "شنبه تا پنجشنبه از ساعت ۹ صبح تا ۹ شب."
  },
  {
    question: "آیا خدمات زیبایی دندان انجام می‌دهید؟",
    answer: "بله، کامپوزیت، لمینت، بلیچینگ و طراحی لبخند انجام می‌شود."
  }
];

function Faq() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq">
      <div className="section-title">
        <h2>سوالات متداول</h2>
        <p>پاسخ رایج‌ترین سوالات بیماران</p>
      </div>

      <div className="faq-container">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >
              {item.question}
              <span>{active === index ? "−" : "+"}</span>
            </button>

            {active === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;