// 1)

function Arr(array) {
   let arr = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arr.push(array[i]);
      }
   }
   return arr;
}
console.log(Arr([1, 2, 57, 8, 5]));

// 2)

var consecutive = function (n) {
   let countValue = 0;
   let count = 0;
   for (let i = 0; i < n.length; i++) {
      if (n[i] === 0) {
         count = 0;
      } else {
         count++;
      }
      if (count > countValue) {
         countValue = count;
      }
   }
   return countValue;
};

console.log(consecutive([0, 0, 1, 0, 0, 1, 1]));

// 3)

const repeated = (arr1) => {
   let arr2 = arr1.sort();
   let dup = [];
   for (let i = 0; i < arr2.length - 1; i++) {
      if (arr2[i + 1] == arr2[i]) {
         dup.push(arr2[i]);
      }
   }
   dup.shift();
   return dup;
};
console.log(repeated([0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]));

// 4)

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

// 5) skipped
