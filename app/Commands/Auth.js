'use strict'

const { Command } = require('@adonisjs/ace')

class Auth extends Command {
  static get signature () {
    return 'auth'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for auth command')
  }
}

module.exports = Auth
