import React from "react";
import car from "./car.jpg";
import content from "./content.module.css";

export const Content = () => (
    <div>
        <img src={car} className={content.car}  alt={'a car'}/>
    </div>
);