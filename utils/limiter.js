import { RateLimiter } from "limiter";

const limiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: "minute",
  fireImmediately: true,
});

export default limiter;
