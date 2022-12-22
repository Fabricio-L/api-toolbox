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
    return error.response
  });

const filesData = (file) => 
  axios.request({
    method: 'GET',
    url: `${url}/file/${file}`,
    headers: {Authorization: 'Bearer aSuperSecretKey'}
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return error.response
  });

module.exports = { listFiles, filesData }