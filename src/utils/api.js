import { baseUrl } from "./constants";

export const handleResponse = async (response) => {
  if (response.ok) {
    return response.json();
  }
  const error = await response.json();
  return Promise.reject(error);
};

const api = {
  createPass: (receiptRef, token) => {
    return fetch(`${baseUrl}/pass`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(receiptRef),
    }).then(handleResponse);
  },
  getPass: (token) => {
    return fetch(`${baseUrl}/pass`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
  createRedemption: (data, token) => {
    return fetch(`${baseUrl}/redemption`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(handleResponse);
  },
  getRedemptions: (token) => {
    return fetch(`${baseUrl}/redemption`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
  createReward: (data, token) => {
    return fetch(`${baseUrl}/rewards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(handleResponse);
  },
  getRewards: (token) => {
    return fetch(`${baseUrl}/rewards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
  getReward: (rewardId, token) => {
    return fetch(`${baseUrl}/rewards/${rewardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
  getEvents: (token) => {
    return fetch(`${baseUrl}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
  createEvent: (data, token) => {
    return fetch(`${baseUrl}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(handleResponse);
  },
};

export default api;
