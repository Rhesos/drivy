'use strict';

function getDriverPrice(cars, rentals){

  var priceFromDays = 0;
  var priceFromDistance = 0;
  var days = 0;
  var hours = 0;
  var index = 0;
  var i = 0;
  var j = 0;
  var k = 0;

  for (index = 0; index < rentals.length; index++) {
    rentals[index].carid;
    for (i = 0; i < cars.length; i++) {
      if (cars[i].idc == rentals[index].carId)
      {
        priceFromDistance = 0;
        priceFromDistance += rentals[index].distance * cars[i].pricePerKm;
        priceFromDays = 0;

        var dateReturn = new Date(rentals[index].returnDate);
        var datePick = new Date(rentals[index].pickupDate);

        days = Math.abs(dateReturn - datePick) / (60*60*1000*24);
        days++;

        priceFromDays += days*cars[i].pricePerDay;

        if(days > 1)
        {
         if(days < 5){
           priceFromDays*=0.9;
         }
         else if(days <11){
           priceFromDays*=0.7;
         }
         else{
           priceFromDays*=0.5;
         }
       }

       var totalPrice = (priceFromDays+priceFromDistance);

       var commission = totalPrice*0.3;
       var brotherMoney = totalPrice-commission;
       var assist = days;
       var insurance = commission*0.5;
       var drivy = commission-assist-insurance;

       if(rentals[index].options.deductibleReduction){
        var addDeductibleReduction = days*4;
        totalPrice+=addDeductibleReduction;
        drivy+=addDeductibleReduction;
      }

      document.write('<p>' + rentals[index].driver.firstName + ' ' + rentals[index].driver.lastName + ' must pay ' + totalPrice + ' euros </p>');
      document.write('<p> Insurance : ' + insurance+ ', assistance : ' +assist + ', Drivy : ' +drivy + ', brother earns ' + brotherMoney +'</p>');

      for (j = 0; j < actors.length; j++) {
        if(actors[j].rentalId == rentals[index].id){
          for (k = 0; k < actors[j].payment.length; k++){
            if(actors[j].payment[k].who == "owner"){
              actors[j].payment[k].amount+=brotherMoney;
            }
            else if(actors[j].payment[k].who=="insurance"){
              actors[j].payment[k].amount+=insurance;
            }
            else if(actors[j].payment[k].who=="drivy"){
              actors[j].payment[k].amount+=drivy;
            }
            else if(actors[j].payment[k].who=="assistance"){
              actors[j].payment[k].amount+=assist;
            }
            else {
              actors[j].payment[k].amount+=totalPrice;
            }
          }
        }
      }

    }
  }
}
}

//list of cars
//useful for ALL exercises
var cars = [{
  'idc': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'idc': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'idc': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

getDriverPrice(cars, rentals);

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
