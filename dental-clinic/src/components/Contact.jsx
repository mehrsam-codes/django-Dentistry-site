import "./Contact.css";

function Contact() {
  return (
    <section className="appointment" id="appointment">
      <div className="appointment-container">
        <div className="appointment-info">
          <h2>رزرو آنلاین نوبت</h2>
          <p>
            فرم زیر را تکمیل کنید تا کارشناسان ما در اولین فرصت با شما تماس
            بگیرند.
          </p>
        </div>

        <form className="appointment-form">
          <input type="text" placeholder="نام و نام خانوادگی" />

          <input type="tel" placeholder="شماره موبایل" />

          <select>
            <option>انتخاب خدمت</option>
            <option>ایمپلنت</option>
            <option>ارتودنسی</option>
            <option>کامپوزیت</option>
            <option>بلیچینگ</option>
          </select>

          <select>
            <option>انتخاب پزشک</option>
            <option>دکتر علی محمدی</option>
            <option>دکتر سارا احمدی</option>
          </select>

          <input type="date" />

          <input type="time" />

          <textarea rows="5" placeholder="توضیحات"></textarea>

          <button type="submit">ثبت درخواست</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;