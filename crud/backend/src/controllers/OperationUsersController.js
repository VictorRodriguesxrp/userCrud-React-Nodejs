const usersServices = require("../services/UsersServices")

module.exports = {
  async listAll(req, res) {

    try {
      const listOfAllUsers = await usersServices.listAllUsers();

      return res.status(200).json(listOfAllUsers);

    } catch (err) {
      return res.status(401).json({
        message: err.message
      })
    }
  },

  async deleteUserById(req, res) {
    const { id } = req.params;

    try {
      await usersServices.deleteUserById(id);

      return res.status(200).send()
    } catch (err) {
      return res.status(401).json({
        error: err.message
      })
    }
  },

  async updateUserById(req, res) {
    const { id } = req.params;
    const {name, email} = req.body;

    try {
      const userModified = await usersServices.updateById(id, name, email);

      return res.status(201).json(userModified)
    } catch (err) {
      return res.status(401).json({
        erro: err.message
      })
    }
  }
}