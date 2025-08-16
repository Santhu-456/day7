import React from "react";

const DisplayCard = ({ theme }) => {
  console.log("[Memoized] Child component rendered");
  return (
    <div className={`card ${theme}`}>
      <h3>Theme: {theme === "dark" ? "Dark Mode" : "Light Mode"}</h3>
    </div>
  );
};

export default React.memo(DisplayCard);
