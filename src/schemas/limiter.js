import { RateLimiter } from "limiter";

const rateLimiters = {
  GET: new RateLimiter({
    tokensPerInterval: 10,
    interval: "minute",
    fireImmediately: true,
  }),
  POST: new RateLimiter({
    tokensPerInterval: 5,
    interval: "minute",
    fireImmediately: true,
  }),
};

export default rateLimiters;
