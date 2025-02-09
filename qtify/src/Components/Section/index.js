import React, { useState } from "react";
import "./section.css";
import Card from "../Card";
import Carousel from "../Carousel";

const Section = ({ btnId, title, data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="title">{title}</h1>
        <h1
          className="section-toggle-btn"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show all" : "collapse"}
        </h1>
      </div>
      {isCollapsed ? (
        <Carousel btnId={btnId} data={data} />
      ) : (
        <div className="card-container">
          {data.map((cardData) => (
            <Card
              key={cardData.id}
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
              numOfSongs={cardData.songs ? cardData.songs.length : ""}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Section;
