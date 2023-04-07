import React from "react";
import './Home.css';
import Cliff from '../../assets/image/Cliff.svg'

import Banner from "../../components/banner/Banner";

export default function Home() {
  return (
    <div className="home-container"> 
       <Banner props={Cliff}/>
    </div>
  );
}
