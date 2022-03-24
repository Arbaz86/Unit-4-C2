const express = require("express");
const router = express.Router();

const Branch = require("../models/branch.model");

//-------------Branch CRUD-------

router.post("/branch", async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    return res.send(branch);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/branch", async (req, res) => {
  try {
    const branch = await Branch.find().lean().exec();
    return res.send(branch);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/branch/:id", async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id).lean().exec();
    return res.send(branch);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/branch/:id", async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.params.id);
    return res.send(branch);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/branch/:id", async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    return res.send(branch);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
