import React, { useState } from "react";

function TodoApp() {
   const [inputData, setInputData] = useState("");
   const [arrData, SetArrData] = useState([]);

   const addItem = (e) => {
      setInputData(e.target.value);
   };
   const addItemsArr = () => {
      SetArrData((oldData) => {
         return [...oldData, inputData];
      });
      setInputData("");
   };
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="card mt-5">
                     <div className="card-header d-flex justify-content-center form-group align-items-center">
                        <div className="col-md-11">
                           <input
                              className="form-control"
                              type="text"
                              value={inputData}
                              placeholder="Enter the list"
                              onChange={addItem}
                           />
                        </div>
                        <div className="col-md-1">
                           <button
                              className="btn btn-primary rounded-circle"
                              onClick={addItemsArr}
                           >
                              +
                           </button>
                        </div>
                     </div>
                     <div className="card-body">
                        {arrData.map((data, i) => {
                           return <li key={i}>{data}</li>;
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default TodoApp;
