import React,{useState} from "react";
import './StyleSheets/GetRowsColumns.css'
// import { Link } from "react-router-dom";

function GetRowsColumns(props) {
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'rows') {
          setRows(parseInt(value));
        } else if (name === 'columns') {
          setColumns(parseInt(value));
        }
        
      };
      
    const process=(e)=>{
        e.preventDefault();
        if(rows===0 || columns===0){
          alert("Rows and Columns are Required!!")
        }
        
        props.RowsColumnsHandler(rows,columns)
    }

  return (
    <div>
      <form className="ui form " onSubmit={process}>
        <h3>Enter Rows and Columns</h3>
        <div className="field">
        <label id="label">Rows:</label> 
        <input type="number" min="0" max="9" name="rows" placeholder="Enter No.of Rows" onChange={handleInputChange} />
        </div>
        <div className="field">
        <label id="label">Columns:</label> 
        <input type="number" min="1" max="9" name="columns" placeholder="Enter No.of Columns" onChange={handleInputChange}/>
        </div>
        <br/>
        
        <button className="ui button" >Make Grid</button>
        {/* <Link to='/grid'>
          <button className="ui button blue" >Go to Grid</button>
       </Link> */}
        


      </form>
      
     </div>
  );
}

export default GetRowsColumns;
