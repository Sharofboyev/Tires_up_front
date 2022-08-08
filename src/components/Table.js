import React from "react";
import Row from "./Row";

function Table(props){
    return (<table className="Table">
            <thead>
                <tr>
                    {props.columns.map(item => {
                        return (
                            <th key={item.Header}>
                                {item.Header === "Time"?"":item.Header}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>{props.items.map(item => {
                let readyRow = {};
                for (let i = 0; i < props.columns.length; i++){
                    readyRow[props.columns[i].Header] = props.columns[i].Picker(item)
                }
                return (
                    <Row row={readyRow} id={item.PVI} key={item.PVI}/>
                )
            })}
            </tbody>
        </table>)
}

export default Table