import { RateLimiter } from "limiter";

const limiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: "minute",
  fireImmediately: true,
});

const rateLimiter = (tokensPerInterval) => {
  return async (req, res, next) => {
    const remainingToken = await limiter.removeTokens(tokensPerInterval);
    if(remainingToken < 0){
      return res.status(429).json({ message: "Too many requests, please try again in a minute" });
    }
    next()
  };
};

export default rateLimiter;
