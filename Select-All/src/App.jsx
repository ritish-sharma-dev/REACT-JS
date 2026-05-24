// import React, { useState } from "react";

// const App = () => {
//     const [allSelected, setAllSelected] = useState(false);
//     const [conditions, setConditions] = useState([false, false, false, false]);

//     const selectAllHandler = () => {
//         if (!allSelected) {
//             setAllSelected(true);
//             setConditions(
//                 conditions.map((status) => {
//                     return true;
//                 }),
//             );
//         } else {
//             setAllSelected(false);
//             setConditions(
//                 conditions.map((status) => {
//                     return false;
//                 }),
//             );
//         }
//     };

//     const conditionHandler = (e) => {
//         let id = Number(e.target.id);
//         console.log(id);
//         let newConditions = [...conditions];
//         newConditions[id] = !newConditions[id];
//         console.log(newConditions);
//         let allSelected = newConditions.every((status) => status == true);
//         console.log(allSelected);
//         if (allSelected) {
//             setAllSelected(true);
//             setConditions(
//                 newConditions.map((status) => {
//                     return true;
//                 }),
//             );
//         } else {
//             setAllSelected(false);
//             setConditions(
//                 conditions.map((status) => {
//                     return false;
//                 }),
//             );
//         }
//         setConditions(newConditions);
//     };

//     return (
//         <div>
//             <input type="checkbox" checked={allSelected} onClick={selectAllHandler} />{" "}
//             Select All
//             <input
//                 id="0"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[0]}
//             />{" "}
//             Condition 1
//             <input
//                 id="1"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[1]}
//             />{" "}
//             Condition 2
//             <input
//                 id="2"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[2]}
//             />{" "}
//             Condition 3
//             <input
//                 id="3"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[3]}
//             />{" "}
//             Condition 4
//         </div>
//     );
// };

// export default App;






// import React, { useEffect, useState } from "react";

// const App = () => {
//     const [allSelected, setAllSelected] = useState(false);
//     const [conditions, setConditions] = useState([false, false, false, false]);

//     const selectAllHandler = () => {
//         setAllSelected((allSelected) => !allSelected);
//         console.log(allSelected);
//     };

//     useEffect(()=>{
//         console.log(allSelected)
//     },[allSelected])
//     const conditionHandler = (e) => {
//         let id = Number(e.target.id);
//         console.log(id);
//         let newConditions = [...conditions];
//         newConditions[id] = !newConditions[id];
//         console.log(newConditions);
//         let allSelected = newConditions.every((status) => status == true);
//         console.log(allSelected);
//         if (allSelected) {
//             setAllSelected(true);
//             setConditions(
//                 newConditions.map((status) => {
//                     return true;
//                 }),
//             );
//         } else {
//             setAllSelected(false);
//             setConditions(
//                 conditions.map((status) => {
//                     return false;
//                 }),
//             );
//         }
//         setConditions(newConditions);
//     };

//     return (
//         <div>
//             <input type="checkbox" checked={allSelected} onClick={selectAllHandler} />{" "}
//             Select All
//             <input
//                 id="0"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[0]}
//             />{" "}
//             Condition 1
//             <input
//                 id="1"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[1]}
//             />{" "}
//             Condition 2
//             <input
//                 id="2"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[2]}
//             />{" "}
//             Condition 3
//             <input
//                 id="3"
//                 type="checkbox"
//                 onChange={conditionHandler}
//                 checked={conditions[3]}
//             />{" "}
//             Condition 4
//         </div>
//     );
// };

// export default App;