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
    this.populateSales();
}

//define universal values

Store.prototype.hoursOpen = hoursArray.length;
Store.prototype.salesTotal = 0;
// Store.prototype.hourlySales = [];

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

//populate sales figures
Store.prototype.populateSales = function() {
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

        // console.log('looping through popSale');
        // var newEl = document.createElement('tr')[i]; //create table row
        // var newText = document.createTextNode(this.hourlySales[i]); //make text node with hourly sales
        // newEl.appendChild(newText); //put hourly sales text into table row
        // var position = document.getElementsByTagName('tbody')[i];
        // position.appendChild(newEl);

//create object instances for store locations

var pdxAirportObj = new Store ('PDX Airport', 23, 65, 6.3);
var pioneerSquareObj = new Store ('Pioneer Square', 3, 24, 1.2);
var powellsObj = new Store ('Powell\'s', 11, 38, 3.7);
var stJohnsObj = new Store ('St. John\'s', 20, 38, 2.3);
var waterfrontObj = new Store ('Waterfront', 2, 16, 4.6);
// pdxAirportObj.populateSales();
// pioneerSquareObj.populateSales();
// powellsObj.populateSales();
// stJohnsObj.populateSales();
// waterfrontObj.populateSales();

//////////////////////Outdated Obj Declarations///////////////////////////////////
// var pdxAirportObj = {
//     objectNumber: 0,
//     location: 'PDX Airport',
//     minCustomers: 23,
//     maxCustomers: 65,
//     salesAverage: 6.3,
//     hoursOpen: 14,
//     hourlySales: [],
//     salesTotal: 0,
//     salesEstimate: function() {
//         for (var i = 0; i < this.hoursOpen; i++) {
//             var randomSales = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers);
//             this.hourlySales.push(randomSales);
//         }        
//     },
//     calculateTotal: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             this.salesTotal += this.hourlySales[i];
//             // console.log(this.salesTotal);
//         }
//     },
//     populateLocation: function() {
//         var newText = document.createTextNode(this.location); //Waterfront
//         var position = document.getElementsByTagName('lh')[this.objectNumber];
//         position.appendChild(newText);
//     },
//     populateSales: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             var newEl = document.createElement('li');
//             var newText = document.createTextNode(this.hourlySales[i]);
//             newEl.appendChild(newText);
//             var position = document.getElementsByTagName('ul')[this.objectNumber];
//             position.appendChild(newEl);
//         }
//     }
// };

// var pioneerSquareObj = {
//     objectNumber: 1,
//     location: 'Pioneer Square',
//     minCustomers: 3,
//     maxCustomers: 24,
//     salesAverage: 1.2,
//     hoursOpen: 14,
//     hourlySales: [],
//     salesTotal: 0,
//     salesEstimate: function() {
//         for (var i = 0; i < this.hoursOpen; i++) {
//             this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
//             console.log(this.hourlySales);
//         } 
//     },
//     calculateTotal: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             this.salesTotal += this.hourlySales[i];
//             console.log(this.salesTotal);
//         }
//     },
//     populateLocation: function() {
//         var newText = document.createTextNode(this.location);
//         var position = document.getElementsByTagName('lh')[this.objectNumber];
//         position.appendChild(newText);
//     },
//     populateSales: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             var newEl = document.createElement('li');
//             var newText = document.createTextNode(this.hourlySales[i]);
//             newEl.appendChild(newText);
//             var position = document.getElementsByTagName('ul')[this.objectNumber];
//             position.appendChild(newEl);
//         }
//     }
// };

// var powellsObj = {
//     objectNumber: 2,
//     location: 'Powell\'s',
//     minCustomers: 11,
//     maxCustomers: 38,
//     salesAverage: 3.7,
//     hoursOpen: 14,
//     hourlySales: [],
//     salesTotal: 0,
//     salesEstimate: function() {
//         for (var i = 0; i < this.hoursOpen; i++) {
//             this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
//             console.log(this.hourlySales);
//         } 
//     },
//     calculateTotal: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             this.salesTotal += this.hourlySales[i];
//             console.log(this.salesTotal);
//         }
//     },
//     populateLocation: function() {
//         var newText = document.createTextNode(this.location);        // newEl.appendChild(newText);
//         var position = document.getElementsByTagName('lh')[this.objectNumber];
//         position.appendChild(newText);
//     },
//     populateSales: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             var newEl = document.createElement('li');
//             var newText = document.createTextNode(this.hourlySales[i]);
//             newEl.appendChild(newText);
//             var position = document.getElementsByTagName('ul')[this.objectNumber];
//             position.appendChild(newEl);
//         }
//     }
// };

// var stJohnsObj = {
//     objectNumber: 3,
//     location: 'St. John\'s',
//     minCustomers: 20,
//     maxCustomers: 38,
//     salesAverage: 2.3,
//     hoursOpen: 14,
//     hourlySales: [],
//     salesTotal: 0,
//     salesEstimate: function() {
//         for (var i = 0; i < this.hoursOpen; i++) {
//             this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
//             console.log(this.hourlySales);
//         } 
//     },
//     calculateTotal: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             this.salesTotal += this.hourlySales[i];
//             console.log(this.salesTotal);
//         }
//     },
//     populateLocation: function() {
//         var newText = document.createTextNode(this.location);        // newEl.appendChild(newText);
//         var position = document.getElementsByTagName('lh')[this.objectNumber];
//         position.appendChild(newText);
//     },
//     populateSales: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             var newEl = document.createElement('li');
//             var newText = document.createTextNode(this.hourlySales[i]);
//             newEl.appendChild(newText);
//             var position = document.getElementsByTagName('ul')[this.objectNumber];
//             position.appendChild(newEl);
//         }
//     }
// };

// var waterfrontObj = {
//     objectNumber:4,
//     location: 'Waterfront',
//     minCustomers: 2,
//     maxCustomers: 16,
//     salesAverage: 4.6,
//     hoursOpen: 14,
//     hourlySales: [],
//     salesTotal: 0,
//     salesEstimate: function() {
//         for (var i = 0; i < this.hoursOpen; i++) {
//             this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
//             console.log(this.hourlySales);
//         } 
//     },
//     calculateTotal: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             this.salesTotal += this.hourlySales[i];
//             console.log(this.salesTotal);
//         }
//     },
//     populateLocation: function() {
//         var newText = document.createTextNode(this.location);        // newEl.appendChild(newText);
//         var position = document.getElementsByTagName('lh')[this.objectNumber];
//         position.appendChild(newText);
//     },
//     populateSales: function() {
//         for (var i = 0; i < this.hourlySales.length; i++) {
//             var newEl = document.createElement('li');
//             var newText = document.createTextNode(this.hourlySales[i]);
//             newEl.appendChild(newText);
//             var position = document.getElementsByTagName('ul')[this.objectNumber];
//             position.appendChild(newEl);
//         }
//     }
// };

// //I'm really tired of calling these manually when I'm testing this thing, so:

// //Call functions to generate estimated sales.
// // pdxAirportObj.salesEstimate();
// // pioneerSquareObj.salesEstimate();
// // powellsObj.salesEstimate();
// // stJohnsObj.salesEstimate();
// // waterfrontObj.salesEstimate();

// // //Calculate totals
// // pdxAirportObj.calculateTotal();
// // pioneerSquareObj.calculateTotal();
// // powellsObj.calculateTotal();
// // stJohnsObj.calculateTotal();
// // waterfrontObj.calculateTotal();

// // //Create/populate <lh> with location names
// // pdxAirportObj.populateLocation();
// // pioneerSquareObj.populateLocation();
// // powellsObj.populateLocation();
// // stJohnsObj.populateLocation();
// // waterfrontObj.populateLocation();

// // //Create/populate <li> with list of sales by hour
// // pdxAirportObj.populateSales();
// // pioneerSquareObj.populateSales();
// // powellsObj.populateSales();
// // stJohnsObj.populateSales();
// // waterfrontObj.populateSales();