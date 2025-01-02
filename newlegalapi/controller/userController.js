 // Import the User model
import User from '../models/userModel.js'; // Adjust based on your models setup

// Add a new user
export const addUser = async (req, res) => {
  const { type, mpin, username,full_name,geo_location } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ status: false, message: "Username already exists" });
    }

    // Create the new user
    const userData = await User.create({
      type,
      mpin,
      username,
      geo_location,
      full_name,
    });
    console.log("line 16 User created",userData)

    // Optionally, update user with a vendor_id
    await userData.update({ vendor_id: userData.id });

    res.status(201).json({ status: true, message: "User added successfully.", data: userData, });
  } catch (error) {
    console.error("Error in addUser:", error.message);
    res.status(500).json({ status: false, error: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the user exists
    const userData = await User.findByPk(id);
    if (!userData) {
      return res.status(404).json({ status: false, message: "User not found." });
    }

    // Delete the user
    await userData.destroy();

    res.status(200).json({
      status: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Error in deleteUser:", error.message);
    res.status(500).json({ status: false, message: "Internal server error.", error: error.message });
  }
};
