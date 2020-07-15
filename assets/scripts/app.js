'use strict'

const foodTruckEvents = require('./foodTruck/events.js')
const userEvents = require('./user/events.js')
const authEvents = require('/Users/frederickwoodhouse/sei/projects/Food4Thought-client/assets/scripts/auth/events.js')
$(() => {
  authEvents.addHandlers()
  // foodTrucks listeners:
  $('#foodTruck-index').on('click', foodTruckEvents.onFoodTrucksIndex)
  $('#foodTruck-show').on('submit', foodTruckEvents.onFoodTrucksShow)
  $('#foodTruck-delete').on('submit', foodTruckEvents.onFoodTrucksDelete)
  $('#foodTruck-update').on('submit', foodTruckEvents.onFoodTrucksUpdate)
  $('#foodTruck-create').on('submit', foodTruckEvents.onFoodTrucksCreate)

  // users listeners:
  $('#users-index').on('click', userEvents.onUsersIndex)
  $('#users-show').on('submit', userEvents.onUsersShow)
  $('#users-delete').on('submit', userEvents.onUsersDelete)
  $('#users-update').on('submit', userEvents.onUsersUpdate)
  $('#users-create').on('submit', userEvents.onUsersCreate)
})
