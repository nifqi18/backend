'use strict'

const Schema = use('Schema')

class TokenSchema extends Schema {
  up () {
    this.table('tokens', (table) => {
      // alter table
    })
  }

  down () {
    this.table('tokens', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TokenSchema
