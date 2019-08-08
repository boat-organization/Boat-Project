const mongoose = require("mongoose");
const Boat = require("../models/boat.model");

const dbName = "boatproject"; //nombre de la colección en la BBDD
mongoose.connect(process.env.DB_REMOTE, { useNewUrlParser: true });
Boat.collection.drop();

const boats = [
  {
    name: "Barracuda",
    type: "Yacht",
    capacity: 10,
    captain: true,
    owner: "5d4c00689027753da0d2fb4d",
    port: "5d494c21c9ac6017404671bd",
    description: "Perfect for a party.",
    rate: 1000,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565019049/folder-name/1_yatch.jpg.jpg",
    imgName: "1_yacht.jpg"
  },
  {
    name: "The Devilray",
    type: "Sailboat",
    capacity: 4,
    captain: false,
    owner: "5d4c00689027753da0d2fb4d",
    port: "5d494c21c9ac6017404671bd",
    description: "Enjoy a windy day at the bay.",
    rate: 400,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565027165/folder-name/2_sailboat.jpg.jpg",
    imgName: "2_sailboat.jpg"
  },
  {
    name: "The Old Man and The Sea",
    type: "Catamaran",
    capacity: 6,
    captain: true,
    owner: "5d4c00689027753da0d2fb4d",
    port: "5d494c21c9ac6017404671bd",
    description: "Scuba diving equipment included.",
    rate: 1200,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565027402/folder-name/3_catamaran.jpg.jpg",
    imgName: "3_catamaran.jpg"
  },

  {
    name: "Unsinkable II",
    type: "Yacht",
    capacity: 5,
    captain: true,
    owner: "5d4c00689027753da0d2fb4d",
    port: "5d494c21c9ac6017404671c2",
    description: "Relax while feeling super safe.",
    rate: 900,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565027559/folder-name/4_yacht.jpg.jpg",
    imgName: "4_yacht.jpg"
  },
  {
    name: "Cupid",
    type: "Sailboat",
    capacity: 2,
    captain: false,
    owner: "5d4c00689027753da0d2fb4d",
    port: "5d485b81628f651e5029f4b6",
    description: "Enjoy a romantic evening with your SO.",
    rate: 200,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565027827/folder-name/5_sailboat.png.png",
    imgName: "5_sailboat.png"
  },
  {
    name: "Seaduction",
    type: "Catamaran",
    capacity: 4,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4b8",
    description: "The double date champion.",
    rate: 900,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565028109/folder-name/6_catamaran.jpg.jpg",
    imgName: "6_catamaran.jpg"
  },
  {
    name: "Big Nauti",
    type: "Yacht",
    capacity: 15,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4b9",
    description: "Celebrate your special day with us.",
    rate: 2000,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565028288/folder-name/7_yacht.jpg.jpg",
    imgName: "7_yacht.jpg"
  },
  {
    name: "The Midget",
    type: "Sailboat",
    capacity: 3,
    captain: false,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4ba",
    description: "Get close with those that you love.",
    rate: 300,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565028685/folder-name/8_sailboat.jpg.jpg",
    imgName: "8_sailboat.jpg"
  },
  {
    name: "Fango Fandango",
    type: "Catamaran",
    capacity: 4,
    captain: false,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4be",
    description: "For professional adrelanine seekers.",
    rate: 600,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565029094/folder-name/9_catamaran.jpg.jpg",
    imgName: "1_yacht.jpg"
  },
  {
    name: "Helios",
    type: "Yacht",
    capacity: 7,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4bf",
    description: "Family friendly. Lunch included.",
    rate: 800,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565029376/folder-name/10_yacht.jpg.jpg",
    imgName: "10_yacht.jpg"
  },
  {
    name: "Popeye",
    type: "Sailboat",
    capacity: 1,
    captain: false,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4c0",
    description: "Fly with the wind.",
    rate: 100,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565029511/folder-name/11_sailboat.jpg.jpg",
    imgName: "11_sailboat.jpg"
  },
  {
    name: "La Dolce Vita",
    type: "Catamaran",
    capacity: 4,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4c3",
    description: "Get away for a while and enjoy life.",
    rate: 1000,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565029877/folder-name/12_catamaran.jpg.jpg",
    imgName: "12_catamaran.jpg"
  },
  {
    name: "Boaty McBoatface",
    type: "Yacht",
    capacity: 4,
    captain: false,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4c5",
    description: "Water. Drinks. Sexy times.",
    rate: 1200,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565030294/folder-name/13_yacht.jpg.jpg",
    imgName: "13_yacht.jpg"
  },
  {
    name: "Titanic",
    type: "Sailboat",
    capacity: 3,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4c6",
    description: "Come sightseeing with us.",
    rate: 200,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565031736/folder-name/14_sailboat.jpg.jpg",
    imgName: "14_sailboat.jpg"
  },
  {
    name: "Santa Maria",
    type: "Catamaran",
    capacity: 6,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4c9",
    description: "Enjoy the sun and the sea.",
    rate: 1100,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565031855/folder-name/15_catamaran.jpg.jpg",
    imgName: "15_catamaran.jpg"
  },
  {
    name: "Hobbit",
    type: "Yacht",
    capacity: 2,
    captain: false,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4ca",
    description: "Sail into the sunset.",
    rate: 300,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565031906/folder-name/16_yacht.jpg.jpg",
    imgName: "16_yacht.jpg"
  },
  {
    name: "Castaway",
    type: "Sailboat",
    capacity: 3,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4cb",
    description: "Get lost for how long as you want.",
    rate: 500,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565031970/folder-name/17_sailboat.jpg.jpg",
    imgName: "17_sailboat.jpg"
  },
  {
    name: "The Churchill",
    type: "Catamaran",
    capacity: 4,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4cd",
    description: "Regal entertainment.",
    rate: 900,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565042970/folder-name/18_catamaran.jpg.jpg",
    imgName: "18_catamaran.jpg"
  },
  {
    name: "Mediterráneo",
    type: "Yacht",
    capacity: 4,
    captain: true,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4ce",
    description: "Listen to Serrat on a loop.",
    rate: 1100,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565043114/folder-name/19_yacht.jpg.jpg",
    imgName: "19_yacht.jpg"
  },
  {
    name: "Lemon Drizzle",
    type: "Sailboat",
    capacity: 2,
    captain: false,
    owner: "5d49547de191c926fc287b0e",
    port: "5d485b81628f651e5029f4d2",
    description: "Perfect for a romantic afternoon in the bay.",
    rate: 400,
    imgPath:
      "http://res.cloudinary.com/dqfytofoz/image/upload/v1565043186/folder-name/20_sailboat.jpg.jpg",
    imgName: "20_sailboat.jpg"
  }
];

Boat.create(boats, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${boats.length} boats`);
  mongoose.connection.close();
});
