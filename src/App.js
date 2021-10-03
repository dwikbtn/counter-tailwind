import SetTimer from "./SetTimer";
function App() {
  // create input timer
  const getTime = (time) => {
    console.log("time", time);
  };
  return (
    <>
      <div className="bg-gray-400 min-h-screen flex justify-center items-center flex-col">
        {/* timer start here */}
        <div id="timer-container" className="text-center mb-4">
          <div className="timer-frame">
            {/* display time */}

            {/* inner display */}
            <div className="w-28 h-20 bg-timerBg flex justify-center items-center text-white">
              11
            </div>
            <div className="w-28 h-20 bg-timerBg flex justify-center items-center text-white ml-3">
              11
            </div>
          </div>
        </div>
        <SetTimer getTime={getTime} />
      </div>
    </>
  );
}

export default App;
