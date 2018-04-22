
'use strict'

const Response = use('App/Class/Response');

class Auth {

	async login(auth , email , password){
		try {
      		const token = await auth.authenticator('api').attempt(email, password)
      		return new Response(200, null, token)
	    }
	    catch (error/* istanbul ignore next */) {
	      let message = null
	      switch (error.name) {
	        case 'UserNotFoundException': message = 'Cannot find user with provided email.'; break
	        case 'PasswordMisMatchException': message = 'Invalid user password.'; break
	      }

	      return new Response(error.status, message, null)
	    }
	}
}

module.exports = new Auth;