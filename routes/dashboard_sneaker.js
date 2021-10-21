const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)


router.get("/prod-manage", (req, res) => {
    res.render("products_manage.hbs");
  });
router.get("/prod-add", (req, res) => {
    res.render("products_add.hbs");
  });

module.exports = router;
