const express = require("express"); // import express in this module
const { findByIdAndUpdate } = require("../models/Sneaker");
const SneakerModel = require("../models/Sneaker");
const router = new express.Router(); // create an app sub-module (router)
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute")
const TagModel = require('../models/Tag');

router.get("/prod-manage", protectPrivateRoute, async (req, res) => {
  try {
    const sneakers = await SneakerModel.find();
    res.render("products_manage.hbs", { sneakers });
  } catch (err) {
    next(err);
  }
});


router.get("/prod-add", protectPrivateRoute, async (req, res) => {
  const tags = await TagModel.find();
  res.render("products_add.hbs", { scripts: ["tagManager.js"], tags });
});

router.post("/prod-add", protectPrivateRoute, async (req, res) => {
  try {
    await SneakerModel.create(req.body)
    res.redirect("/prod-manage")
  } catch (err) {
    next(err)
  }
})

router.get("/prod-manage/:id", protectPrivateRoute, async (req, res) => {
  try {
    await SneakerModel.findByIdAndDelete(req.params.id)
    res.redirect("/prod-manage");
  } catch (err) {
    next(err);
  }
});


//update
router.get("/prod-edit/:id", protectPrivateRoute, async (req, res, next) => {
  try {
    const sneaker = await SneakerModel.findById(req.params.id);
    res.render("product_edit.hbs", { sneaker });
  } catch (err) {
    next(err);
  }
});

router.post("/prod-edit/:id", protectPrivateRoute, async (req, res) => {
  try {
    await SneakerModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/prod-manage")
  }
  catch (err) {
    next(err);
  }
});

router.get("/tag-add", (req, res, next) => {
  TagModel.find()
    .then((dbRes) => res.json(dbRes))
    .catch(next)
});


router.post("/tag-add", async (req, res, next) => {
  try {
    const newTag = await TagModel.create(req.body)
    res.status(201).json(newTag);

  }
  catch (err) {
    next(err)
  }
})


module.exports = router;
