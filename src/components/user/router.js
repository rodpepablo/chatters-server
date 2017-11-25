
const passport = require('passport')

const Router = require('../../base/router')
const Response = require('../../base/response')
const Schema = require('./schema')
const Model = require('./model')({Schema})
const Controller = require('./controller')({Model, Response})

module.exports = class UserRouter extends Router {
  static get mountPoint () {
    return '/api'
  }

  routes () {
    this.router.post('/signup', Router.wrap(Controller.signup))
    this.router.post('/login', Router.wrap(Controller.login))
    this.router.post('/logout', Controller.logout)
  }
}

