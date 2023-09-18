import { baseUrl } from "./constants";

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

const api = {
  registerPass: (userId, token) => {
    return fetch(`${baseUrl}/pass`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userId),
    }).then(handleResponse);
  },
  redeemReward: (rewardId, passId, token) => {
    return fetch(`${baseUrl}/pass/${passId}/${rewardId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rewardId, passId),
    }).then(handleResponse);
  },
  getPass: (userId, token) => {
    return fetch(`${baseUrl}/pass/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
};

export default api;
