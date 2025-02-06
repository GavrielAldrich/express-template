import userSchema from "../schemas/user.js";

const userController = {
  // Register controller
  register: (req, res) => {
    try {
      const payload = req.body;
      userSchema.registerSchema().parse(payload);
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.log(error.errors[0].message);
      res.status(400).json({ message: error.errors[0].message });
    }
  }, // More controller
};

export default userController;
