const API_URL = "api.staging.justgiving.com";

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

const donationApi = {
  getDonation: (donationId) => {
    return fetch(`${API_URL}/donation/${donationId}`).then(handleResponse);
  },
};

export default donationApi;
