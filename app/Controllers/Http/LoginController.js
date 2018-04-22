'use strict'

const AuthService = use('App/Services/AuthService')
const AuthProvider = use('App/Services/Auth')
const User = use('App/Models/User')
const Hash = use('Hash')
const Encryption = use('Encryption')
const { validateAll } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')

class LoginController {

	index(request, response) {
       console.log(request);
    }


   



}

module.exports = LoginController
