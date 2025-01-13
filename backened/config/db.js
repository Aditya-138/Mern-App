const mongoose = require('mongoose');
require('colors'); // Require colors package

const connectDB = async () => {
    try {
        // Wait for the connection to be fully established before accessing 'conn'
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Using colors to format the message with cyan color and underline
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(error); // Using console.error for errors (better practice)
        process.exit(1); // Exits the process with a failure code
    }
};

module.exports = connectDB;
