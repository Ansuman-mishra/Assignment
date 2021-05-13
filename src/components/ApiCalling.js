import React, { useEffect, useState } from "react";
import Axios from "axios";

function ApiCalling() {
   const [data, setData] = useState();

   useEffect(() => {
      const dataURL = "www.example.com/api/get/1";
      Axios.get(dataURL).then((res) => {
         let data = res.stingify();
         console.log(data);
         setData(data);
      });
   }, []);
   return (
      <>
         <h1>{data}</h1>
      </>
   );
}

export default ApiCalling;
