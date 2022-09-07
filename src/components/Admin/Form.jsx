import React, { Component } from "react";
import { Input } from "mdb-ui-kit"; // modul

class Form extends Component {
  state = {
    views: [],
    gotViews: false,
  };
  componentDidMount() {
    document.querySelectorAll(".form-outline").forEach((formOutline) => {
      new Input(formOutline).init();
    });
    document.querySelectorAll(".form-outline").forEach((formOutline) => {
      new Input(formOutline).update();
    });
  }

  render() {
    return (
      <div className="form-outline">
        <textarea
          type="text"
          id="form16"
          rows="6"
          className="form-control"
          data-mdb-showcounter="true"
          maxLength="1024"
          value={this.props.text}
          onChange={this.props.handleChange}
        />
        <label
          className="form-label"
          htmlFor="form16"
        >
          View query
        </label>
        <div className="form-helper"></div>
      </div>
    );
  }
}

export default Form;
