import React, { Component } from "react";
import { validateInput } from "../../utils/ViewUtil";
import Form from "./Form";

class EditModal extends Component {
  state = {
    text: this.props.text,
    buttonDisabled: false, // Variable for protecting mutiple request to back-end
    error: null,
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
      error: validateInput("query", event.target.value),
    });
  };

  handleInsert = () => {
    let text = this.state.text.trim();
    if (validateInput("query", text)) {
      return this.setState({
        error: validateInput("query", text),
      });
    }
    this.setState({ buttonDisabled: true });
    this.props.handleSubmit(text);
  };

  handleEsc = (event) => {
    if (event.key === "Escape") this.props.modalClose();
    if (event.key === "Enter" && event.ctrlKey && !this.state.buttonDisabled)
      this.handleInsert();
  };
  render() {
    return (
      <div
        className="modal"
        tabIndex="-1"
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
              <h5 className="modal-title">Change query</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
                onClick={this.props.modalClose}
              ></button>
            </div>
            <div className="modal-body">
              <Form
                text={this.state.text}
                handleChange={this.handleInput}
                autoFocus
              ></Form>
              {this.state.error && (
                <div className="alert alert-danger">{this.state.error}</div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
                onClick={this.props.modalClose}
              >
                Close
              </button>
              <button
                type="button"
                className={
                  "btn btn-primary close-btn" +
                  (this.state.buttonDisabled ? " disabled" : "")
                }
                onClick={this.handleInsert}
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

export default EditModal;
