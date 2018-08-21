# geolocation-distance-between [![NPM version](https://img.shields.io/npm/v/geolocation-distance-between.svg)](https://www.npmjs.com/package/geolocation-distance-between)
> ES6 module to calculate distance between coordinates

## Installation
```
# NPM
npm install geolocation-distance-between --save

# Yarn
yarn add geolocation-distance-between
```

## Getting Started
```javascript
import { getDistanceBetween } from 'geolocation-distance-between';

let coordinateOne = {latitude: 41.3543, longitude: 71.9665};
let coordianteTwo = {latitude: 41.3890, longitude: 70.5134};

let distanceBetween = getDistanceBetween(coordinateOne, coordinateTwo);

console.log(distanceBetween); // 121.31393500601737 KM
```

## Documentation
### `getDistanceBetween(coordinateOne, coordinateTwo)`

#### Arguments
| Argument | Type |
| -------- | ---- |
| coordinateOne | Object containing latitude and longitude key/value pairs |
| coordinateTwo | Object containing latitude and longitude key/value pairs |

** Latitude/longitude values should be degrees in decimal form

#### Returns
Distance between two coordinates in kilometers (KM). Distance is calculated via the Haversine formula.

## Credit(s)
https://www.movable-type.co.uk/scripts/latlong.html

https://en.wikipedia.org/wiki/Haversine_formula

## License
MIT License Copyright (c) 2018 Joel Colucci