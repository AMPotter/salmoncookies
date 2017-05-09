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
        var newEl = document.createElement('lh');
        var newText = document.createTextNode(this.location);
        newEl.appendChild(newText);
        var position = document.getElementsByTagName('lh')[0];
        position.appendChild(newEl);
    },
    populateSales: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
        var newEl = document.createElement('li');
        var newText = document.createTextNode(this.hourlySales[i]);
        newEl.appendChild(newText);
        var position = document.getElementsByTagName('li')[i];
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
};

