import React, { Component } from "react";
import "./admin.css";

const columns = [
  { name: "Id" },
  { name: "Name" },
  { name: "Query" },
  { name: "Created time" },
  { name: "Created by" },
  { name: "" },
];
class ViewHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th
                className="viewHeader"
                key={column.name}
              >
                {column.name}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default ViewHeader;
