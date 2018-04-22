'use strict'

const uuid   = require('node-uuid');


const Model = use('Model')

class PostKerja extends Model {

    static boot () {
    	super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    
  	}

    /*static get incrementing () {
      return false
    }

    static get primaryKey(){
      return 'post_id'
    } */

  	user (){
  		return this.belongsTo('App/Models/User' , 'user_id' , 'id').select('id', 'email')
  	}

}

module.exports = PostKerja
