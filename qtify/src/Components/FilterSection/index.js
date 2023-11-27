import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Carousel from "../Carousel";
import "./filter.css";

const FilterSection = ({ title, data, btnId, executeFilter, filters }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="section">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          executeFilter(filters[value].key);
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--css-primary)",
          },
        }}
      >
        {filters.map((f) => (
          <Tab className="tab" key={f.key} label={f.label} />
        ))}
      </Tabs>
      <Carousel btnId={btnId} data={data} />
    </div>
  );
};
export default FilterSection;
