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
  
  const gnagna = req.params.cat
  if(req.params.cat === "collection"){
    
    const sneakers = await SneakerModel.find();
    res.render ("products.hbs", {sneakers})
  } else {
    
    const sneakers = await SneakerModel.find({ category : gnagna})
    res.render ("products.hbs", {sneakers})
    
  }
  

  console.log(sneakers);

} catch (error) {
  
}
  
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});



module.exports = router;
