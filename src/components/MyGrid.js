import React, { useState } from "react";
import "./StyleSheets/Grid.css";
import Algorithm from "./Algorithm";
import empty from "../images/empty.png";
import rottenorange from "../images/rottenorange.png";
import goodorange from "../images/goodorange.png";


const image = <img src={empty} alt="empty" />;
const rotten = <img src={rottenorange} alt="rotten" />;
const good = <img src={goodorange} alt="rotten" />;
function MyGrid({ rows, columns }) {
  const [grid, setGrid] = useState([]);
  const [displaygrid, setDisplaygrid] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  // const image=<img src={empty} alt="empty"/>

  React.useEffect(() => {
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => 0)
    );
    setGrid(newGrid);
  }, [rows, columns]);

  React.useEffect(() => {
    const newdisplayGrid = Array.from(Array(rows), () =>
      new Array(columns).fill(image)
    );
    setDisplaygrid(newdisplayGrid);
  }, [rows, columns]);

  // const displaygrid = Array.from(Array(rows),()=>new Array(columns).fill(image));

  function handleRadio(e){
    setSelectedOption(e.target.value);
  }

  function handleClick(row, col) {
    if (selectedOption === "fresh") {
      const newGrid = [...grid];
      newGrid[row][col] = 1 - newGrid[row][col];
      const newdisplayGrid = [...displaygrid];
      newdisplayGrid[row][col] = good;
      setDisplaygrid(newdisplayGrid);
      setGrid(newGrid);
    }
    if (selectedOption === "rotten") {
      const newGrid = [...grid];
      newGrid[row][col] = 2 - newGrid[row][col];
      const newdisplayGrid = [...displaygrid];
      newdisplayGrid[row][col] = rotten;
      setDisplaygrid(newdisplayGrid);
      setGrid(newGrid);
    }
  }

  const handleReset = () => {
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => 0)
    );
    const newdisplayGrid = Array.from(Array(rows), () =>
      new Array(columns).fill(image)
    );
    setGrid(newGrid);           // Reset the grid data
    setDisplaygrid(newdisplayGrid);  // Reset the displayed grid
  };

  return (
    <div className="container4">
      <div className="child4 radiogrid">
        <div className="container5">
          <div className="child5 radio">
          <label className="ui label">
            <input
              type="radio"
              value="fresh"
              checked={selectedOption === "fresh"}
              onChange={handleRadio}
            />
            Fresh
          </label>
          <label className="ui label">
            <input
              type="radio"
              value="rotten"
              checked={selectedOption === "rotten"}
              onChange={handleRadio}
            />
            Rotten
          </label>
        </div>
        <div className="child5 grid">
        <div className="grid">
          {displaygrid.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <span
                  className="cell"
                  key={`${rowIndex}-${columnIndex}`}
                  onClick={() => handleClick(rowIndex, columnIndex)}
                >
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
        </div>
        
      
        <button className="ui button" onClick={handleReset}>Reset Grid</button>

      </div>
      </div>
      <div className="child4 result">
      <Algorithm grid={grid} />
      </div>
    </div>
  );
}

export default MyGrid;
