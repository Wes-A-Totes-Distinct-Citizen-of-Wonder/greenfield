
const axios = require('axios');
const { API_KEY } = require('./config.js')

// uses the api to make coordinates for the map to use
const convertToCoordinates = (address) => {
  const formattedAddress = Object.values(address)
    .join(' ')
    .split(' ')
    .join('+');
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${API_KEY}`);
};

// takes the coordinates and truns them into a useable address
const convertToAddress = (coordinates) => {
  const { lat, lng } = coordinates;

  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`);
};

module.exports = {
  convertToAddress,
  convertToCoordinates,
};
