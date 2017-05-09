'use strict';

var pdxAirportObj = {
    objectNumber: 0,
    location: 'PDX Airport',
    minCustomers: 23,
    maxCustomers: 65,
    salesAverage: 6.3,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            var randomSales = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers);
            this.hourlySales.push(randomSales);
        }        
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            // console.log(this.salesTotal);
        }
    },
    populateLocation: function() {
        var newText = document.createTextNode(this.location); //Waterfront
        var position = document.getElementsByTagName('lh')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            var newEl = document.createElement('li');
            var newText = document.createTextNode(this.hourlySales[i]);
            newEl.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newEl);
        }
    }
};

var pioneerSquareObj = {
    objectNumber: 1,
    location: 'Pioneer Square',
    minCustomers: 3,
    maxCustomers: 24,
    salesAverage: 1.2,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal);
        }
    },
    populateLocation: function() {
        var newText = document.createTextNode(this.location);
        var position = document.getElementsByTagName('lh')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            var newEl = document.createElement('li');
            var newText = document.createTextNode(this.hourlySales[i]);
            newEl.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newEl);
        }
    }
};

var powellsObj = {
    objectNumber: 2,
    location: 'Powell\'s',
    minCustomers: 11,
    maxCustomers: 38,
    salesAverage: 3.7,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal);
        }
    },
    populateLocation: function() {
        var newText = document.createTextNode(this.location);        // newEl.appendChild(newText);
        var position = document.getElementsByTagName('lh')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            var newEl = document.createElement('li');
            var newText = document.createTextNode(this.hourlySales[i]);
            newEl.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newEl);
        }
    }
};

var stJohnsObj = {
    objectNumber: 3,
    location: 'St. John\'s',
    minCustomers: 20,
    maxCustomers: 38,
    salesAverage: 2.3,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal);
        }
    },
    populateLocation: function() {
        var newText = document.createTextNode(this.location);        // newEl.appendChild(newText);
        var position = document.getElementsByTagName('lh')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            var newEl = document.createElement('li');
            var newText = document.createTextNode(this.hourlySales[i]);
            newEl.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newEl);
        }
    }
};

var waterfrontObj = {
    objectNumber:4,
    location: 'Waterfront',
    minCustomers: 2,
    maxCustomers: 16,
    salesAverage: 4.6,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal);
        }
    },
    populateLocation: function() {
        var newText = document.createTextNode(this.location);        // newEl.appendChild(newText);
        var position = document.getElementsByTagName('lh')[this.objectNumber];
        position.appendChild(newText);
    },
    populateSales: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            var newEl = document.createElement('li');
            var newText = document.createTextNode(this.hourlySales[i]);
            newEl.appendChild(newText);
            var position = document.getElementsByTagName('ul')[this.objectNumber];
            position.appendChild(newEl);
        }
    }
};

//I'm really tired of calling these manually when I'm testing this thing, so:

//Call functions to generate estimated sales.
pdxAirportObj.salesEstimate();
pioneerSquareObj.salesEstimate();
powellsObj.salesEstimate();
stJohnsObj.salesEstimate();
waterfrontObj.salesEstimate();

//Calculate totals
pdxAirportObj.calculateTotal();
pioneerSquareObj.calculateTotal();
powellsObj.calculateTotal();
stJohnsObj.calculateTotal();
waterfrontObj.calculateTotal();

//Create/populate <lh> with location names
pdxAirportObj.populateLocation();
pioneerSquareObj.populateLocation();
powellsObj.populateLocation();
stJohnsObj.populateLocation();
waterfrontObj.populateLocation();

//Create/populate <li> with list of sales by hour
pdxAirportObj.populateSales();
pioneerSquareObj.populateSales();
powellsObj.populateSales();
stJohnsObj.populateSales();
waterfrontObj.populateSales();