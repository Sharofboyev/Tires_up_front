import React, { Component } from "react";
import { timeFormat } from "../../utils/Util";
import { editView } from "../../utils/ViewUtil";
import DeleteModal from "./DeleteModal";
import FormCell from "./FormCell";

class ViewRow extends Component {
  state = {
    row: this.props.row,
    openEditModal: false,
    openDeleteModal: false,
  };

  modalButtonHandle = (isDeleteModal = false) => {
    if (isDeleteModal === true) {
      return this.setState({
        openDeleteModal: !this.state.openDeleteModal,
      });
    }
    this.setState({
      openEditModal: !this.state.openEditModal,
    });
  };

  handleSubmit = (text) => {
    editView(this.state.row.name, text)
      .then((resp) => {
        let newRow = {
          ...this.state.row,
          created_time: resp.data.created_time,
          query: text,
        };
        this.setState({ row: newRow });
      })
      .catch((err) => {})
      .finally(() => {
        this.modalButtonHandle();
      });
  };

  handleDelete = () => {
    this.props
      .handleDelete(this.props.row.name)
      .then(() => {
        this.setState({
          openDeleteModal: false,
        });
      })
      .catch((err) => {});
  };

  render() {
    const { row, openDeleteModal, openEditModal } = this.state;
    return (
      <tr>
        {Object.keys(row).map((field) => {
          if (field === "query") {
            return (
              <td key={field}>
                <FormCell
                  text={row.query}
                  openModal={openEditModal}
                  modalButtonHandle={this.modalButtonHandle}
                  handleSubmit={this.handleSubmit}
                ></FormCell>
              </td>
            );
          } else if (field === "created_time") {
            return (
              <td
                key={field}
                className="time view-cell"
              >
                {timeFormat(row[field])}
              </td>
            );
          }
          return (
            <td
              className="view-cell"
              key={field}
            >
              {row[field]}
            </td>
          );
        })}
        <td key={"delete"}>
          <button
            className="btn btn-danger"
            onClick={() => this.modalButtonHandle(true)}
          >
            Delete
          </button>
          {openDeleteModal ? (
            <DeleteModal
              modalClose={() => this.modalButtonHandle(true)}
              handleDelete={this.handleDelete}
            ></DeleteModal>
          ) : null}
        </td>
      </tr>
    );
  }
}

export default ViewRow;
