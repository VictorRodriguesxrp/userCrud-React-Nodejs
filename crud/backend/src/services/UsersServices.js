const User = require("../models/User")

module.exports = {
  async listAllUsers() {
    const users = await User.findAll();

    return users;
  },

  async deleteUserById(id) {
    await User.destroy({
      where: {
        id
      }
    })
  },

  async updateById(id, name, email) {
    const user = await User.update({
      name,
      email
    }, {
      where: {
        id
      }
    })
  }
}