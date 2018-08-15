const EARTH_RADIUS_KM = 6371.009;

/**
 * Return distance (KM) between two coordinates
 * @param {Object} coordinateOne Object containing latitude, and longitude keys
 * @param {Object} coordinateTwo Object containing latitude, and longitude keys
 * @return {Float}
 */
function getDistanceBetween(coordinateOne, coordinateTwo) {
  return _haversineCalculation(coordinateOne, coordinateTwo);
}

/**
 * Return distance between two coordinates using Haversine formula
 * @param {Object} coordinateOne Object containing latitude, and longitude keys
 * @param {Object} coordinateTwo Object containing latitude, and longitude keys
 * @return {Float}
 */
function _haversineCalculation(coordinateOne, coordinateTwo) {
// Credits
// https://www.movable-type.co.uk/scripts/latlong.html
// https://en.wikipedia.org/wiki/Haversine_formula
  let latitudeOneRadians = _convertDegreesToRadians(coordinateOne.latitude);
  let latitudeTwoRadians = _convertDegreesToRadians(coordinateTwo.latitude);

  let longitudeOneRadians = _convertDegreesToRadians(coordinateOne.longitude);
  let longitudeTwoRadians = _convertDegreesToRadians(coordinateTwo.longitude);

  let differenceOfLatitude = latitudeOneRadians - latitudeTwoRadians;
  let differenceOfLongitude = longitudeOneRadians - longitudeTwoRadians;

  // The square of half the chord length between the points
  let a = Math.sin(differenceOfLatitude / 2) * Math.sin(differenceOfLatitude / 2)
    + Math.sin(differenceOfLongitude / 2) * Math.sin(differenceOfLongitude / 2)
    * Math.cos(latitudeOneRadians) * Math.cos(latitudeTwoRadians);

  let angularDistanceInRadians = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let distanceBetweenKM = EARTH_RADIUS_KM * angularDistanceInRadians;

  return distanceBetweenKM;
}

/**
 * 
 * @param {Float} degrees
 * @return {Float}
 */
function _convertDegreesToRadians(degrees) {
  let radians = degrees * Math.PI / 180;
  return radians;
}

export {
  getDistanceBetween,
  _haversineCalculation,
  _convertDegreesToRadians
};
