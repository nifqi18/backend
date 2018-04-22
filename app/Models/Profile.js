'use strict'

const Model = use('Model')
const uuid = require('node-uuid')

class Profile extends Model {
	static boot () {
    	super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
      this.addHook('beforeCreate', async (userInstance) => {
      	userInstance.profile_id = uuid.v4()
      })
  	}

    static get primaryKey(){
      return 'profile_id'
    } 	
  	
	static get incrementing () {
      return false
    }

	user(){
		return this.belongsTo('App/Models/User' , 'authorid' , 'id')
	}
}

module.exports = Profile
