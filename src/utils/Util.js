import axios from "axios";
import moment from "moment";
import data from "./rawData.json";

const instance = axios.create({
  baseURL: "http://localhost:2022/",
  timeout: 15000,
});

async function getData() {
  try {
    let resp = await instance.get("/rows");
    let data = resp.data.sort((a, b) => {
      return a.CSN > b.CSN;
    });
    return data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

function timeFormat(date) {
  let momentDate = moment(date, "YYYY-MM-DDTHH:mm:ss.SSSZ").utc(false);
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  const weekDays = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];
  return `${momentDate.date()}-${months[momentDate.month()].toLowerCase()}  ${
    weekDays[momentDate.day()]
  } Soat ${momentDate.hours().toString().padStart(2, 0)}:${momentDate
    .minute()
    .toString()
    .padStart(2, 0)}:${momentDate.second().toString().padStart(2, 0)}`;
}

async function getMarkedTimes(PVI) {
  try {
    let resp = await instance.get("/time", { params: { pvi: PVI } });
    return resp.data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

function getRawData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export { getData, instance, timeFormat, getMarkedTimes, getRawData };
