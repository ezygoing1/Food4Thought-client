// This file is where the UI related functions live
const indexSuccess = function (responseData) {
  // Show a success message
  // Display the foodTrucks
  console.log(responseData.foodTrucks)

  // create an empty string variable
  let foodTruckHtml = ''

  // Loop over the foodTrucks and add html to the string variable
  responseData.foodTrucks.forEach(foodTruck => {
    // Create foodTruck HTML
    const oneFoodTruck = (`
      <h4>Title: ${foodTruck.title}</h4>
      <p>Author: ${foodTruck.author}</p>
      <p>ID: ${foodTruck._id}</p>
      <br>
    `)

    // Concatenate it with `foodTruckHtml`
    foodTruckHtml += oneFoodTruck
  })

  // Place all the foodTrucks on the page:
  $('#content').html(foodTruckHtml)
}

const indexFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Index failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
}

// `responseData` is the response object from the API
const showSuccess = function (responseData) {
  console.log(responseData)
  // Create foodTruck HTML
  const foodTruckHtml = (`
    <h4>Title: ${responseData.foodTruck.title}</h4>
    <p>Author: ${responseData.foodTruck.author}</p>
    <br>
  `)

  // Put foodTruck on the page
  // The `.html` method will replace any current content with the content in the variable `foodTruckHtml`
  $('#content').html(foodTruckHtml)

  // Form reset:
  // Selecting all the `form` elements and triggering a `reset` event
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Show foodTruck success')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
}

const showFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Show foodTruck failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const deleteSuccess = function () {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Delete foodTruck success')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
}

const deleteFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Delete foodTruck failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const updateSuccess = function () {
  // Reset form:
  $('form').trigger('reset')

  // messaging:
  $('#message').text('Updated foodTruck successfully! Go Show it to see the updates.')
  $('#message').show()
  $('#message').removeClass().addClass('success')
}

const updateFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Update failed :(')
  $('#message').show().removeClass().addClass('failure')
}

const createSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Create foodTruck successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')

  const newFoodTruck = (`
    <h4>Title: ${responseData.foodTruck.title}</h4>
    <p>Author: ${responseData.foodTruck.author}</p>
    <p>ID: ${responseData.foodTruck._id}</p>
    <br>
  `)

  $('#content').html(newFoodTruck)
}

const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Create failed :(')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  indexSuccess: indexSuccess,
  indexFailure: indexFailure,
  showSuccess: showSuccess,
  showFailure: showFailure,
  deleteSuccess: deleteSuccess,
  deleteFailure: deleteFailure,
  updateSuccess: updateSuccess,
  updateFailure: updateFailure,
  createSuccess,
  createFailure
}
