const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/location', (req, res) => {
  res.send(findLatLong(req.query.data));
});

const findLatLong = (query) => {
  const geoData = require('./data/geo.json');
  const location = new Location(query, geoData);
  return location;
};

function Location(query, data) {
  (this.searchQuery = query),
  (this.formattedQuery = data.results[0].formatted_address),
  (this.latitude = data.results[0].geometry.location.lat),
  (this.longitude = data.results[0].geometry.location.lng);
}

app.listen(port, () => console.log('Listening!!!'));
