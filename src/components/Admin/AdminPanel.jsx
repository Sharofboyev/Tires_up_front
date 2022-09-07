import React, { Component } from "react";
import Modal from "./Modal";

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
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-mdb-toggle="modal"
          data-mdb-target="#exampleModal"
          onClick={this.modalButtonHandle}
        >
          Launch demo modal
        </button>
        {this.state.openModal ? (
          <Modal clickHandler={this.modalButtonHandle}></Modal>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default AdminPanel;
