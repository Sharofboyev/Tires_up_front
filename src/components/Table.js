import React from "react";
import { Row } from "./Row";

class Table extends React.Component{
    render(){
        return (<table className="Table">
            <tbody>{this.props.items.map(element => {
                return (
                    <Row row={element} key={element.PVI}/>
                )
            })}
            </tbody>
        </table>)
    }
}

export default Table