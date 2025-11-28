// const redis = require('redis');

// const redisClient = redis.createClient({
//     username: 'default',
//     password: 'IvChtRNM7dLsOoJOtNSpaVj055cG4BC3',
//     socket: {
//         host: 'redis-19934.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 19934
//     }
// });

const redis = require("redis");

const redisClient = redis.createClient({
  username: "default",
  password: "adhya123",
  socket: {
    host: "redis-15956.c301.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 15956,
  },
});
// const connectRedis = async () => {
//   await redisClient.connect();
//   console.log("connected to redis");
// };
// connectRedis();
module.exports = redisClient;
