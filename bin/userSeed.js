const mongoose = require("mongoose");
const User = require("../models/user.model");

const dbName = "boatproject"; //nombre de la colección en la BBDD
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });
User.collection.drop();

const users = [
  {
    username: "luis",
    password: "$2b$10$fPObOuwp/DvAMGaDKSe8auQywlVizeEMGd4BGjd5.LTYgmMiz14HW",
    email: "laanayam333@gmail.com",
    imgName: "mariaProfilePic.jpg",
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565086211/folder-name/mariaProfilePic.jpg.jpg",
    role: "OWNER"
  },
  {
    username: "maria",
    password: "$2b$10$fPObOuwp/DvAMGaDKSe8auQywlVizeEMGd4BGjd5.LTYgmMiz14HW",
    email: "maria.shecodes@gmail.com",
    imgName: "mariaProfilePic.jpg",
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565086211/folder-name/mariaProfilePic.jpg.jpg",
    role: "RENTER"
  }
];

User.create(users, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});
