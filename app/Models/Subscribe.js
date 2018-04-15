const db = use('App/Models/mongo')

class Subscribe {
  create (email, cb) {
    try {
      db.clients.save({ email }, () => {
        cb(1)
      })
    } catch (e) {
      console.log(e)
    }
  }

}

module.exports = Subscribe
