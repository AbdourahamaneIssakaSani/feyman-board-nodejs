const User = require("../models/userModel");

class UserController {
  /**
   * Creates a new user.
   * @param {*} req must contain a username, which should be unique.
   * @param {*} res if not error, returns 201 and the new user details.
   */
  static async create(req, res) {
    const newUser = User();
    newUser.username = req.body.username;
    newUser.save((err) => {
      if (err) return err;
    });

    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  }
}

module.exports = UserController;
