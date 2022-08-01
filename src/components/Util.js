import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:2022/",
    timeout: 15000
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

function timeFormat (date){
    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
    const weekDays = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
    if (date instanceof Date){
        return `${date.getDate()}-${months[date.getMonth()].toLowerCase()}  ${weekDays[date.getDay()]} Soat ${date.getHours().toString().padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}:${date.getSeconds().toString().padStart(2, 0)}`
    }
    return null
}

export {getData, instance, timeFormat}