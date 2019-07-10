import URL from "./utils";
import configureStore from "../../redux/store/configureStore";

/** Retrieve authentication from saved state */

const authentication = configureStore().getState().authentication;
const headers = new Headers(
  {
    // "Authorization": authentication.access_token,
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  });

export async function get(url) {
  const response = await fetch(URL(url), {
    method: "GET",
    headers: headers
  });
  const data = await response.json();
  return {
    data: data,
    status: response.status
  };
}

export async function post(url, body) {
  const response = await fetch(URL(url), {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  });
  return {
    data: await response.json(),
    status: response.status
  };
}
