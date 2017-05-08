'use strict';

var pdxAirportObj = {
    location: 'PDX Airport',
    minCustomers: 23,
    maxCustomers: 65,
    salesAverage: 6.3,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            pdxAirportObj.hourlySales.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        }        
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            pdxAirportObj.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal);
        }
    },
};

var pioneerSquareObj = {
    location: 'Pioneer Square',
    minCustomers: 3,
    maxCustomers: 24,
    salesAverage: 1.2,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * this.maxCustomers - this.minCustomers) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal;)
        }
    },
};

var powellsObj = {
    location: 'Powell\'s',
    minCustomers: 11,
    maxCustomers: 38,
    salesAverage: 3.7,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * this.maxCustomers - this.minCustomers) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal;)
        }
    },
};

var stJohnsObj = {
    location: 'St. John\'s',
    minCustomers: 20,
    maxCustomers: 38,
    salesAverage: 2.3,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * this.maxCustomers - this.minCustomers) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal;)
        }
    },

};

var waterfrontObj = {
    location: 'Waterfront',
    minCustomers: 2,
    maxCustomers: 16,
    salesAverage: 4.6,
    hoursOpen: 14,
    hourlySales: [],
    salesTotal: 0,
    salesEstimate: function() {
        for (var i = 0; i < this.hoursOpen; i++) {
            this.hourlySales.push(Math.floor(Math.random() * this.maxCustomers - this.minCustomers) * this.salesAverage + this.minCustomers));
            console.log(this.hourlySales);
        } 
    },
    calculateTotal: function() {
        for (var i = 0; i < this.hourlySales.length; i++) {
            this.salesTotal += this.hourlySales[i];
            console.log(this.salesTotal;)
        }
    },
};