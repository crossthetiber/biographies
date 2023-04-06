import { Link } from "gatsby";
import React from "react";
import Navbar from "./Navbar";

type Props = {
  homeFlag?: boolean
};

const Banner = ({ homeFlag }: Props) => {

  let homeClass = "banner"
  if (homeFlag) {
    homeClass = "banner home"
  }

  return (
    <div className={homeClass}>
      <div className="frame">
        <a href="/"><h1>Book of <br />Remembrance</h1></a>
        {/* <h1>Book of <br />Remembrance</h1> */}
        <h2>Biographies of Catholic Clergy and Laity Repressed in the Soviet Union (USSR) from 1918 to 1953</h2>
        <div className="mark">
          <div className="">
            <img src="https://static.nd.edu/images/marks/black/ndmark.svg" alt="University of Notre Dame" className="css-9taffg" width="200" height="48"></img>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Banner;
