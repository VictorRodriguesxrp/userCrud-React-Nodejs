const createUserService = require('../services/CreateUserService')

module.exports = {
  async handle(req, res) {
    const {name, email} = req.body;
    
    try {
      const user = await createUserService.create(name, email)

      return res.status(201).json(user);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      })
    }

  }
}