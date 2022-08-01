import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:2022/",
    timeout: 5000
})

async function getData(){
    try {
        let resp = await instance.get("/rows");
        let data = resp.data.sort((a, b) => {
            return a.CSN > b.CSN
        })
        return data;
    }
    catch (err){
        console.log(err.message)
        return []
    }
}

export {getData}