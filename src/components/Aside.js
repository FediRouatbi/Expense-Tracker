import React from "react";
import "./aside.scss";


import Title from "./Title";
import Recurred from "./Recurred";
const Aside = () => {
  return (
    <aside className="aside">
      
      <Title text="Recurring" />
      <div className="expense">
        <Recurred />
      </div>
    </aside>
  );
};

export default Aside;
