import React, { Component } from "react";
import { getViews } from "../../utils/Util";

class Table extends Component {
  state = {
    views: [],
    sortBy: "id",
  };
  componentDidMount = () => {
    getViews().then((data) => {
      this.setState({
        views: data,
      });
    });
  };
  render() {
    return <table></table>;
  }
}

export default Table;
