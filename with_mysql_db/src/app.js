import express from "express";
import { connectMySQL } from "./mysqldb.js";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  findUser,
} from "./userController.js";

const app = express();
app.use(express.json());

const startServer = async () => {
  await connectMySQL();

  // Create user endpoint
  app.post("/users", async (req, res) => {
    const { username, email } = req.body;
    console.log(req.body);

    try {
      const user = await createUser(username, email);
      res.status(201).json({ message: "User created" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get users endpoint
  app.get("/users", async (req, res) => {
    try {
      const users = await getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update user endpoint
  app.put("/user/:username", async (req, res) => {
    const { username } = req.params;
    const { email } = req.body;
    try {
      await updateUser(username, email);
      res.status(200).json({ message: "User updated" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Find user endpoint
  app.get("/user/:username", async (req, res) => {
    const { username } = req.params;
    try {
      const foundUser = await findUser(username);
      if (foundUser) {
        res.status(200).json(foundUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete user endpoint
  app.delete("/user/:username", async (req, res) => {
    const { username } = req.params;
    try {
      const deletedUser = await deleteUser(username);
      if (deletedUser) {
        res.status(200).json({ message: "User deleted" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Start server
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
};

startServer();
