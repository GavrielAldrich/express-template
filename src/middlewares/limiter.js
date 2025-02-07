import rateLimiters from "../schemas/limiter.js";

const rateLimiter = (tokensPerInterval) => {
  return async (req, res, next) => {
    const limiter = rateLimiters[req.method]; // Running limiter schema based on request method
    // Reducing total token limit based on whats given in user.routes.js
    const remainingToken = await limiter.removeTokens(tokensPerInterval); 
    if (remainingToken < 0) {
      return res
        .status(429)
        .json({
          message: `Too many ${req.method} requests, please try again in a minute`,
        });
    }
    next();
  };
};

export default rateLimiter;
