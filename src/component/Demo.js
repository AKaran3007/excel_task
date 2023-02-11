import React, { useState } from "react";

function Demo() {
  const [val, setVal] = useState([]);

  const handleAdd = () => {
    const add = [...val, { name: "", nameList: [] }];
    setVal(add);
  };

  const handleChange = (onChangeValue, index, key) => {
    const inputData = [...val];
    inputData[index][key] = onChangeValue.target.value;
    setVal(inputData);
  };

const handleDelete = (index ) => {
    const deleteVal = [...val];
    console.log(index)
    const newArray = deleteVal.filter((item, itemIndex) =>index !== itemIndex )
    console.log(newArray)
    setVal(newArray);
  };

  const pushFunction = (index) => {
    const obj = [
      ...val.slice(0, index + 1),
      { name: "" , nameList: [] },
      ...val.slice(index + 1),
    ];
    setVal(obj);
    console.log(obj, "obj");
  };

  const handleaddList = (index) => {
    const inputData = [...val];
    inputData[index]["nameList"] = [
      ...inputData[index]["nameList"],
      inputData[index]["name"],
    ];
    inputData[index]["name"] = " ";
    setVal(inputData);
  };

  const deleteName = (index, nIndex) => {
    const inputData = [...val];
    inputData[index]["nameList"] = inputData[index]["nameList"].filter(
      (_, index) => index !== nIndex
    );
    setVal(inputData);
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
                {data.nameList.map((names, nIndex) => {
                  return (
                    <li key={nIndex} onClick={() => deleteName(index, nIndex)}>
                      {names}
                    </li>
                  );
                })}
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

export default Demo;
