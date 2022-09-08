import React, { Component } from "react";
import Form from "./Form";

class Modal extends Component {
  state = {
    text: this.props.text,
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  handleEsc = (event) => {
    if (event.key === "Escape") this.props.clickHandler();
  };
  render() {
    return (
      <div
        className="modal"
        tabIndex="-1"
        onClick={this.props.clickHandler}
        onKeyDown={this.handleEsc}
        id="#exampleModal"
      >
        <div className="modal-dialog modal-lg">
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-header ">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
                onClick={this.props.clickHandler}
              ></button>
            </div>
            <div className="modal-body">
              <Form
                text={this.state.text}
                handleChange={this.handleInput}
              ></Form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
                onClick={this.props.clickHandler}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
