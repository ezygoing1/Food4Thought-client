// This file is where the UI related functions live
const indexSuccess = function (responseData) {
  // Show a success message
  $('#message').text('Indexed users successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  // Display the users
  console.log(responseData.users)

  // create an empty string variable
  let userHtml = ''

  // Loop over the users and add html to the string variable
  responseData.users.forEach(user => {
    // Create user HTML
    const oneFoodTruck = (`
      <h4>First Name: ${user.first_name}</h4>
      <p>Last Name: ${user.last_name}</p>
      <p>ID: ${user._id}</p>
      <br>
    `)

    // Concatenate it with `userHtml`
    userHtml += oneFoodTruck
  })

  // Place all the users on the page:
  $('#content').html(userHtml)
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
  // Create user HTML
  const userHtml = (`
    <h4>First Name: ${responseData.user.first_name}</h4>
    <p>Last Name: ${responseData.user.last_name}</p>
    <br>
  `)

  // Put user on the page
  // The `.html` method will replace any current content with the content in the variable `userHtml`
  $('#content').html(userHtml)

  // Form reset:
  // Selecting all the `form` elements and triggering a `reset` event
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Show user success')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
}

const showFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Show user failed!')
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
  $('#message').text('Delete user success')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
}

const deleteFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Delete user failed!')
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
  $('#message').text('Updated user successfully! Go Show it to see the updates.')
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

  $('#message').text('Create user successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')

  const newFoodTruck = (`
    <h4>First Name: ${responseData.user.first_name}</h4>
    <p>Last Name: ${responseData.user.last_name}</p>
    <p>ID: ${responseData.user._id}</p>
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
