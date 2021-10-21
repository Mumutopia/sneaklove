require("dotenv").config();
const mongoose = require("mongoose");



const SneakerModel = require("./../models/Sneaker");



const sneaker = [
  { name: "nike", ref: "ttmc", size: 40 , description : "good choose", price : 20, category : "men" },
  { name: "pumas", ref: "lalaa", size: 36 , description : "good Shoes", price : 50, category : "women" },  
];


mongoose.connect("mongodb://localhost:27017/Sneaklove")
  
  .then( () => {
    SneakerModel
    .deleteMany()
    .then((ok) => {
      SneakerModel
        .insertMany(sneaker)
        .then((res) => console.log("seed sneaker ok"));
    })
    .catch((err) => console.error(">>>>", err));
  })
  .catch((err) => console.log('big error :', err));
  