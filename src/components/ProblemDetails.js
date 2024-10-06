import React from "react";
import "./StyleSheets/GetRowsColumns.css";

const ProblemDetails = () => {
  return (
    <div>
      <p>
       <h3>Description:</h3>
       <p>You are given a <strong>m x n</strong> grid representing a collection of oranges:</p>
      <ul>
        <li><strong>Empty cells</strong> are represented by an empty space.</li>
        <li><strong>Fresh oranges</strong> are shown with an image of a fresh orange.</li>
        <li><strong>Rotten oranges</strong> are shown with an image of a rotten orange.</li>
      </ul>
      <p>
        Every minute, any <strong>fresh orange</strong> that is adjacent (up, down, left, or right) to a <strong>rotten orange</strong> will rot and turn into a rotten orange.
      </p>
      <p>
        Your task is to determine the <strong>minimum number of minutes</strong> that must pass until there are <strong>no fresh oranges</strong> left. If it's <strong>impossible</strong> to rot all the fresh oranges, return <code>-1</code>.
      </p>
      

      </p>
    </div>
  );
};

export default ProblemDetails;
