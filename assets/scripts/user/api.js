// This file is where the AJAX requests live
const config = require('./../config')

const userIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/authors'
  })
}

// Accept the authorId as a parameter
const userShow = function (authorId) {
  // returnin the invocation of the $.ajax method
  // passing the $.ajax method an object of options
  // method is what type of HTTP request (GET, POST, PATCH)
  // url is where we want to make the request to
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/user/' + authorId
  })
}

const userDelete = function (authorId) {
  return $.ajax({
    url: config.apiUrl + '/user/' + authorId,
    method: 'DELETE'
  })
}

const userUpdate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/user/' + formData.author.id,
    method: 'PATCH',
    // data: formData,
    data: {
      author: {
        first_name: formData.author.first_name,
        last_name: formData.author.last_name
      }
    }
  })
}

const userCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/user',
    // data: data,
    // data,
    data: {
      author: {
        first_name: data.author.first_name,
        last_name: data.author.last_name
      }
    }
  })
}

module.exports = {
  userIndex: userIndex,
  userShow: userShow,
  userDelete: userDelete,
  userUpdate: userUpdate,
  userCreate
}
