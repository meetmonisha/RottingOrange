import React, { useState } from "react";
import Header from "./Header";
import MyGrid from "./MyGrid";
import GetRowsColumns from "./GetRowsColumns";
import ProblemDetails from "./ProblemDetails";
import "./StyleSheets/FirstPage.css";


function FirstPage() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  const RowsColumnsHandler = (row, column) => {
    setRows(row);
    setColumns(column);
  };
  return (
    <div>
      <Header />
      <div className="conatiner_2">
        <div className="child2 details">
          <div className="container_3">
            <div className="child3 des">
              <ProblemDetails />
            </div>
            <div className="child3 rows&cols">
              <GetRowsColumns RowsColumnsHandler={RowsColumnsHandler} />
            </div>
          </div>
        </div>
        <div className="child2 grid">
          <MyGrid rows={rows} columns={columns} />
        </div>
        
      </div>

    </div>
  );
}

export default FirstPage;
