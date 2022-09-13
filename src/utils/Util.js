import axios from "axios";
import moment from "moment";
import data from "./rawData.json";

const instance = axios.create({
  baseURL: "http://localhost:2022/",
  timeout: 15000,
});

async function getData(viewName) {
  try {
    let resp = await instance.get(`/${viewName}/rows`);
    return resp.data;
  } catch (err) {
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

async function getMarkedTimes(PVI, viewName) {
  try {
    let resp = await instance.get(`/${viewName}/time`, {
      params: { pvi: PVI },
    });
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
async function markRow(viewName, pvi, done) {
  let resp = await instance.put(`${viewName}/row`, {
    pvi: Number(pvi),
    marked: done,
  });
  return resp;
}

const columns = [
  {
    Header: "id",
    Picker: (row) => row.PVI,
  },
  {
    Header: "CSN",
    Picker: (row) => row.CSN,
  },
  {
    Header: "Bajarildi",
    Picker: (row) => row.Bajarildi === "True",
  },
  {
    Header: "PONO",
    Picker: (row) => row.PONO,
  },
  {
    Header: "F08A",
    Picker: (row) => row.F08A,
  },
  {
    Header: "DEST",
    Picker: (row) => row.DEST,
  },
  {
    Header: "OF_TRIM_LEVEL",
    Picker: (row) => row.OF_TRIM_LEVEL,
  },
  {
    Header: "C1",
    Picker: (row) => row.CONDITION1,
  },
  {
    Header: "K04A",
    Picker: (row) => row.K04A,
  },
  {
    Header: "K06A",
    Picker: (row) => row.K06A,
  },
  {
    Header: "K01",
    Picker: (row) => row.K01,
  },
  {
    Header: "C2",
    Picker: (row) => row.CONDITION2,
  },
  {
    Header: "S102",
    Picker: (row) => row.S102,
  },
  {
    Header: "Time",
    Picker: (row) => [],
  },
];

export {
  getData,
  instance,
  timeFormat,
  getMarkedTimes,
  getRawData,
  columns,
  markRow,
};
