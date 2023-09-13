import { baseUrl } from "./constants";

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

const api = {
  createPass: (pass, token) => {
    return fetch(`${baseUrl}/pass`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(pass),
    }).then(handleResponse);
  },
};

export default api;
