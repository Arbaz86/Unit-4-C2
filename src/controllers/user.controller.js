const express = require("express");
const User = require("../models/user.model");

const userController = require("./user.controller");

const router = express.Router();




// -----------------user CRUD--------------

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.send(users);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})