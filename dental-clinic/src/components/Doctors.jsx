import "./Doctors.css";

const doctors = [
  {
    name: "دکتر علی محمدی",
    specialty: "متخصص ایمپلنت",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "دکتر سارا احمدی",
    specialty: "متخصص ارتودنسی",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "دکتر محمد رضایی",
    specialty: "متخصص زیبایی دندان",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

function Doctors() {
  return (
    <section className="doctors" id="doctors">
      <div className="section-title">
        <h2>تیم پزشکان</h2>
        <p>متخصصان مجرب و حرفه‌ای در کنار شما</p>
      </div>

      <div className="doctor-grid">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <span>{doctor.specialty}</span>
            <button>رزرو نوبت</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Doctors;