import React, { Component } from "react";
import Form from "./Form";
import data from "../../utils/views.json";

class Modal extends Component {
  state = {
    text: data[0].query,
  };
  handleInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  escHandler = (event) => {
    if (event.key === "Escape") {
      this.props.clickHandler(event);
    } else {
      return;
    }
  };
  render() {
    return (
      <div
        className="modal"
        tabIndex="-1"
        onClick={this.props.clickHandler}
        onKeyDown={this.escHandler}
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
                handleChange={this.handleInput}
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
