
const axios = require('axios');

const convertToCoordinates = (address) => {
  const formattedAddress = Object.values(address)
    .join(' ')
    .split(' ')
    .join('+');
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=AIzaSyAUC9d7O4XqLWX0HSM7Nf-zXs0WYUvY5kc`)
};

const convertToAddress = (coordinates) => {
  const { lat, lng } = coordinates;

  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAUC9d7O4XqLWX0HSM7Nf-zXs0WYUvY5kc`)
};

module.exports = {
  convertToAddress,
  convertToCoordinates,
};
