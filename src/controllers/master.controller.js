const express = require("express");
const router = express.Router();

const MasterAccount = require("../models/master.model");

//--------------Master A/C CRUD--------------
router.post("/", async (req, res) => {
  try {
    const master = await MasterAccount.create(req.body);
    return res.send(master);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const master = await MasterAccount.find().lean().exec();
    return res.send(master);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await MasterAccount.findById(req.params.id).lean().exec();
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await MasterAccount.findByIdAndUpdate(
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
    const user = await MasterAccount.findByIdAndDelete(req.params.id);
    return res.send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
