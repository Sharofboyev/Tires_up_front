import axios from "axios";
import views from "./views.json";

const instance = axios.create({
  baseURL: "http://localhost:2022/",
  timeout: 15000,
});

Math.round();

/**
 * Updates view in the database
 * @param {string} name Name of view
 * @param {string} query Query of view
 */
export function editView(name, query) {
  return instance.put("/view", { name, query });
}

export function addView(name, query) {
  return instance.post("/view", { name, query });
}

export function validateInput(key, value) {
  if (key === "name") {
    if (value.indexOf(" ") !== -1 || value.indexOf("\n") !== -1) {
      return `View ${key} shouldn't include spaces`;
    }
  }
  if (value === "") return `View ${key} cannot be empty`;
  return null;
}

export function deleteView(name) {
  return instance.delete("/view?name=" + name);
}

export async function getViews() {
  try {
    let { data } = await instance.get("/view");
    return data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

export function getRawViews() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(views);
    }, 1000);
  });
}

let s = `SELECT TOP 130 p.PVI, RIGHT([CSN], 7) AS CSN, COALESCE(t.Bajarildi, 'False') AS Bajarildi, [PONO], [F08A], [DEST], [OF_TRIM_LEVEL], CASE [SPEC_BOOK] WHEN 'RT' THEN [A078] WHEN 'R3' THEN [A078] ELSE [N02A] END 'C1', [K04A], [K06A], [K01], CASE [SPEC_BOOK] WHEN 'E ' THEN NULL ELSE [TIRE] END 'C2', [S102], '' AS Time  FROM   (SELECT PVI, PROFILE_NAME AS PNAME, PROFILE_VALUE FROM PROFILES_GA) AS SOURCE_TABLE PIVOT (MAX(profile_value) FOR PNAME IN ([CSN], [T2TIRE], [PONO], [F08A], [DEST], [OF_TRIM_LEVEL], [SPEC_BOOK], [A078], [N02A], [K04A], [K06A], [K01], [TIRE], [S102]))   AS p LEFT JOIN (SELECT PVI, CASE COUNT(id) % 2 WHEN 1 THEN 'True' ELSE 'False' END Bajarildi FROM dbo.Telegram WHERE Joy = 'tiresecond' GROUP BY PVI) AS t ON p.PVI = t.PVI WHERE SUBSTRING([CSN], 1, 1) = '2' ORDER BY [CSN] DESC`;

export function queryBuilder(limit, fields, viewName, lineNumber) {
  let query = `SELECT TOP ${limit} 
    p.PVI, RIGHT([CSN], 7) AS CSN, COALESCE(t.Bajarildi, 'False') AS Bajarildi FROM ...
    AS p LEFT JOIN (SELECT PVI, CASE COUNT(id) % 2 WHEN 1 THEN 'True' ELSE 'False' END Bajarildi FROM dbo.Telegram WHERE Joy = '${viewName}' GROUP BY PVI) 
    AS t ON p.PVI = t.PVI WHERE SUBSTRING([CSN], 1, 1) = '${2}' ORDER BY [CSN] DESC`;
  fields.forEach((field) => {
    if (field.type === "text") {
      query += field.value;
    } else if (field.type === "profile") {
      let checkArr = [];
      let ifTruthy = field.condition.includes("&");
      let condition = field.condition.replace("?", "");
    }
  });
  return query;
}
