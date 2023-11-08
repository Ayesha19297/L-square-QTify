import { ReactComponent as SearchIcon } from "./SearchIcon.svg";
import "./Search.css";

export default () => {
  return (
    <form className="form">
      <input placeholder="Search an album of your choice" className="input" />
      <button className="search">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  );
};
