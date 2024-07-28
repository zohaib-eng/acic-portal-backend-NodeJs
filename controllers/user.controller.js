// Package Imports

// Local Imports
const { UserService } = require("../services");

class User {
  // Get All
  static async getUsers(_, res) {
    const data = await UserService.getAll();
    if (data.error) {
      res.json({ success: false, message: "Request could not be processed." });
    } else {
      res.json({ success: true, users: data.result });
    }
  }

  // Get By Id
  static async getUserById(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await UserService.getById(id);
      if (data.error) {
        res.json({ success: false, message: "Not found." });
      } else {
        res.json({ success: true, user: data.result });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID." });
    }
  }

  // Create
  static async createUser(req, res) {
    const { ...rest } = req.body;

    const id = new Date().getTime();

    const data = await UserService.create({
      id,
      ...rest,
    });
    if (data.error) {
      res.json({ success: false, message: "Request could not be processed." });
    } else {
      res.json({ success: true, user: data.result });
    }
  }

  // Update
  static async updateUser(req, res) {
    const { id, ...rest } = req.body;

    console.log(rest);

    if (id) {
      const data = await UserService.update(id, { ...rest });
      if (data.error) {
        res.json({
          success: false,
          message: "Request could not be processed.",
        });
      } else {
        res.json({ success: true });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID." });
    }
  }

  // Delete
  static async deleteUser(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await UserService.delete(id);
      if (data.error) {
        res.json({
          success: false,
          message: "Request could not be processed.",
        });
      } else {
        res.json({ success: true });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID" });
    }
  }


    //login
  static async loginUserById(req, res) {
    const { id, password } = req.query;
    if (id && password) {
      const data = await UserService.login(id, password);
      if (data.error) {
        res.json({ success: false, message: "Please provide an correct credentials." });
      } else {
        res.json({ success: true, user: data.result });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID." });
    }
  }
}

module.exports = User;
