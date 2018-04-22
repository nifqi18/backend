'use strict'

const AuthProvider = use('App/Services/AuthService')

const User = use('App/Models/User')
const Post = use('App/Models/PostKerja')
const Hash = use('Hash')
const Encryption = use('Encryption')
const { validateAll } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')

class UserController {

    async register ({ request, response }) {
	    const validation = await validateAll(request.all(), {
      		email: 'required|email|unique:users,email', // unique menandakan user tidak boleh sama 
      		password: 'required',
    	})
    	if (validation.fails()) throw new ValidationException(validation.messages())

    	const user = new User()
    	user.password = request.input('password')
    	user.email = request.input('email')
    	user.username = request.input('username')
    	await user.save()

    	return response.send({ message: 'Insert successfully.' })
	     
  	}

    async tologin ({ request, response , auth }) {

      const { email, password } = request.all()
      const validation = await validateAll(request.all() , {
        email : 'required|email',
        password : 'required'
      });


      if(validation.fails()) throw new ValidationException(validation._errorMessages);

      const result = await AuthProvider.login(auth , email , password);

      if(result.data !== null){
        return response.status(result.status).send({content : result.data})
      }

      return response.status(result.status).send({content : result.message});
    }

   	async toLogout ({ request, response , auth }) {

  	    const { email, password } = request.all()
  	    const validation = await validateAll(request.all() , {
  	    	email : 'required|email',
  	    	password : 'required'
  	    });


  	    if(validation.fails()) throw new ValidationException(validation._errorMessages);

  	    const result = await AuthProvider.login(auth , email , password);

  	    if(result.data !== null){
  	    	return response.status(result.status).send({content : result.data})
  	    }

  	    return response.status(result.status).send({content : result.message});
    	}

    async getToken({request , response , auth}){
      let currentuser = auth.current.user;
      delete currentuser.password;
      return response.status(200).send({message : { userid : currentuser.id }})
    }






}

module.exports = UserController
