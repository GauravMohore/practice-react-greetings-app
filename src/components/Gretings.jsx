import React from "react";
import "../index.css";

let currentHours = new Date().getHours();
let greetings = "";
let textColor = {
  color: "black",
};

if (currentHours >= 1 && currentHours < 12) {
  textColor.color = "rgb(97, 163, 34)";
  greetings = "Good Morning";
} else if (currentHours >= 12 && currentHours < 18) {
  textColor.color = "rgb(212, 104, 46)";
  greetings = "Good Afternoon";
} else if (currentHours >= 18 && currentHours < 21) {
  textColor.color = "rgb(237, 78, 99)";
  greetings = "Good Evening";
} else {
  textColor.color = "rgb(151, 65, 248)";
  greetings = "Good Night";
}

export default function Greetings() {
  return (
    <>
      <div>
        <h1>
          Hello, <span style={textColor}>{greetings}</span>
        </h1>
      </div>
    </>
  );
}
