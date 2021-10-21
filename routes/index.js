const express = require("express");
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

router.get("/sneakers/:cat", (req, res) => {
  res.send("batrgfgr");
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
