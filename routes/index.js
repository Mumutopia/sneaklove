const express = require("express");
const SneakerModel = require("../models/Sneaker");
const router = new express.Router();

console.log(`\n\n
-----------------------------
-----------------------------
     wax on / wax off !
-----------------------------
-----------------------------\n\n`
);




router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/sneakers/:cat", async (req, res) => { try {
  console.log("hheeeeeeee")
  console.log(req.params.cat)
  if(req.params.cat === "collection"){
    const sneakers = await SneakerModel.find();
    res.render ("products.hbs", {sneakers})
  } else {
    const sneakers = await SneakerModel.find( {cat : req.params.cat})
    res.render ("products.hbs", {sneakers})
    
  }
  

  console.log(sneakers);

} catch (error) {
  
}
  
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});


module.exports = router;
