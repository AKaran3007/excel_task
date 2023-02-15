import React, { useState } from "react";

function Demo() {
  const [value, setValue] = useState([]);

  const handleAdd = () => {
    const add = [...value, { name: "" }];
    setValue(add);
    console.log(add, "add");
  };

  const handleDelete = (index) => {
    const deleteVal = [...value];
    const newDeleteValue = deleteVal.filter(
      (item, delIndex) => index !== delIndex
    );
    setValue(newDeleteValue);
    console.log(index);
    console.log(newDeleteValue, "newDeleteValue");
  };

  const handleChange = (onChangeValue, index, key) => {
    const hanChange = [...value];
    hanChange[index][key] = onChangeValue.target.value;
    console.log(hanChange, "hanChange");
    setValue(hanChange);
  };
  return (
    <div>
      <button className="add_button" onClick={() => handleAdd()}>
        Add
      </button>
      {value.map((data, index) => {
        return (
          <div>
            <div>
              <input
                onChange={(e) => handleChange(e, index, "name")}
                value={data.name}
              ></input>
            </div>
            <button
              className="delete_button"
              onClick={() => handleDelete(index)}
            >
              -
            </button>
            <br /> <br />
          </div>
        );
      })}
    </div>
  );
}

export default Demo;

// import { Link, useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// function View() {
//   const [locsto, SetLocsto] = useState([]);
//   console.log(locsto, "locsto_state");

//   let {id} = useParams()
//   console.log(id , "a")

//   useEffect(() => {
//     const localData = JSON.parse(localStorage.getItem("val"));
//     SetLocsto([localData]);
//   }, []);
//   return (
//     <div>
//       {locsto.map((data, index) => {
//         console.log(data, "data");
//         return (
//           <div key={index}>
//             <Link to="/">
//               <button>Home</button>
//             </Link>
//             <div className="box">
//               {data.val.map((val, valIndex) => {
//                 return data.val[valIndex].nameList.map((list, listIndex) => {
//                   return <li>{list}</li>;
//                 });
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default View;

