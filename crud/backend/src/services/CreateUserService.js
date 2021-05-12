const User = require("../models/User")


module.exports = {
  async create(name, email) {
    
    // const userAlreadyExists = await User.findOne(email);

    // if (userAlreadyExists) {
    //   throw new Error("User Already Exists!")
    // }

    console.log(name, email)

    const user = await User.create({name, email})

    return user;
  }
}