import React, { useEffect, useState } from "react";
import "./Result.css";
const Result = () => {
  const bestyearArray = [
    "Will be best year of your life , this year you will be achieving the sky and no one is gonna stop you! but you have to be consistent",
    "Is not going to be very good year of your life and you can feel lonely during whole year, so be ready for that!",
    " Is going to worst year of your life .Unfortunately,this year can be your downfall year!!But stay positive 'every thing is for the best'",
    "Will be nothing special for you",
  ];
  const bestYear = Math.floor(Math.random() * bestyearArray.length);
  const bestYearDetails = bestyearArray[bestYear];

  const yearArray1 = [
    "2025",
    "2026",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
  ];
  const bestYear1 = Math.floor(Math.random() * yearArray1.length);
  const bestYear1Detail = yearArray1[bestYear1];

  const quoteString = [
    "“When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.”",
    "“Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.”",
    " “Waking up this morning, I smile. 24 brand new hours are before me. I vow to live fully in each moment.”",
    "“Every day brings you a chance to draw in a breath, kick off your shoes and dance.”",
    "“Today is a new day. Even if you were wrong yesterday, you can get it right today.”",
    "“It*s a beautiful day, the sun is shining, I feel good, and no one*s gonna stop me now.”",
    "“I hope everyone that is reading this is having a really good day. And if you are not, just know that in every new minute that passes you have an opportunity to change that.”",
  ];
  const i = Math.floor(Math.random() * quoteString.length);
  const randomQuote = quoteString[i];

  const [nameMessage, setNameMessage] = useState("");
  const [messageZ, setsetMessageZ] = useState("");

  useEffect(() => {
    const getName = window.localStorage.getItem("name");
    const detail = document.getElementById("message").innerHTML;

    if (getName && getName.charAt(0) === "M") {
      setNameMessage("Simha/LEO");
      setsetMessageZ(
        "Leo lions are said to be proud and brave while sometimes getting a little too arrogant or competitive."
      );
    } else if (getName && getName.charAt(0) === "B") {
      setNameMessage("Dhanu/SAGITTARIUS");
      setsetMessageZ(
        "Sagittarians are said to be highly independent adventurers who are always full of imagination. On the flip side, they are also said to be blunt and impatient."
      );
    } else if (getName && getName.charAt(0) === "P") {
      setNameMessage("Kanya/VIRGO");
      setsetMessageZ(
        "Virgos are said to be diligent and organized. At the same time, Virgos are said to be overly critical perfectionists who tend to worry a lot."
      );
    } else if (getName && getName.charAt(0) === "D") {
      setNameMessage("Karka/Cancer");
      setsetMessageZ(
        "The crabs of Cancer are said to be charitable people and loyal friends. On the other hand, they also tend to be blunt and are known to get … crabby when someone tries to get them out of their shells."
      );
    } else if (getName && getName.charAt(0) === "G") {
      setNameMessage("Kumbha/Aquarius");
      setsetMessageZ(
        "Aquarians are said to be assertive and creative. Aquarians are also said to be impulsive loners."
      );
    } else if (
      (getName && getName.charAt(0) === "K") ||
      getName.charAt(0) === "J"
    ) {
      setNameMessage("Makar/Capricorn");
      setsetMessageZ(
        "On the plus side, Capricorns are said to be tenacious and pragmatic. At the same time, Capricorns are said to be sticklers for the rules and ferocious when upset."
      );
    } else if (
      (getName && getName.charAt(0) === "C") ||
      getName.charAt(0) === "Z"
    ) {
      setNameMessage("Meena/Pisces");
      setsetMessageZ(
        " A stereotypical Pisces is said to be an adventurous, compassionate person who may get a little too anxious or needy."
      );
    } else if (
      (getName && getName.charAt(0) === "A") ||
      getName.charAt(0) === "I" ||
      getName.charAt(0) === "L"
    ) {
      setNameMessage("Mesha/Aries");
      setsetMessageZ(
        " The rams of Aries are said to be confident and fiery people. However, they may butt heads with others because they are infamously impatient and honest with their opinions."
      );
    } else if (getName && getName.charAt(0) === "Q") {
      setNameMessage("Mithun/Gemini");
      setsetMessageZ(
        "People rocking the twins are said to be highly intelligent and sociable. On the other hand, they are also said to be superficial and indecisive."
      );
    } else if (getName && getName.charAt(0) === "T") {
      setNameMessage("Tula/LIBRA");
      setsetMessageZ(
        "Libra is famously the sign of clever extroverts. These social butterflies are also said to be vain and hate making tough decisions."
      );
    } else if (
      (getName && getName.charAt(0) === "Q") ||
      getName.charAt(0) === "R"
    ) {
      setNameMessage("Mithun/Gemini");
      setsetMessageZ(
        "Libra is famously the sign of clever extroverts. These social butterflies are also said to be vain and hate making tough decisions."
      );
    } else if (
      (getName && getName.charAt(0) === "U") ||
      getName.charAt(0) === "W"
    ) {
      setNameMessage("Vrishabha/Taurus");
      setsetMessageZ(
        "Taurus bulls are said to be loyal and persistent. At the same time, these bulls are often stereotyped as being lazy and, appropriately, bullheaded."
      );
    } else if (
      (getName && getName.charAt(0) === "N") ||
      getName.charAt(0) === "Y"
    ) {
      setNameMessage("Vruschika/Scorpio");
      setsetMessageZ(
        "The scorpions of Scorpio are said to be magnetic thrill-seekers. Scorpios are also often said to be envious and fascinated by the macabre."
      );
    } else {
      console.log("No name found");
    }
  }, []);

  return (

    <div className="layout-box">

      <div className="myform">

        <h3>Quote that suits your attitude?</h3>
        <h4 style={{ fontSize: "18px" }} id="nameh4">
          {window.localStorage.getItem("name")}
        </h4>

        <p id="day">{`   ` + randomQuote}</p>
      </div>
      <div className="myform">
        <h3>In Upcomming years of your life~</h3>
        <h4 style={{ fontSize: "18px" }}>YEAR : "{bestYear1Detail}"</h4>
        <p>{bestYearDetails}</p>
      </div>
      <div className="myform">
        <h3>Your Zodiac Sign?</h3>
        <h4 id="myidname" style={{ fontSize: "18px" }}>
          {nameMessage}
        </h4>
        <p id="message">{messageZ} </p>
      </div>
    </div>
  );
};

export default Result;
