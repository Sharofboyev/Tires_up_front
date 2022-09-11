import React, { Component } from "react";
import Form from "./Form";
import { validateInput } from "../../utils/ViewUtil";

class InsertModal extends Component {
  state = {
    name: "",
    query: "",
    insertButtonDisabled: false,
    error: {},
  };

  handleInput = (key, value) => {
    this.setState({
      [key]: value,
      error: {
        [key]: validateInput(key, value),
      },
    });
  };
  handleEsc = (event) => {
    if (event.key === "Escape") this.props.modalClose();
    if (
      event.key === "Enter" &&
      event.ctrlKey &&
      !this.state.insertButtonDisabled
    ) {
      this.handleInsertion();
    }
  };

  handleInsertion = () => {
    if (
      validateInput("name", this.state.name) ||
      validateInput("query", this.state.query.trim())
    ) {
      return this.setState({
        error: {
          name: validateInput("name", this.state.name),
          query: validateInput("query", this.state.query.trim()),
        },
      });
    }
    this.setState({
      insertButtonDisabled: true,
    });
    this.props.handleSubmit(this.state.name.trim(), this.state.query.trim());
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
              <h5 className="modal-title">Adding new view</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
                onClick={this.props.modalClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <div className="form-outline">
                  <input
                    className="form-control"
                    autoFocus
                    onChange={(event) =>
                      this.handleInput("name", event.target.value)
                    }
                  ></input>
                  <label
                    className="form-label"
                    htmlFor="form16"
                  >
                    View name
                  </label>
                </div>
                {this.state.error.name && (
                  <div className="alert alert-danger">
                    {this.state.error.name}
                  </div>
                )}
              </div>
              <div className="input-group mb-3">
                <Form
                  text={this.state.query}
                  handleChange={(event) => {
                    this.handleInput("query", event.target.value);
                  }}
                ></Form>
                {this.state.error.query && (
                  <div className="alert alert-danger">
                    {this.state.error.query}
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
                onClick={this.props.modalClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary close-btn"
                onClick={this.handleInsertion}
              >
                Add view
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InsertModal;
