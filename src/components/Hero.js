import React, { useState } from "react";
import avatar from "../images/avatar.png";
import avatar480w from "../images/avatar-mobile.png";
import data from "../data.json";
const Hero = () => {
  const [id, setId] = useState(1);
  return (
    <div className="hero-container">
      <div className="hero-container--text">
        <p>Lorem ipsum</p>
        {data.map((item) =>
          item.id === id ? (
            <>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </>
          ) : (
            ""
          )
        )}

        <div className="hero-container--btns">
          <button
            className={`btn ${id === 1 ? "active" : ""}`}
            onClick={() => setId(1)}
          >
            About 1
          </button>
          <button
            className={`btn btn-outline ${id === 2 ? "active" : ""}`}
            onClick={() => setId(2)}
          >
            About 2
          </button>
        </div>
      </div>
      <div className="hero-container--image">
        <img
          srcSet={`${avatar480w} 600w, ${avatar} 768w`}
          src={avatar}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Hero;
