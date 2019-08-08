const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_LOCAL, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

//loool
