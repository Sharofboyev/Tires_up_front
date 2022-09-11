import React, { Component } from "react";
import Table from "./Table";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  modalButtonHandle = (event) => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    return <Table></Table>;
  }
}

export default AdminPanel;
