import Button from "../Button";
import SearchBar from "../SearchBar";
import "./Navbar.css";

export default () => {
  return (
    <div className="navbar">
      <img src="./qtifyLogo.png" alt="qtify" />
      <SearchBar />
      <button className="button">Give Feedback</button>
    </div>
  );
};
