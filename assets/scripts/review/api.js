'use strict'

const config = require('../config')
const store = require('../store')

const review = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/review',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token // IMPORTANT
    },
    data
    // data: data
  })
}

module.exports = {
  review
}
