// Code your solution in this file!

//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

//function returnFirstTwoDrivers(){

//}

 const returnFirstTwoDrivers = function (drivers) {
    ['Sally', 'Bob', 'Freddy', 'Claudia']
    return drivers.slice(0,2);

}

const returnLastTwoDrivers = function(drivers) {
    ['Sally', 'Bob', 'Freddy', 'Claudia']
    return drivers.slice(2,4);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (a){
    return function(b) {
        return a * b;
    }

}

 function fareDoubler(a){
     return a + a;

 }

 const fareTripler = createFareMultiplier(3)

 const selectDifferentDrivers = function(drivers, a){
     return a(drivers);
 }

 
     
 