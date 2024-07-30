import "./Features.scss";

const Features = () => {
  return (
    <section className="features">
      <h2>The Feature Of Carlio Engine Oil That You Will Benefit From</h2>
      <div className="features-list">
        <div className="feature-item">
          <img src="/path/to/high-quality.png" alt="High Quality Product" />
          <p>High quality product</p>
        </div>
        <div className="feature-item">
          <img src="/path/to/cleaning.png" alt="Cleaning of Debris" />
          <p>Cleaning of debris</p>
        </div>
        <div className="feature-item">
          <img src="/path/to/engine-protection.png" alt="Engine Protection" />
          <p>Engine protection</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
