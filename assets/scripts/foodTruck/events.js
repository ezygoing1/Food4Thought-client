// This file is where the event handlers live
const api = require('./api')
const ui = require('./ui')

// require getFormFields:
const getFormFields = require('../../../lib/get-form-fields.js')

const onFoodTrucksIndex = function (event) {
  console.log(event)
  // Call the api function
  // and handle success with `.then`
  // or failure with `.catch`
  api.foodTrucksIndex()
    // Pass `.then` a CALLBACK to BE RUN LATER on success
    .then(ui.indexSuccess)
    // Pass `.catch` a CALLBACK to BE RUN LATER on failure
    .catch(ui.indexFailure)
}

const onFoodTrucksShow = function (event) {
  console.log(event.type, event.target)
  // stop the form submit from trying to make a GET request by refreshing the page
  event.preventDefault()

  // Since this is a submit event, the target will be the form
  const form = event.target
  // Passed the form to getFormFields
  const data = getFormFields(form)
  console.log(data)
  // { foodTruck: { id: 'whatever i typed' } }

  // Send the ID to the `api.foodTrucksShow` function as an argument
  api.foodTrucksShow(data.foodTruck.id)
    // success:
    // ui.showSuccess is the named callback function TO BE RUN LATER when the API gives a successful response
    // `.then` will pass the response form the API to `ui.showSuccess` and invoke it when its time
    .then(ui.showSuccess)
    // failure:
    .catch(ui.showFailure)
}

const onFoodTrucksDelete = function (event) {
  // Prevent the default functionality of throw the data into the client URL and refresh the page to make a GET request
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.foodTrucksDelete(data.foodTruck.id)
    // success
    .then(ui.deleteSuccess)
    // failure
    .catch(ui.deleteFailure)
}

const onFoodTrucksUpdate = function (event) {
  // Submit will do some default functionality:
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // { foodTruck: { title: 'my title', author: 'the author', id: '018uy3508h0b9ygy' }}

  api.foodTrucksUpdate(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onFoodTrucksCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.foodTrucksCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

module.exports = {
  onFoodTrucksIndex: onFoodTrucksIndex,
  onFoodTrucksShow: onFoodTrucksShow,
  onFoodTrucksDelete: onFoodTrucksDelete,
  onFoodTrucksUpdate: onFoodTrucksUpdate,
  onFoodTrucksCreate: onFoodTrucksCreate
}
