import React from "react";
import style from "./location-map.module.css";

function LocationMap() {
  return (
    <div className={style.container}>
      <div className={style.building1}>building 1</div>
      <div className={style.building2}>building 2</div>
      <div className={style.building3}>building 3</div>
    </div>
  );
}

export default LocationMap;
