import React, { useState } from "react";
import "./HomePage.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if(name != ""){
      window.localStorage.setItem("name", name);
      document.getElementById("text-entry").classList.add("anime");
      setTimeout(function () {
        navigate("/result");
      }, 2000);
    }else{
      alert("Please Enter Youre name")
    }

  };

  const handle = () => {

  };

  return (
    <div>
      <div className="form-box" id="text-entry">
        <div className="form">
          <h3>KNOW YOUR FUTURE</h3>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            type="text"
            placeholder="Enter Your Name"
            className="name-input"
          ></input>
          <label htmlFor="date">DOB</label>
          <input
            id="date"
            type="date"
            className="name-input"
            onChange={(e) => {
              window.localStorage.setItem("dob", e.target.value);
            }}
          ></input>

          <label htmlFor="date">Country</label>
          <input
            id="text"
            type="item"
            className="name-input"
            placeholder="e.g,India,USA"
          ></input>
          <button
            className="bodyy"
            id="btn"
            type="button"
            onClick={() => {
              handle();
              handleClick();
            }}
          >
            Your Future
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
