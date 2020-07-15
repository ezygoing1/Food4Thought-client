// This file is where the event handlers live
const api = require('./api')
const ui = require('./ui')

// require getFormFields:
const getFormFields = require('../../../lib/get-form-fields.js')

const onUsersIndex = function (event) {
  console.log(event)
  // Call the api function
  // and handle success with `.then`
  // or failure with `.catch`
  api.authorsIndex()
    // Pass `.then` a CALLBACK to BE RUN LATER on success
    .then(ui.indexSuccess)
    // Pass `.catch` a CALLBACK to BE RUN LATER on failure
    .catch(ui.indexFailure)
}

const onUsersShow = function (event) {
  console.log(event.type, event.target)
  // stop the form submit from trying to make a GET request by refreshing the page
  event.preventDefault()

  // Since this is a submit event, the target will be the form
  const form = event.target
  // Passed the form to getFormFields
  const data = getFormFields(form)
  console.log(data)
  // { author: { id: 'whatever i typed' } }

  // Send the ID to the `api.authorsShow` function as an argument
  api.authorsShow(data.author.id)
    // success:
    // ui.showSuccess is the named callback function TO BE RUN LATER when the API gives a successful response
    // `.then` will pass the response form the API to `ui.showSuccess` and invoke it when its time
    .then(ui.showSuccess)
    // failure:
    .catch(ui.showFailure)
}

const onUsersDelete = function (event) {
  // Prevent the default functionality of throw the data into the client URL and refresh the page to make a GET request
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.authorsDelete(data.author.id)
    // success
    .then(ui.deleteSuccess)
    // failure
    .catch(ui.deleteFailure)
}

const onUsersUpdate = function (event) {
  // Submit will do some default functionality:
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // { author: { title: 'my title', author: 'the author', id: '018uy3508h0b9ygy' }}

  api.authorsUpdate(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onUsersCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.authorsCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

module.exports = {
  onUsersIndex: onUsersIndex,
  onUsersShow: onUsersShow,
  onUsersDelete: onUsersDelete,
  onUsersUpdate: onUsersUpdate,
  onUsersCreate: onUsersCreate
}
