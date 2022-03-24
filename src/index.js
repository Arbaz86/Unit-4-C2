const express = require("express");
const app = express();
const start = require("./server");
app.use(express.json());

const userController = require("./controllers/user.controller");
const branchController = require("./controllers/branch.controller");
const masterController = require("./controllers/master.controller");
const fixedController = require("./controllers/fixed.controller");
const savingController = require("./controllers/savings.controller.js");

app.use("/users", userController);
app.use("/branchs", branchController);
app.use("/masters", masterController);
app.use("/fixeds", fixedController);
app.use("/savings", savingController);

start();
