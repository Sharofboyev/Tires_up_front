import React, { useState, useEffect } from "react";
import Row from "./Row";
import Thead from "./Thead";
import { getData } from "../../utils/Util";
import { useParams } from "react-router-dom";

function Table() {
  const [items, setItems] = useState([]);
  const params = useParams();
  useEffect(() => {
    getData(params.viewName)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {});
  }, [params.viewName]);

  let columns = [];
  if (items.length > 0) {
    columns = Object.keys(items[0]);
  }

  return (
    <table className="Table">
      <Thead columns={columns}></Thead>
      <tbody>
        {items.map((item) => {
          return (
            <Row
              row={item}
              id={item.PVI}
              key={item.PVI}
              viewName={params.viewName}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
