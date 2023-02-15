import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function View() {
  const [locsto, SetLocsto] = useState([]);
  console.log(locsto, "locsto_state");

  let { id } = useParams();
  let Id = parseInt(id);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("val"));
    SetLocsto(localData);
  }, []);
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      {locsto.map((data, index) => {
        return data.nameList.map((listData, listIndex) => {
          return index === Id ? (
            <div key={listIndex} className="box">
              {listData}
            </div>
          ) : (
            <></>
          );
        });
      })}
    </div>
  );
}

export default View;
