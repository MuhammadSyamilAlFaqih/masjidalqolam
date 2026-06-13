import axios from 'axios';

const API_BASE_URL = 'https://bimasislam.kemenag.go.id/apiv1';
const API_TOKEN = 'af7c667b9819378c0bddb3baede9525b';

const fetchData = async (url, method = 'GET', params = {}) => {
  try {
    const config = {
      method,
      url: `${API_BASE_URL}${url}`, // Perbaikan: menggunakan template literal dengan backtick
      params: { param_token: API_TOKEN, ...params },
      headers: {
        'Content-Type': 'application/json', // Perubahan untuk mendukung JSON
      },
    };

    if (method === 'POST') {
      config.data = params; // Perbaikan: langsung kirim params tanpa URLSearchParams
    }

    const response = await axios(config);
    console.log('Response:', response.data); // Debugging untuk melihat respons dari API
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return null;
  }
};

const Api = {
  getProvinces: () => fetchData('/getShalatProv'),
  getKabupaten: (provCode) => fetchData('/getShalatKabko', 'GET', { param_prov: provCode }),
  getJadwalShalat: (provCode, kabkoCode, year, month) => 
    fetchData('/getShalatJadwal', 'POST', { param_prov: provCode, param_kabko: kabkoCode, param_thn: year, param_bln: month })
};

export default Api;

