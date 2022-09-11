import React, { Component } from "react";
import EditModal from "./EditModal";

class FormCell extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="container-modal">
        <input
          className="form-control"
          type="text"
          onDoubleClick={this.props.modalButtonHandle}
          value={text}
          readOnly
        ></input>
        {this.props.openModal ? (
          <EditModal
            modalClose={this.props.modalButtonHandle}
            text={text}
            handleSubmit={this.props.handleSubmit}
          ></EditModal>
        ) : null}
      </div>
    );
  }
}

export default FormCell;
