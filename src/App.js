import React, {useState} from "react"
import Table from "./components/Table"
function App() {
    const [items, setItems] = useState([
        {PVI: 1, name: "Sarvar", surname: "Sharofboyev", marked: 0},
        {PVI: 2, name: "Abdulla", surname: "Qodirov", marked: 0},
        {PVI: 3, name: "Sherali", surname: "Jo'rayev", marked: 1}
    ]) 
  return (
    <div className="App">
        <Table items={items} setItems={setItems}/>
    </div>
  )
}
export default App
