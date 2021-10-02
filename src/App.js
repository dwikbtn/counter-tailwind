function App() {
  // create input timer

  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-center">
      {/* input timer */}
      <section id="input-timer">
        <div className="card-input w-full h-full">
          <span className="text-sm font-light text-gray-600 my-2">
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
                  height="50"
                  width="50"
                  max="23"
                  min="0"
                  name="hour"
                  id="hour"
                />
              </label>
            </div>
            <div className="ml-10 ">
              <label className="Minutes justify-center items-center flex flex-col w-full">
                <span className="text-center mb-1">Minutes</span>
                <input
                  type="number"
                  className="number-input"
                  max="23"
                  name="minute"
                  id="minutes"
                  min="0"
                />
              </label>
            </div>
          </div>
          <button type="submit">Set Timer</button>
        </div>
      </section>
    </div>
  );
}

export default App;
