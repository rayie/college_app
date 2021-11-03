'use strict'

const ActionHero = require('actionhero')
const path = require('path')
const packageJSON = require(path.normalize(path.join(__dirname, '..', 'package.json')))

// These values are probably good starting points, but you should expect to tweak them for your application
const maxEventLoopDelay = process.env.eventLoopDelay || 10
const maxMemoryAlloted = process.env.maxMemoryAlloted || 500
const maxResqueQueueLength = process.env.maxResqueQueueLength || 1000

module.exports = class SchoolsGetMasterList extends ActionHero.Action {
  constructor () {
    super()
    this.name = 'schools/masterlist'
    this.description = 'I will return the master list of schools'
    this.outputExample = {
      'schools': [
        { nm: "Harvard", city:"Cambridge" },
        { nm: "MIT", city:"Cambridge" }
      ]
    }
  }

  async run (data) {
    const api = ActionHero.api

    let rr  = [
        { nm: "UCLA", city:"Los Angeles" },
    ]


    rr = await api.db.collection('schools').find({}).toArray()

    data.response.schools = rr;
  }
}
