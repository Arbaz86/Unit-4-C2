const express = require("express");
const router = express.Router();

const SavingsAccount = require("../models/user.model");

//----------savings A/C CRUD-------------

router.post("/", async (req, res) => {
  try {
    const saving = await SavingsAccount.create(req.body);
    return res.send(saving);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const savings = await SavingsAccount.find().lean().exec();
    return res.send(savings);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await SavingsAccount.findById(req.params.id).lean().exec();
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await SavingsAccount.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await SavingsAccount.findByIdAndDelete(req.params.id);
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
