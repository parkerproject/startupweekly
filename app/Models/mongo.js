'use strict'

const Env = use('Env')
const mongojs = use('mongojs')
const db = mongojs(Env.get('MONGODB_URL'), ['users'])
module.exports = db
