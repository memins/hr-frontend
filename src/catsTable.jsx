import React from "react";
import { CenterVH } from "./catsTableStyle";
import "./catsTable.css";

export const CatsTable = () => {
  console.log("hier");

  const someArray = [1, 2, 3];

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Ninja Level</th>
      </tr>
      {someArray.map((value, index) => (
        <tr key={index}>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </tr>
      ))}
    </table>
  );
};
