const express = require("express");
const router = new express.Router();
const SneakerModel = require("./../models/Sneaker")

//READ PART

router.get("/collection", async (req, res, next) => {
    try {
        const sneakers = await SneakerModel.find()
        console.log(sneakers)
        res.render("/products", {sneakers});
    }catch (err) {
        console.log("Erreur dans collection : ", err);
    }
})

// router.get("/collection",  )

router.get("/collection/home")

module.exports = router;