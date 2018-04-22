'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ValidationException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
  handle (error, { response }) {
  	//console.log(error.message);
  	
    response.badRequest({ message: 'ValidateError', errors: error.message })
  }
}

module.exports = ValidationException
