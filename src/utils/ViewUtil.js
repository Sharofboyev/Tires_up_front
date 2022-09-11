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
