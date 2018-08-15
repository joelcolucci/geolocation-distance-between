import {
  getDistanceBetween,
  _haversineCalculation,
  _convertDegreesToRadians } from '../lib/index';


describe('Module private functions', () => {
  test('_convertDegreesToRadians', () => {
    let degrees = 59;
    let radiansExpected = 1.0297442586766543;

    let radiansResult = _convertDegreesToRadians(degrees);

    expect(radiansResult).toEqual(radiansExpected);
  });

  test('_haversineCalculation', () => {
    let coordinateOne = {latitude: 41.3543, longitude: 71.9665};
    let coordianteTwo = {latitude: 41.3890, longitude: 70.5134};

    let distanceExpected = 121.31393500601737;
    let distanceResult = _haversineCalculation(coordinateOne, coordianteTwo);

    expect(distanceResult).toEqual(distanceExpected);
  });
});


describe('Module public functions', () => {
  test('getDistanceBetween', () => {
    let coordinateOne = {latitude: 41.3543, longitude: 71.9665};
    let coordianteTwo = {latitude: 41.3890, longitude: 70.5134};

    let distanceExpected = 121.31393500601737;
    let distanceResult = getDistanceBetween(coordinateOne, coordianteTwo);

    expect(distanceResult).toEqual(distanceExpected);
  });
});