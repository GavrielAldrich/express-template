import userSchema from "../schemas/user.js";

const userController = {
  // Register controller
  register: async(req, res) => {
    try {
      const payload = req.body;
      userSchema.registerSchema().parse(payload);
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.log(error)
      res.status(406).json({ message: error });
    }
  }, // More controller
};

export default userController;