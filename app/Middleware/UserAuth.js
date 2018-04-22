'use strict'

class UserAuth {
  async handle ({ auth , request }, next) {
    // call next to advance the request

    //console.log(request);

    try {
    	await auth.check()
    } catch(er){
    	console.log(er)
    } 

    await next()
  }
  async wsHandle ({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = UserAuth
