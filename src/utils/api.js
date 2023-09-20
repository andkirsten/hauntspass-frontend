import { baseUrl } from "./constants";

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
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
  getPass: (userId, token) => {
    return fetch(`${baseUrl}/pass`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userId),
    }).then(handleResponse);
  },
  createRedemption: (rewardId, passId, token) => {
    return fetch(`${baseUrl}/pass/${passId}/${rewardId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rewardId, passId),
    }).then(handleResponse);
  },
  updateRedemption: (rewardId, passId, token) => {
    return fetch(`${baseUrl}/pass/${passId}/${rewardId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rewardId, passId),
    }).then(handleResponse);
  },
  getRedemption: (rewardId, passId, token) => {
    return fetch(`${baseUrl}/pass/${passId}/${rewardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rewardId, passId),
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
