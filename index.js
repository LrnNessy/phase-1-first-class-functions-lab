
function returnFirstTwoDrivers(drivers){
  const firstTwo = drivers.slice(0, 2);
  console.log(firstTwo);
  return firstTwo;
}

function returnLastTwoDrivers(drivers){
  const lastTwo = drivers.slice(-2);
  console.log(lastTwo);
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  }
  }
  


function fareDoubler(fare){ 
  const total = fare * 2;
 return total; 
}


function fareTripler(fare){
  const total = fare * 3;
  return total; 
}


function selectDifferentDrivers(names, callBack){
return callBack(names);

}
