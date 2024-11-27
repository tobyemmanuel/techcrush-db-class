import User from "./userModel.js";

export const createUser = async (username, email) => {
  const user = new User({ username, email });
  const result = await user.save();
  console.log("User created:", result);
};

export const getUsers = async () => {
  const users = await User.find();
  console.log("Users fetch:", users);
  return users;
};

export const findUser = async (username) => {
  const result = await User.findOne({ username });
  console.log("User found:", result);
  return result;
};

export const updateUser = async (username, newEmail) => {
  const result = await User.updateOne(
    { username },
    { $set: { email: newEmail } }
  );
  console.log("User updated:", result);
};

export const deleteUser = async (username) => {
  const result = await User.deleteOne({ username });
  console.log("User deleted:", result);
};
