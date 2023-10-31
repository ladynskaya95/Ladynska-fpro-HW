import React from "react";

const SideBar = () => {
  const randomSidebarItems = ["Пункт меню 1", "Пункт меню 2", "Пункт меню 3"];
  return (
    <div className="sidebar">
      <ul>
        {randomSidebarItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
