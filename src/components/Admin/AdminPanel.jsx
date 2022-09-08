import React, { Component } from "react";
import Modal from "./Modal";
import data from "../../utils/views.json";

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
    return (
      <div className="container-modal">
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.modalButtonHandle}
        >
          Launch demo modal
        </button>
        {this.state.openModal ? (
          <Modal
            clickHandler={this.modalButtonHandle}
            text={data[0].query}
          ></Modal>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default AdminPanel;
