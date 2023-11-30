import { Tooltip } from "@mui/material";
import "./card.css";

const Card = ({ imgSrc, followersCount, label, numOfSongs }) => {
  return (
    <>
      <Tooltip
        title={numOfSongs ? `${numOfSongs} songs` : ""}
        placement="top"
        arrow
      >
        <div className="card-wrapper">
          <div className="card">
            <div className="card-img-frame">
              <img src={imgSrc} alt={label} className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-content-pill">
                {followersCount} follows
              </span>
            </div>
          </div>
          <p className="card-label">{label}</p>
        </div>
      </Tooltip>
    </>
  );
};

export default Card;
