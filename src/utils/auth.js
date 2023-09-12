import { handleResponse } from "./api";

const API_URL = "http://localhost:3001";
export function registerUser(data) {
  console.log(data);
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

export function loginUser(data) {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  }).then(handleResponse);
}

export function verifyToken(token) {
  return fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}
