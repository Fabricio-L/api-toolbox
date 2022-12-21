require('dotenv').config()
const axios = require('axios').default

const url = process.env.API_URL

const options = {
  method: 'GET',
  url: `${url}/files`,
  headers: {Authorization: 'Bearer aSuperSecretKey'}
};

const listFiles = () => axios.request(options).then((response) => {
    return response.data;
  }).catch((error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

const filesData = (file) => 
  axios.request({
    method: 'GET',
    url: `${url}/file/${file}`,
    headers: {Authorization: 'Bearer aSuperSecretKey'}
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

module.exports = { listFiles, filesData }