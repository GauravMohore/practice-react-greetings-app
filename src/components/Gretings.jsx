import React from "react";
import Clock from "./Clock";
import "../index.css";

let currentHours = new Date(2023, 1, 1, 13).getHours();
let greetings = "";
let textColor = {
  color: "black",
};
let classGreet = "morningBG";

if (currentHours >= 1 && currentHours < 12) {
  textColor.color = "rgb(97, 163, 34)";
  greetings = "Good Morning";
  classGreet = "morningBG";
} else if (currentHours >= 12 && currentHours < 18) {
  textColor.color = "rgb(212, 104, 46)";
  greetings = "Good Afternoon";
  classGreet = "afternoonBG";
} else if (currentHours >= 18 && currentHours < 21) {
  textColor.color = "rgb(237, 78, 99)";
  greetings = "Good Evening";
  classGreet = "eveningBG";
} else {
  textColor.color = "rgb(151, 65, 248)";
  greetings = "Good Night";
  classGreet = "nightBG";
}

export default function Greetings() {
  return (
    <>
      <div className={classGreet}>
        <h1>
          Hello, <span style={textColor}>{greetings}</span>
        </h1>
        {/* <Clock /> */}
      </div>
    </>
  );
}
