import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Cliff from "../../assets/image/Cliff.svg";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import data from "../../data/logements.json";

export default function Home() {
  return (
    <div className="home-container">
      <Banner props={Cliff} />
      <div className="home-card-container">
        <ul>
          {data.map((acc) => {
            return (
              <li key={acc.id}>
                <Link>
                  <Card
                    props={{
                      url: acc.cover,
                      title: acc.title,
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
