const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 }  = require('uuid')

class User extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING
    }, 
    {
      sequelize: connection
    });

    this.addHook('beforeSave', async(user) => {
      user.id = uuidv4()
      console.log(user.id)
    })
  }
}

module.exports = User;