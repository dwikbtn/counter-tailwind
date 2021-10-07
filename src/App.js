function App() {
  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-center flex-col">
      {/* timer start here */}
      <div id="timer-container" className="text-center mb-10 ">
        <div className="timer-frame shadow-2xl">
          {/* display time */}

          {/* inner display */}
          <div className="inside-timer">04</div>
          <div className="inside-timer">04</div>
          <div className="inside-timer">04</div>
        </div>
      </div>
    </div>
  );
}

export default App;
