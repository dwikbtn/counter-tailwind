import React from "react";

export default function SetTimer() {
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [totalSec, setTotal] = useState();

  const setTimer = () => {
    if (minute > 60 || hour > 24) {
      return alert(
        "Invalid hour or Minute, /n hour must be around 0-24, minute must be arround 0-60"
      );
    } else {
      //convert to number
      const minToSec = minute * 60;
      const hourToSec = hour * 3600;
      const totalSecond = hourToSec + minToSec;
      return setTotal(totalSecond);
    }
  };
  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-center">
      {/* input timer */}
      <section id="input-timer">
        <div className="card-input w-full h-full">
          <span className="text-sm font-light text-gray-700 my-2">
            Input time
          </span>
          {/* timer secttion */}
          <div className="flex justify-center w-auto h-auto mb-3">
            <div className="">
              <label className="Hours flex justify-center items-center flex-col ">
                <span className="mb-1">Hours</span>
                <input
                  type="number"
                  className="number-input"
                  max="23"
                  min="0"
                  name="hour"
                  id="hour"
                  value={hour}
                  onChange={(e) => setHour(parseInt(e.target.value))}
                />
              </label>
            </div>
            <div className="ml-10 ">
              <label className="Minutes justify-center items-center flex flex-col w-full">
                <span className="text-center mb-1">Minutes</span>
                <input
                  type="number"
                  className="number-input"
                  max="60"
                  name="minute"
                  id="minutes"
                  min="0"
                  onChange={(e) => setMinute(parseInt(e.target.value))}
                  value={minute}
                />
              </label>
            </div>
          </div>
          <button type="submit" onClick={setTimer}>
            Set Timer
          </button>
        </div>
      </section>
    </div>
  );
}
