import React from "react";
import { Cell } from "./Cell";
import { getMarkedTimes, timeFormat } from "../../utils/Util";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: false,
      done: this.props.row.Bajarildi === "True",
      collapsed: true,
      times: [],
      timesCalled: false,
    };
  }
  id = 1;
  onClickHandler = () => {
    this.setState({
      marked: !this.state.done && !this.state.marked,
    });
  };

  onButtonClickHandler = (markedTime) => {
    this.setState({
      times: [...this.state.times, markedTime],
      done: !this.state.done,
      marked: false,
      collapsed: true,
    });
  };

  handleCollapseClick = async (event) => {
    event.stopPropagation();
    if (this.state.collapsed && !this.state.timesCalled) {
      getMarkedTimes(this.props.id).then((data) => {
        this.setState({
          times: data,
          collapsed: !this.state.collapsed,
          timesCalled: true,
        });
      });
    } else this.setState({ collapsed: !this.state.collapsed });
  };
  render() {
    return [
      <tr
        className="Row" //Class name CSS da qo'llash uchun kerak
        onClick={this.onClickHandler} //Row bosilganda, marked state o'zgarishi va Row component re-render bo'lishi kerak
        //Style row belgilangani yoki bajarilganiga qarab boshqacha background color olishi mumkin
        style={
          this.state.marked
            ? { backgroundColor: "rgb(245, 215, 105)" }
            : this.state.done
            ? {
                backgroundColor: "rgb(141, 184, 124)",
                color: "rgb( 245, 215, 105)",
              }
            : {}
        }
        //Har qanday array item key propertyga ega bo'lishi kerak
        key={this.props.id}
      >
        {Object.keys(this.props.row).map((key) => {
          if (key === "PVI") return null;
          if (key === "Bajarildi") {
            return (
              <Cell
                value={this.props.row[key]}
                key={this.id++}
                done={this.state.done}
                id={this.props.id}
                onButtonClickHandler={this.onButtonClickHandler}
                columnName={key}
              />
            );
          } else if (key === "Time") {
            return (
              <Cell
                value={this.state.times}
                key={this.id++}
                width="35px"
                columnName={key}
                collapsed={this.state.collapsed}
                handleCollapseClick={this.handleCollapseClick}
              />
            );
          } else if (key === "id") return null;
          return (
            <Cell
              value={this.props.row[key]}
              key={this.id++}
              columnName={key}
            ></Cell>
          );
        })}
      </tr>,
      this.state.times.length > 0 &&
        !this.state.collapsed &&
        this.state.times.map((time, index) => {
          return (
            <tr key={this.id++ + "collapser"}>
              <td
                colSpan={Object.keys(this.props.row).length}
                key={this.id++}
                className="Expanded"
                style={{
                  fontSize: "40px",
                  fontWeight: "500",
                  whiteSpace: "pre",
                  backgroundColor: index % 2 === 0 ? "#8F9AA5" : "",
                }}
              >
                {
                  //Backenddan [{Joy: string, Vaqt: string}] ma'lumot keladi. Joy 't2tire' yoki 'tushdi' bo'lishi mumkin.
                  //Tushdi bo'lgan vaqtda, shu vaqt chiqishi kerak, qolganlari juft toqligiga qarab bajarildi, qaytarildi bo'ladi
                  (time.Joy === "tushdi"
                    ? "Tushdi     "
                    : index % 2 !== 0
                    ? "Bajarildi        "
                    : "Qaytarildi      ") + timeFormat(time.Vaqt)
                }
              </td>
            </tr>
          );
        }),
    ];
  }
}

export default Row;
