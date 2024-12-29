const mongoose = require("mongoose");
const app = require("./app.js");
const appConfigs = require("./config.js");

console.log("INFO: Starting the application...");

const connectToDatabase = async () => {
    try {
        console.log("INFO: Attempting to connect to the database...");
        await mongoose.connect(appConfigs.MONGO_URL);
        console.log("SUCCESS: Database connected successfully.");
    } catch (error) {
        console.error("ERROR: Failed to connect to the database.", error);
        throw error;
    }
};

const startServer = () => {
    app.listen(appConfigs.PORT, () => {
        console.log(`INFO: Server is running and listening on port ${appConfigs.PORT}`);
    });
};

const initializeApp = async () => {
    try {
        await connectToDatabase();
        startServer();
        console.log("SUCCESS: Application started successfully.");
    } catch (error) {
        console.error("ERROR: Application startup failed.", error);
    }
};

initializeApp();

module.exports = app;
