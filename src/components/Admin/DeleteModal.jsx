import React, { Component } from "react";

class DeleteModal extends Component {
  state = {
    deleteButtonDisabled: false,
  };

  handleEsc = (event) => {
    if (event.key === "Escape") this.props.modalClose();
    if (
      event.key === "Enter" &&
      event.ctrlKey &&
      !this.state.deleteButtonDisabled
    ) {
      this.props.handleDelete();
    }
  };
  handleDelete = () => {
    this.setState({
      deleteButtonDisabled: true,
    });
    this.props.handleDelete();
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
              <h5 className="modal-title">Delete view</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                onClick={this.props.modalClose}
                autoFocus
              ></button>
            </div>
            <div className="modal-body display-6">
              Are you sure to delete this view?
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
                className="btn btn-danger btn-primary"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
