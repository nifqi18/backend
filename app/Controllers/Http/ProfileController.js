

const Profile = use('App/Models/Profile')
const { validateAll } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')
const uuid = require('node-uuid')

class ProfileController { 


	async CreateProfile({auth , request , response}){

		const data = request.only(['about', 'imageurl']);
  		//
  		const user = await auth.authenticator('api').getUser();
  		// atau auth.current.user;

  		const validation = await validateAll(data, {
	      about: 'required',
	      imageurl: 'required',
	    })

	    if (validation.fails()) throw new ValidationException(validation._errorMessages)

  		const _profile = await Profile.create(data); // 
  		await _profile.user().associate(user)


    	return response.send({message : 'successfully' })
	}
}

module.exports = ProfileController