import React, { Component } from "react";
import { getViews, getRawViews } from "../utils/Util";
import Table from "./Table";

const columns = [
  {
    Header: "id",
    Picker: (row) => {
      return row.id;
    },
  },
  {
    Header: "Id",
    Picker: (row) => {
      return row.id;
    },
  },
  {
    Header: "Name",
    Picker: (row) => {
      return row.name;
    },
  },
  {
    Header: "Query",
    Picker: (row) => {
      return row.query;
    },
  },
  {
    Header: "Created Time",
    Picker: (row) => {
      return row.created_time;
    },
  },
  {
    Header: "Time",
    Picker: (row) => {
      return new Date();
    },
  },
];

class AdminPanel extends Component {
  state = {
    views: [],
    gotViews: false,
  };
  render() {
    if (!this.state.gotViews)
      getRawViews().then((data) => {
        this.setState({
          views: data,
          gotViews: true,
        });
      });
    return (
      <Table
        columns={columns}
        items={this.state.views}
      ></Table>
    );
  }
}

export default AdminPanel;
