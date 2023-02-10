import React, { useState } from "react";
import * as XLSX from "xlsx";
import Write from "./Write";

function Excel() {
  const [colDefs, setColDefs] = useState([]);
  const [data, setData] = useState([]);

  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    console.log(rows);
    return rows;
  };

  const importExcel = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryData = event.target.result;
      const workBook = XLSX.read(binaryData, { type: "binary" });

      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];

      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      // console.log(fileData)
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      setColDefs(heads);
      console.log(heads, "heads");

      fileData.splice(0, 1);
      // setData(fileData);
      setData(convertToJson(headers, fileData));
    };
    reader.readAsBinaryString(file);
  };
  console.log(colDefs);
  console.log(data);
  return (
    <div className="app">
      <h3 align="center">Import Data</h3>
      <Write data={data} />
      <input type="file" onChange={importExcel} />
      {/* <table  title="Excel Data" data={data} column={colDefs} /> */}
      <table class="table table-striped">
        <thead>
          {colDefs.map((colDefs) => {
            return <th className="table_title">{colDefs.title}</th>;
          })}
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <tr>
                <td>{data.TestCaseID}</td>
                <td>{data.Priority}</td>
                <td>{data.TestcaseDescription}</td>
                <td>{data.StepName}</td>
                <td>{data.Steps}</td>
                <td>{data.ReflinkTestData}</td>
                <td>{data.ExpectedResult}</td>
                <td>{data.ActualResult}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Excel;
