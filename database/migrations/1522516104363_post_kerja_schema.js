'use strict'

const Schema = use('Schema')

const uuid   = require('node-uuid')


class PostKerjaSchema extends Schema {
  up () {
    this.create('post_kerjas', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('judul', 80).notNullable()
      table.text('content')
      table.text('shortcontent')
      table.string('salari')
      table.string('lokasi')
      table.string('type_lowongan')
      table.text('benefit')
      //{daerah: "Pekalongan", typesalari: "under-5k", benefit: "Banyak Sekali keuntungan yang nantinya akan di dapatkan", typelowongan: "back-end"}
      table.timestamps()
    })
    //table.string('title')
      //table.text('body')
      //table.integer('user_id').unsigned()
  }

  down () {
    this.drop('post_kerjas')
  }
}

module.exports = PostKerjaSchema
