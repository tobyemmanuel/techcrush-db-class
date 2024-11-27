import User from "./userModel.js";

export const createUser = async (username, email) => {
  const user = await User.create({ username, email });
  console.log("User created:", user);
  return "user created";
};

export const getUsers = async () => {
  const users = await User.findAll(); 
  console.log("Users fetched:", users);
  return users;
};

export const findUser = async (username) => {
  const result = await User.findOne({ where: { username: username } });
  console.log("User found:", result);
  return result;
};

export const updateUser = async (username, newEmail) => {
  const result = await User.update({ email: newEmail }, { where: { username: username } });
  console.log("User updated:", result);
  return "user updated";
};

export const deleteUser = async (username) => {
  const result = await User.destroy({ where: { username: username } });
  console.log("User deleted:", result);
  return "user deleted";
};