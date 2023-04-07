import React from "react";
import './About.css'
import Banner from "../../components/banner/Banner";
import Mountain from '../../assets/image/Mountain.svg'

export default function About() {
  return (
    <div className="about-container">
      <Banner props={Mountain}/>
    </div>
  );
}
