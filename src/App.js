import React, {useState, useEffect} from "react"
import Table from "./components/Table";
import {getData, timeFormat} from "./components/Util";

function App() {
    const [items, setItems] = useState([])

    const columns = [
      {
        Header: "CSN",
        Picker: row => row.CSN,
      },
      {
        Header: "Bajarildi",
        Picker: row => row.Bajarildi === "True"
      },
      {
        Header: "PONO",
        Picker: row => row.PONO,
      },
      {
        Header: "F08A",
        Picker: row => row.F08A,
      },
      {
        Header: "DEST",
        Picker: row => row.DEST,
      },
      {
        Header: "OF_TRIM_LEVEL",
        Picker: row => row.OF_TRIM_LEVEL,
      },
      {
        Header: "CONDITION1",
        Picker: row => row.CONDITION1,
      },
      {
        Header: "K04A",
        Picker: row => row.K04A,
      },
      {
        Header: "K06A",
        Picker: row => row.K06A,
      },
      {
        Header: "CONDITION2",
        Picker: row => row.CONDITION2,
      },
      {
        Header: "Time",
        Picker: row => timeFormat(new Date(1659121200000))
      }
    ]
    useEffect(() => {
        getData().then((data) => {
          // console.log(data)
          setItems(data);
        })
     },[]);
  return (
    <div className="App">
        <Table items={items} setItems={setItems} columns={columns}/>
    </div>
  )
}
export default App
