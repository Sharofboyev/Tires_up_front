import React, { Component } from "react";
import Row from "./Row";
import Thead from "./Thead";
import { getData } from "../../utils/Util";

class Table extends Component {
  state = {
    items: [],
  };

  componentDidMount = () => {
    getData("tiresecond").then((data) => {
      this.setState({
        items: data,
      });
    });
  };
  render() {
    let { items } = this.state;
    let columns = [];
    if (items.length > 0) {
      columns = Object.keys(items[0]);
      columns.push("Time");
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
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
