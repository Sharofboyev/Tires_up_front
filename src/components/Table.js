import React from "react";
import { Row } from "./Row";

class Table extends React.Component{
    render(){
        return (<table className="Table">
            <thead>
                <tr>
                    {this.props.columns.map(item => {
                        return (
                            <th key={item.Header}>
                                {item.Header === "Time"?"":item.Header}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>{this.props.items.map(item => {
                let readyRow = {};
                for (let i = 0; i < this.props.columns.length; i++){
                    readyRow[this.props.columns[i].Header] = this.props.columns[i].Picker(item)
                }
                return (
                    <Row row={readyRow} id={item.PVI} key={item.PVI}/>
                )
            })}
            </tbody>
        </table>)
    }
}

export default Table