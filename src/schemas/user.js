import { z } from "zod";

const userSchema = {
  // Register Schema
  registerSchema: () => {
    return z.object({
      email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email format" })
        .max(50, { message: "Email must be less than 50 characters." }),
      password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters" })
        .max(30, { message: "Password must be less than 30 characters" })
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%^*?&()\-_=+[{\]};:,<.>|~])/,
          {
            message:
              "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
          }
        ),
    });
  },

  // Another Schema here
};

export default userSchema;
