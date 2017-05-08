'use strict';

var pdxAirportObj = {
    location: 'PDX Airport',
    minCustomers: 23,
    maxCustomers: 65,
    salesAverage: 6.3,
    
    salesEstimate: function() {
        var salesNumber = Math.random()*(maxCustomers - minCustomers)+minCustomers;
    }
};

var pioneerSquareObj = {
    location: 'Pioneer Square',
    minCustomers: 3,
    maxCustomers: 24,
    salesAverage: 1.2,
};

var powellsObj = {
    location: 'Powell\'s',
    minCustomers: 11,
    maxCustomers: 38,
    salesAverage: 3.7,
};

var stJohnsObj = {
    location: 'St. John\'s',
    minCustomers: 20,
    maxCustomers: 38,
    salesAverage: 2.3,
};

var waterfrontObj = {
    location: 'Waterfront',
    minCustomers: 2,
    maxCustomers: 16,
    salesAverage: 4.6,
};