import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import excel from './Excel'
// import data from "./data";

function Write({ data = [] }) {
  const [rowsData, setRowsData] = useState([]);
  const addTableRows = () => {
    const rowsInput = {
      TestCaseID: "",
      Priority: "",
      TestcaseDescription: "",
      StepName: "",
      Steps: "",
      ReflinkTestData: "",
      ExpectedResult: "",
      ActualResult: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  console.log(data, "data");
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>TestCaseID</td>
              <td>Priority</td>
              <td>TestcaseDescription</td>
              <td>StepName</td>
              <td>Steps</td>
              <td>ReflinkTestData</td>
              <td>ExpectedResult</td>
              <td>ActualResult</td>
              <th>
                <button
                  className="btn btn-outline-success"
                  onClick={addTableRows}
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody rowsData={rowsData} handleChange={handleChange}>
            {data !== undefined &&
              data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item?.TestCaseID}</td>
                    <td>{item?.Priority}</td>
                    <td>{item?.TestcaseDescription}</td>
                    <td>{item?.StepName}</td>
                    <td>{item?.Steps}</td>
                    <td>{item?.ReflinkTestData}</td>
                    <td>{item?.ExpectedResult}</td>
                    <td>{item?.ActualResult}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Write;
