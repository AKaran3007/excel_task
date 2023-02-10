import React, { useState } from "react";

function UseState_demo1() {
  const [val, setVal] = useState([{}]);
  

  const handleAdd = () => {
    const add = [...val, { name: "" }];
    setVal(add);
  };

  const handleChange = (onChangeValue, index, key) => {
    const inputData = [...val];
    inputData[index][key] = onChangeValue.target.value;
    setVal(inputData);
  };

  const handleDelete = (index) => {
    const deleteVal = [...val];
    deleteVal.splice(index, 1);
    setVal(deleteVal);
    console.log(deleteVal, "deleteVal");
  };

  const pushFunction = (index) => {
    const obj = [
      ...val.slice(0, index + 1),
      { name: "" },
      ...val.slice(index + 1),
    ];
    setVal(obj);
    console.log(obj, "obj");
  };

  const handleaddList = (index) => {
    const addlist = [...val];
    setVal(addlist);

    console.log(addlist, "addlist");
  };

  console.log(val, "VALUE");
  return (
    <div>
      <button onClick={() => handleAdd()}>+</button>
      {val.map((data, index) => {
        return (
          <div className="d-flex" key={index}>
            <div className="col-md-12">
              <br />
              <div className="box">
                <input
                  onChange={(e) => handleChange(e, index, "name")}
                  value={data.name || ""}
                ></input>
                <button onClick={() => handleaddList(index)}>Add</button>
                <li>{val[0].name}</li>
              </div>
              <button onClick={() => handleDelete(index)}>-</button>
              <button
                onClick={() => pushFunction(index)}
                onChange={(e) => handleChange(e, index, "name")}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UseState_demo1;
