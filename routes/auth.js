const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt"); 
const UserModel = require('./../models/User')

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/logout", (req,res) => {
    req.session.destroy(function(err){
        res.redirect("signin")
    });
});

router.post("/signin", async (req,res,next) => {
    try {
        const {email, password} = req.body;
        const foundUser = await UserModel.findOne({email : email});
        console.log(foundUser)
        if(!foundUser){
            console.log("not found")
            res.redirect("/signin")
        } else  {
            const isSamePassword = bcrypt.compareSync(password, foundUser.password);
            console.log(isSamePassword)
            if(!isSamePassword){
                console.log('wrong password')
                res.redirect("/signin")
            } else {
                const userObject = foundUser.toObject();
                delete userObject.password;

                req.session.currentUser = userObject;

                res.redirect("/prod-manage");
            }
        }
    } catch (error) {
        
    }
})

router.post("/signup", async (req,res,next)=>
{
    try {
        const newUser = {...req.body};
        console.log(newUser)
        const foundUser = await UserModel.findOne( {email : newUser.email})
        console.log(foundUser)
        if(foundUser){
            console.log('hello')
            res.redirect("/signup");
        } else {
            const hashedPassword = bcrypt.hashSync(newUser.password, 8);
            newUser.password = hashedPassword;
            console.log(newUser)
            console.log('hellllllo')
            await UserModel.create(newUser);
            res.redirect("/signin");
        }

    } catch (error) {
        
    }
})



module.exports = router;
