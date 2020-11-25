const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const Member = require("./models/Member");

var member_to_insert = new Member({
        name: "Starship Enterprise",
        email: "to-boldly-go@no1hasgonebefore.com",
        credit: 1701000
});

member_to_insert.save((err, product) => {
    if (error) console.log(error);
    console.log(JSON.stringify(product));
});