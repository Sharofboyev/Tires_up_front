import React, { useEffect, useState } from "react";
import Row from "./Row";
import Thead from "./Thead";
import { getData, getRawData } from "../utils/Util";

const columns = [
  {
    Header: "CSN",
    Picker: (row) => row.CSN,
  },
  {
    Header: "Bajarildi",
    Picker: (row) => row.Bajarildi === "True",
  },
  {
    Header: "PONO",
    Picker: (row) => row.PONO,
  },
  {
    Header: "F08A",
    Picker: (row) => row.F08A,
  },
  {
    Header: "DEST",
    Picker: (row) => row.DEST,
  },
  {
    Header: "OF_TRIM_LEVEL",
    Picker: (row) => row.OF_TRIM_LEVEL,
  },
  {
    Header: "C1",
    Picker: (row) => row.CONDITION1,
  },
  {
    Header: "K04A",
    Picker: (row) => row.K04A,
  },
  {
    Header: "K06A",
    Picker: (row) => row.K06A,
  },
  {
    Header: "K01",
    Picker: (row) => row.K01,
  },
  {
    Header: "C2",
    Picker: (row) => row.CONDITION2,
  },
  {
    Header: "S102",
    Picker: (row) => row.S102,
  },
  {
    Header: "Time",
    Picker: (row) => [],
  },
];

function Table() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getRawData().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <table className="Table">
      <Thead columns={columns}></Thead>
      <tbody>
        {items.map((item) => {
          let readyRow = {};
          for (let i = 0; i < columns.length; i++) {
            readyRow[columns[i].Header] = columns[i].Picker(item);
          }
          return (
            <Row
              row={readyRow}
              id={item.PVI}
              key={item.PVI}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
