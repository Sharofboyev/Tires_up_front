import React, {useState} from "react"
import Table from "./components/Table"
function App() {
    const [items, setItems] = useState([
        {id: 1, name: "Sarvar", surname: "Sharofboyev", bajarildi: false},
        {id: 2, name: "Abdulla", surname: "Qodirov", bajarildi: false},
        {id: 3, name: "Sherali", surname: "Jo'rayev", bajarildi: true}
    ]) 
  return (
    <div className="App">
        <Table items={items} setItems={setItems}/>
    </div>
  )
}
export default App