import React, { useState, useEffect } from "react";
import "./styles.css";
import "./vday.css"

const Game = () => {
  const [stage, setStage] = useState(1);
  const [heartsCollected, setHeartsCollected] = useState(0);
  const [heartPosition, setHeartPosition] = useState({ x: 50, y: 50 });
  const [noClicks, setNoClicks] = useState(0);
  const [yesClicks, setYesClicks] = useState(0);

  const tenorEmbeds = [
    ["/manja.gif", "روان اضغط على نعم ❤️"],
    ["/No1.gif", "روان اضغط على نعم من فضلك 🙏"],
    ["/No2.gif", "روان اضغط على نعم متقلقنيش 😭"],
    ["/yes.gif", "اضغط على نعم وبلعي 😘"]
  ];

  useEffect(() => {
    if (heartsCollected < 5) {
      setHeartPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10
      });
    } else {
      setStage(2);
    }
  }, [heartsCollected]);

  const handleHeartClick = () => {
    setHeartsCollected(heartsCollected + 1);
  };

  const handleNoClick = (e) => {
    if (noClicks < 2) {
      setNoClicks(noClicks + 1);
    }
    if (noClicks >= 2) {
      e.target.style.position = "absolute";
      e.target.style.top = Math.floor(Math.random() * 90 + 5) + "%";
      e.target.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }
  };

  const handleYesClick = () => {
    if (yesClicks < 0) {
      setStage(4);
    } else {
      setStage(4);
    }
  };

  return (
    <div className="game-container">
      {stage === 1 && (
        <div className="heart-stage">
          <h2>اجمع القلوب حتى تصل إلى 5! ❤️</h2>
          <p>القلوب المجمعة: {heartsCollected}/5</p>
          <span
            className="heart"
            style={{ top: `${heartPosition.y}%`, left: `${heartPosition.x}%` }}
            onClick={handleHeartClick}
          >❤️</span>
        </div>
      )}

      {stage === 2 && (
        <div className="question-stage">
          <h1>هل تحبني؟ 😍</h1>
          <img src={tenorEmbeds[noClicks][0]} alt="GIF" width="300px" />
          <h2>{tenorEmbeds[noClicks][1]}</h2>
          <div className="btn">
            <button onClick={handleYesClick}>نعم</button>
            {noClicks < 3 ? (
              <button onClick={handleNoClick}>لا</button>
            ) : null}
          </div>
        </div>
      )}

{stage === 4 && (
  <div className="valentines_card">
    <div className="front_card">
      <img src="/vday.png" className="front_img" alt="Valentine Front" />
      <div className="front_text">
        <h3>إليك رسالة مليئة بالحب والمودة...</h3>
      </div>    
    </div>
    <div className="inside_card">
      <img src="/inside.png" className="inside_img" alt="Valentine Inside" />
      <div>
        <audio controls autoPlay>
          <source src="/MadeForMe.mp3" type="audio/mp3" />
          متصفحك لا يدعم تشغيل الصوت.
        </audio>  
      </div>
      <div className="inside_text">
        <h4>...من قلب يعشقك أكثر مما تستطيع الكلمات أن تصف! 💖</h4>
        <h3>أتمنى لك حياة طيبة  واجمل وحب مليئًا بالسعادة والدفء، تمامًا كما تملأ حياتي حبًا وفرحًا! ❤️</h3>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Game;
