'use strict'

const Schema = use('Schema')
const uuid   = require('node-uuid');


class PostUptoSchema extends Schema {
  up () {
    this.table('post_kerja', (table) => {
    // add new columns or remove existing
      //table.dropColumn('id')
      //table.dropColumn('salari')
      //table.dropColumn('lokasi')
      //table.dropColumn('type_lowongan')
      //table.string('id').defaultTo(uuid.v4())

    });
  }

  down () {
    this.table('post_kerja', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PostUptoSchema
