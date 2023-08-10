import React from "react";
import Ball from "./Files/magic-8-ball.gif";
import Footer from "./Footer";
const Magic = () => {
  const getAnswer = () => {
    var answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
    ];
    var randomIndex = Math.floor(Math.random() * answers.length);
    document.getElementById("answer").innerText = answers[randomIndex];
    document.getElementById("answer").style.opacity = "1";
  };

  return (
    <body>
      <h1 id="a">Magic 8 Ball</h1>
      <button onClick={getAnswer}>Get Answer</button>
      <div id="answer" class="answer">
        
      </div>
      <img id="ball" src={Ball} alt="Animated GIF" />
      <Footer />
    </body>
  );
};
export default Magic;
