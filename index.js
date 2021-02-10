// Code your solution in this file!

// should accept an array of drivers as an argument and return the first two drivers in the array.
const returnFirstTwoDrivers = function(driverArray) {
    return driverArray.slice(0,2)
}

// should accept an array of drivers as an argument and return the last two drivers in the array.
const returnLastTwoDrivers = function(driverArray) {
    return driverArray.slice(-2)
}

// an array containing two elements: the two functions that we previously defined
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly.
const createFareMultiplier = function (quadruple) {
    return function (int) {
      return quadruple * int;
    };
  };
  //let createFareMultiplier = (int) => int * 4

// assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function 
// accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);
// accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);

// This function takes two arguments, an array of drivers and either the 
// returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
// Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
}