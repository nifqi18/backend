'use strict'

const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.string('profile_id').primary()// primary key
      table.integer('authorid').unsigned().references('id').inTable('users') // foreign key 
      table.string('about', 254)
      table.string('imageurl')
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
