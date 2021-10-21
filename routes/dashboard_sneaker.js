const express = require("express"); // import express in this module
const SneakerModel = require("../models/Sneaker");
const router = new express.Router(); // create an app sub-module (router)
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute")

router.get("/prod-manage", protectPrivateRoute, async (req, res) => {
  try {
    const sneakers = await SneakerModel.find();
    res.render("products_manage.hbs", { sneakers });
  } catch (err) {
    next(err);
  }
});


router.get("/prod-add", protectPrivateRoute, (req, res) => {
  res.render("products_add.hbs");
});

router.get("/prod-manage/:id",protectPrivateRoute, async (req, res) => {
  try {
    await SneakerModel.findByIdAndDelete(req.params.id)
    res.redirect("/prod-manage");
  }catch (err) {
    next(err);
  }  
});

module.exports = router;
