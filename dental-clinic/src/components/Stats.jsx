import "./Stats.css";

const stats = [
  {
    number: "+5000",
    title: "بیمار راضی",
  },
  {
    number: "15+",
    title: "سال تجربه",
  },
  {
    number: "12",
    title: "پزشک متخصص",
  },
  {
    number: "4.9★",
    title: "امتیاز کاربران",
  },
];

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;