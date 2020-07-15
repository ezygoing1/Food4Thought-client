// This file is where the AJAX requests live
const config = require('./../config')

const foodTrucksIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/foodTrucks'
  })
}

// Accept the foodTruckId as a parameter
const foodTrucksShow = function (foodTruckId) {
  // returnin the invocation of the $.ajax method
  // passing the $.ajax method an object of options
  // method is what type of HTTP request (GET, POST, PATCH)
  // url is where we want to make the request to
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/foodTrucks/' + foodTruckId
  })
}

const foodTrucksDelete = function (foodTruckId) {
  return $.ajax({
    url: config.apiUrl + '/foodTrucks/' + foodTruckId,
    method: 'DELETE'
  })
}

const foodTrucksUpdate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/foodTrucks/' + formData.foodTruck.id,
    method: 'PATCH',
    // data: formData,
    data: {
      foodTruck: {
        title: formData.foodTruck.title,
        author: formData.foodTruck.author
      }
    }
  })
}

const foodTrucksCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/foodTrucks',
    // data: data,
    // data,
    data: {
      foodTruck: {
        title: data.foodTruck.title,
        author: data.foodTruck.author
      }
    }
  })
}

module.exports = {
  foodTrucksIndex: foodTrucksIndex,
  foodTrucksShow: foodTrucksShow,
  foodTrucksDelete: foodTrucksDelete,
  foodTrucksUpdate: foodTrucksUpdate,
  foodTrucksCreate
}
