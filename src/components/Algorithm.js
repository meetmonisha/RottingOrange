import React, { useState } from "react";
import './StyleSheets/Grid.css'


function Algorithm(props) {
  const grid = props.grid;
  const [result, setResult] = useState(0);

  const orangesRotting = function () {
    let minutes = 0;
    let rottens = [];
    let freshCount = 0;
    let ans=0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 2) {
          rottens.push({ row: i, col: j });
        }

        if (grid[i][j] === 1) {
          freshCount++;
        }
      }
    }

    if (rottens.length > 0) {
      let currRottens = [];

      while (rottens.length) {
        for (let i = 0; i < rottens.length; i++) {
          const { row, col } = rottens[i];

          const topRow = row - 1;
          const bottomRow = row + 1;
          const leftCol = col - 1;
          const rightCol = col + 1;

          if (grid[topRow]?.[col] === 1) {
            currRottens.push({ row: topRow, col });
            grid[topRow][col] = 2;
          }

          if (grid[row][rightCol] === 1) {
            currRottens.push({ row, col: rightCol });
            grid[row][rightCol] = 2;
          }

          if (grid[bottomRow]?.[col] === 1) {
            currRottens.push({ row: bottomRow, col });
            grid[bottomRow][col] = 2;
          }

          if (grid[row][leftCol] === 1) {
            currRottens.push({ row, col: leftCol });
            grid[row][leftCol] = 2;
          }
        }

        if (currRottens.length > 0) {
          minutes++;
          rottens = currRottens;
          freshCount -= currRottens.length;
          currRottens = [];
        } else {
          rottens = [];
        }
      }
    }
    if(freshCount){
      ans=-1
    }
    else{
      ans=minutes
    }
    
    setResult(ans)
  };



  return (
    <div>
      <br/>
      <div className="calculate">
      <button className="ui button" onClick={orangesRotting}>Calculate</button> 
      </div>
      <div className="result">
      <label> Total Minutes taken to Rotten : 
        <br/>
      <h2 className="sqaure">{result}</h2>
      </label>
      </div>
    </div>
  );
}
export default Algorithm;
