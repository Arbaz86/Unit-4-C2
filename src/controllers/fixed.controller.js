const express = require("express");
const router = express.Router();

const FixedAccount = require("../models/fixed.model");

//-----------Fixed CRUD--------------

router.post("/", async (req, res) => {
  try {
    const fixed = await FixedAccount.create(req.body);
    return res.send(fixed);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const fixed = await FixedAccount.find().lean().exec();
    return res.send(fixed);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await FixedAccount.findById(req.params.id).lean().exec();
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await FixedAccount.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await FixedAccount.findByIdAndDelete(req.params.id);
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
