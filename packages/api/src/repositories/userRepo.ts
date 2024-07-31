import { User } from "../models/Users";

// Function to create a new user
export const createUser = async (
  email: string,
  googleId: string,
  name: string
) => {
  try {
    // Create a new user and return the instance
    const newUser = await User.create({
      email,
      googleId,
      name,
    });
    return newUser; // Return the created user instance
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

// Function to find a user by email
export const findUserByEmail = async (email: string) => {
  try {
    // Find a user by email and return the instance
    const user = await User.findOne({ where: { email } });
    return user; // Return the found user instance or null
  } catch (error) {
    throw new Error(`Error finding user by email: ${error.message}`);
  }
};
