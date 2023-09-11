import { handleResponse } from "./api";

const API_URL = "http://localhost:3001";
export function registerUser({ name, email, password }) {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(handleResponse);
}

export function loginUser(email, password) {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ email, password }),
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
