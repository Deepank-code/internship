import React, { useState } from "react";
import "./App.css";
import Assignment from "./Components/Assignment";

let changevalue = "";
function App() {
  const [assignment, setassigment] = useState([]);
  const [missing, setmissing] = useState([]);
  const [done, setdone] = useState([]);

  function handleAssign(event) {
    changevalue = event.target.name;
    console.log(changevalue);
    //dummy data
    setassigment([
      { id: 1, assignment: "Assignment 1" },
      { id: 2, assignment: "Assignment 2" },
      { id: 3, assignment: "Assignment 3" },
    ]);
  }
  function handleDone(event) {
    changevalue = event.target.name;
    console.log(changevalue);
    //dummy data
    setdone([
      { id: 1, assignment: " Done Assignment 1" },
      { id: 2, assignment: " Done Assignment 2" },
      { id: 3, assignment: " Done Assignment 3" },
    ]);
  }
  function handleMissing(event) {
    changevalue = event.target.name;
    console.log(changevalue);
    setmissing([
      { id: 1, assignment: " Missing Assignment 1" },
      { id: 2, assignment: "Missing Assignment 2" },
    ]);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <ul>
            <button
              className="btn first"
              onClick={handleAssign}
              name="assignment"
            >
              Assignment
            </button>
            <button
              className="btn second"
              onClick={handleMissing}
              name="missing"
            >
              Missing
            </button>
            <button className="btn third" onClick={handleDone} name="done">
              Done
            </button>
            {/* <div className="btn first" onClick={handleAssign}>
              <li>
                <a href="#" name="assignment"></a>
              </li>
            </div>
            <div className="btn second" onClick={handleMissing}>
              <li>
                <a href="#" name="missing">
                  Missing
                </a>
              </li>
            </div>
            <div className="btn third" onClick={handleDone}>
              <li>
                <a href="#" name="done">
                  Done
                </a>
              </li>
            </div> */}
          </ul>
        </div>
        <div className="assignment-part">
          {changevalue === "assignment"
            ? assignment.map((assign) => {
                return <Assignment assign={assign.assignment} />;
              })
            : null}
          {changevalue === "missing"
            ? missing.map((assign) => {
                return <Assignment assign={assign.assignment} />;
              })
            : null}
          {changevalue === "done"
            ? done.map((assign) => {
                return <Assignment assign={assign.assignment} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
