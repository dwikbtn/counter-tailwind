import { useState } from "react";
import SetTimer from "./SetTimer";
function App() {
  // create input timer
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("0");
  const [hour, setHour] = useState("0");

  const getTime = (time) => {
    const countDown = setInterval(function () {
      let hours = parseInt(time / 3600, 10);
      let minutes = parseInt((time / 60) % 60, 10);
      let seconds = parseInt(time % 60, 10);

      setSecond(seconds);
      setMinute(minutes);
      setHour(hours);

      if (--time < 0) {
        alert("your time is up");
        clearInterval(countDown);
      }
    }, 1000);
  };

  return (
    <>
      <div className="bg-gray-400 min-h-screen flex justify-center items-center flex-col">
        {/* timer start here */}
        <div id="timer-container" className="text-center mb-10 ">
          <div className="timer-frame shadow-2xl">
            {/* display time */}

            {/* inner display */}
            <div className="inside-timer">{hour < 10 ? "0" + hour : hour}</div>
            <div className="inside-timer">
              {minute < 10 ? "0" + minute : minute}
            </div>
            <div className="inside-timer">{second}</div>
          </div>
        </div>
        <SetTimer getTime={getTime} />
      </div>
    </>
  );
}

export default App;
