import logo from "./logo.svg";
import "./App.css";

import { CatsTable } from "./catsTable";

// eslint-disable-next-line import/order
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  table {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: left;
  }
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CatsTable />
    </div>
  );
}

export default App;
