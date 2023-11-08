import "./card.css";

export default () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img src="./headphone.png" className="card-img" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">100 follows</span>
        </div>
      </div>
      <p className="card-label">New english songs</p>
    </div>
  );
};
