const dotenv = require('dotenv');
dotenv.config();


console.log("INFO: Reading Environment Variables...");
const appConfigs = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
};

console.log("SUCESS: Environment variables read successfully.")


module.exports = appConfigs;