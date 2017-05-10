'use strict';

//declare global variables
var storesArray = [];
var hoursArray = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];

//define object class

function Store (location, minCustomers, maxCustomers, salesAverage) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.salesAverage = salesAverage;
    this.hourlySales = [];
    
    //upon creation, do these
    storesArray.push(this);
    this.salesEstimate();
    this.calculateTotal();
    this.populateLocation();
    this.populateFooter();
}

//define universal values

Store.prototype.hoursOpen = hoursArray.length;
Store.prototype.salesTotal = 0;

//define object class functions

//generate sales estimate
Store.prototype.salesEstimate = function() {
    for (var i = 0; i < this.hoursOpen; i++) {
        var randomSales = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers);
        this.hourlySales.push(randomSales);
        console.log(this.hourlySales);
    }
};

//calculate total daily sales
Store.prototype.calculateTotal = function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
        this.salesTotal += this.hourlySales[i];
        console.log(this.salesTotal);
    }
};

//populate location name
Store.prototype.populateLocation = function() {
    console.log('looping through popLoc');
    var getTR = document.getElementsByTagName('tr')[0];
    var newTH = document.createElement('th');
    var newTextNode = document.createTextNode(this.location);        // getTR.appendChild(newTextNode);
    getTR.appendChild(newTH);
    newTH.appendChild(newTextNode);
};

//populate sales total
Store.prototype.populateFooter = function() {
    var getTF = document.getElementById('totalrow');
    console.log('populate footer');
    var newTH = document.createElement('th');
    var newTextNode = document.createTextNode(this.salesTotal);
    getTF.appendChild(newTH);
    newTH.appendChild(newTextNode);
}

//populate sales figures
function populateSales() {
    var tableBody = document.getElementById('tbody'); //link to table body, maybe this works??
    for (var i = 0; i < hoursArray.length; i++) { //Loop through array of hours
        console.log('looping through popSales');
        var newTR = document.createElement('tr'); //create table row
        var newTD = document.createElement('td'); //create table data
        var newTextNode = document.createTextNode(hoursArray[i]); //create text node containing current index of hours array
        tableBody.appendChild(newTR); //  Just trying this out??
        newTR.appendChild(newTD); //append the data cell to the table row
        newTD.appendChild(newTextNode); //append text node to the table data cell

        
        for (var h = 0; h < storesArray.length; h++) {
            console.log('looping through popSales part 2');
            var salesTD = document.createElement('td'); //create sales data cell
            var cellData = storesArray[h].hourlySales[i]; //create data FOR the cell // ERROR OCCURS HERE (h is undefined/0) ERROR FIXED BY REMOVING .length FROM storesArray IN LOOP SETUP
            var salesTextNode = document.createTextNode(cellData); //create text node with cell data in it
            salesTD.appendChild(salesTextNode); //append text node to data cell
            newTR.appendChild(salesTD); //append data cell to table row
        }
    }
};

//create object instances for store locations

var pdxAirportObj = new Store ('PDX Airport', 23, 65, 6.3);
var pioneerSquareObj = new Store ('Pioneer Square', 3, 24, 1.2);
var powellsObj = new Store ('Powell\'s', 11, 38, 3.7);
var stJohnsObj = new Store ('St. John\'s', 20, 38, 2.3);
var waterfrontObj = new Store ('Waterfront', 2, 16, 4.6);

populateSales();