import React, { useState } from "react";

export default function ItemsCard({ id, title, label, weight }) {
  const [onHold, setOnHold] = useState(false);

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("cardInfo", JSON.stringify({ id }));
    e.target.className += " ohhold";
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };
  const dragEndHandler = () => {
    setOnHold(false);
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "card") {
      setTimeout(() => {
        e.target.className = "card anotherCardOnTop";
      }, 0);
    }
  };
  const onDragLeaveHandler = (e) => {
    resetClassName(e);
  };
  const onDropHandler = (e) => {
    resetClassName(e);
    /**  
     TODO: Remove all anotherCardOnTop classnames 
     from DOM after drop complete.
    */
  };

  const resetClassName = (e) => {
    e.preventDefault();
    let isCard =
      e.target.className === "card" ||
      e.target.className === "card anotherCardOnTop";
    if (isCard) {
      setTimeout(() => {
        e.target.className = "card";
      }, 0);
    }
  };

  return (
    <div
      id={id}
      className={`card ${onHold ? "hidden" : ""}`}
      draggable="true"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    >
      <div className="cardContent" /*style={{ display: "flex", flexDirection: "column", alignItems: "center" }}*/>
        <div className="cardTitle" /*style={{ textAlign: "center" }}*/>
          <img src="path_to_your_image.jpg" alt="Image" /*style={{ width: "auto", height: "150px" }} *//>
          <span>{title}</span>
        </div>
        <div className="cardWeight" /*style={{ textAlign: "center" }}*/>{weight}</div>
        <div className="cardFooter"></div>
      </div>
    </div>
  );
}
