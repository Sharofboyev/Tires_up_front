import React from "react";
import Row from "./Row";
import Thead from "./Thead";

function Table(props) {
  const { columns, items } = props;
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
              id={readyRow.id}
              key={readyRow.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
