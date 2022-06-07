require("dotenv").config()
const mongoose = require('mongoose');

async function connect() {
    try {
      await  mongoose.connect(process.env.CONNECTION_STRING);
      console.log("db running");
    } catch (error) {
        console.log(error.message);
    }
}

connect()