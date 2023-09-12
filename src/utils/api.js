const API_URL = "api.staging.justgiving.com";

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

const api = {
  createPass: (pass, token) => {
    return fetch(`${API_URL}/pass`, {
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
