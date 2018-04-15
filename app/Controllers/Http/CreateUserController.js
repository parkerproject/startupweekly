'use strict'

const Subscribe = use('App/Models/Subscribe')
const { validate } = use('Validator')

class CreateUserController {
    async index ({ request, session, response }) {
        try {
          const rules = {
            email: 'required|email',
          }
          const body = request.only(['email'])
          const validation = await validate(body, rules)

          if (validation.fails()) {
            session
              .withErrors(validation.messages())
              .flashAll()

            return response.redirect('back')
          }

          let subscribe = new Subscribe()

          await subscribe.create(body.email, () => {})

          return response.redirect('/success')


        } catch (e) {
          console.log(e)
        }
      }
}

module.exports = CreateUserController
