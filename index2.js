const { nextISSTimesForMyLocation, printPassTimes} = require('./iss_promised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  printPassTimes(passTimes);
})
.catch((error) => {
  console.log("it didn't work: ", error.message);
});