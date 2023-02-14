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
