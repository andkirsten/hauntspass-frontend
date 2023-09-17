const API_URL = "api.staging.justgiving.com";
const AppId = "0130e193";

export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

const donationApi = {
  getDonation: (donationId) => {
    return fetch(`${API_URL}/${AppId}/v1/donation/${donationId}`).then(
      handleResponse
    );
  },
};

export default donationApi;
