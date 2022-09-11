import InsertModal from "./InsertModal";
import React, { Component } from "react";
import { addView, deleteView, getViews } from "../../utils/ViewUtil";
import ViewHeader from "./ViewHeader";
import ViewRow from "./ViewRow";
class Table extends Component {
  state = {
    views: [],
    isInsertModalOpen: false,
  };

  componentDidMount = () => {
    getViews()
      .then((data) => {
        this.setState({
          views: data,
        });
      })
      .catch((err) => {});
  };

  handleInsertModal = (event) => {
    this.setState({
      isInsertModalOpen: !this.state.isInsertModalOpen,
    });
  };

  handleInsertion = (name, query) => {
    addView(name, query)
      .then((resp) => {
        let newViews = [...this.state.views, resp.data];
        this.setState({
          views: newViews,
        });
      })
      .catch((err) => {})
      .finally(() => {
        this.handleInsertModal();
      });
  };

  handleDelete = (name) => {
    deleteView(name)
      .then((resp) => {
        let { views } = this.state;
        views = views.filter((view) => {
          return view.name !== name;
        });
        this.setState({
          views,
        });
      })
      .catch((err) => {});
  };

  render() {
    return (
      <table className="table table-hover table-bordered">
        <ViewHeader></ViewHeader>
        <tbody>
          {this.state.views.map((view) => {
            return (
              <ViewRow
                row={view}
                key={view.id}
                handleDelete={this.handleDelete}
              ></ViewRow>
            );
          })}
        </tbody>
        <tfoot>
          {this.state.views.length > 0 ? (
            <tr>
              <td
                colSpan={9}
                className="colSpan"
              >
                <button
                  className="btn btn-primary"
                  onClick={this.handleInsertModal}
                >
                  Add new view
                </button>
                <div className="container-modal">
                  {this.state.isInsertModalOpen ? (
                    <InsertModal
                      modalClose={this.handleInsertModal}
                      handleSubmit={this.handleInsertion}
                      handleDelete={this.handleDelete}
                    ></InsertModal>
                  ) : null}
                </div>
              </td>
            </tr>
          ) : null}
        </tfoot>
      </table>
    );
  }
}

export default Table;
