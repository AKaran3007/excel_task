import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";

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

  const handleDelete = (index) => {
    const deleteVal = [...val];
    console.log(index);
    const newArray = deleteVal.filter((item, itemIndex) => index !== itemIndex);
    console.log(newArray);
    setVal(newArray);
  };

  const handleRemoveList = (index) => {
    let inputData = [...val];
    const arrLen = inputData[index]["nameList"].length - 1;
    const remArr = inputData[index]["nameList"].filter(
      (_, index) => index !== arrLen
    );
    inputData[index] = { nameList: remArr };
    setVal(inputData);
    console.log(inputData, "removeList");
    console.log(remArr, "remove");
  };

  const pushFunction = (index) => {
    const obj = [
      ...val.slice(0, index + 1),
      { name: "", nameList: [] },
      ...val.slice(index + 1),
    ];
    setVal(obj);
    console.log(obj, "obj");
  };

  const handleaddList = (index) => {
    if (!val[index].name.trim().length) {
      console.log("Empty");
      return;
    }
    const inputData = [...val];
    inputData[index]["nameList"] = [
      ...inputData[index]["nameList"],
      inputData[index]["name"],
    ];
    inputData[index]["name"] = " ";
    setVal(inputData);
    console.log(inputData, "handleaddlist");
  };

  const deleteName = (index, nIndex) => {
    const inputData = [...val];
    inputData[index]["nameList"] = inputData[index]["nameList"].filter(
      (_, index) => index !== nIndex
    );
    setVal(inputData);
    console.log(inputData, "inputdelete");
    console.log(index, "indexindexindex");
  };

  const savebtn = () => {
    localStorage.setItem("val", JSON.stringify(val));
    setVal(val);
    console.log(val, "local");
  };
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("val"));
    setVal(localData);
  }, []);

  console.log(val, "VALUE");
  return (
    <div>
      <div className="">
        <button onClick={() => handleAdd()}>+</button>
      </div>

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
                <button onClick={() => handleaddList(index)}>Add</button> &nbsp;
                <button onClick={() => handleRemoveList(index)}>Remove</button>
                {data.nameList.map((names, nIndex) => {
                  return (
                    <li key={nIndex} onClick={() => deleteName(index, nIndex)}>
                      {names}
                    </li>
                  );
                })}
              </div>
              <div className="viewbtn">
                <Link to={`/view/${index}`}>
                  <button >View</button>
                </Link>
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
      <br />
      {}
      <div>
        <button onClick={savebtn}>Save</button>
      </div>
    </div>
  );
}

export default Demo;
