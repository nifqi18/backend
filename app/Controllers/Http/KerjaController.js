'use strict'

const AuthProvider = use('App/Services/AuthService')

const User = use('App/Models/User')
const Post = use('App/Models/PostKerja')
//const DataLowongan = use('App/Models/DataLowongan')
const Hash = use('Hash')
const { validateAll } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')


class KerjaController {

	 async postkerja({auth , request , response}){
  		const data = request.only(['judul', 'content']);
  		//
  		const user = await auth.authenticator('api').getUser();
  		// atau auth.current.user;

  		const validation = await validateAll(data, {
	      judul: 'required',
	      content: 'required',
	    })

	    if (validation.fails()) throw new ValidationException(validation._errorMessages)

  		const profile = await Post.create(data); // 
  		await profile.user().associate(user)


    	return response.send({message : 'successfully' , postid : profile.id})
  	}

  	async putUpdate ({ request, params, response }) {

	    const validation = await validateAll(request.all(), {
	      id : `required`,
	      salari: `required`,
	      lokasi: 'required',
	      type_lowongan: `required`,
	      benefit : `required`
	    })
    /* istanbul ignore if */
    	if (validation.fails()) throw new ValidationException(validation.messages())

	    const data = await Post.findOrFail(request.input('id'))
	    data.salari = request.input('salari')
	    data.lokasi = request.input('lokasi')
	    data.type_lowongan = request.input('type_lowongan')
	    data.benefit = request.input('benefit')

	    await data.save()

    	return response.send({ message: 'Update successfully.' })
  	}

    async search({request , params , response}){

      if(!request.input('params')) return  response.badRequest({ message: 'No Input Value'})
      let Data = await 
      Post
      .query()
      .select('judul')

   

      const test = Data.filter(state =>
      state.judul.toLowerCase().indexOf(request.input('params').toLowerCase()) === 0);

      return response.send({message : test})
    }

    async loadbyprofile({request , auth , response}){
      if(!request.input('params')) return response.badRequest({message : 'no input params'})

      const Data = await 
      Post
      .query()
      .ignoreScopes()
      .with('user')
      .paginate(request.input('params'), 6)

      return response.send(Data);

    } 

    async GetLowkerById({request , params , response}){

      //console.log(request)
      const id = {
        id : request.input('id')
      }

      const data = await 
        Post
        .query()
        .ignoreScopes()
        .with('user' , (builder) => {
          builder.with('profile')
        })
        .where(id)
        
        


      return response.send(data)
    }

  	async getAll ({ params, response }) {
    	const data = await 
    	Post
    	.query()
    	.with('user' , (builder) => {
        builder.with('profile')
      })
    	.paginate(params.id,6)

    	return response.send(data)
  	}

}

module.exports = KerjaController;