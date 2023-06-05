import axios from 'axios';

export const fetchRequest = async (urlPath, options = {}) => {
  try {
    const BASE_URL =
      'http://ec2-3-70-250-130.eu-central-1.compute.amazonaws.com:5500/api/v1';

    const requestOption = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        UserID: 'Aziret26',
      },
    };

    if (options.method !== 'GET') {
      requestOption.data = options.body;
    }

    const response = await axios(`${BASE_URL}${urlPath}`, requestOption);
    const { data } = response.data;

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
