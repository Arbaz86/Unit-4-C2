const express = require("express");
const mongoose = require("mongoose");
const userController = require("./controllers/user.controller")

const app = express()
const port = 2000;

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://Arbaz:Arbaz123@cluster0.4ccvj.mongodb.net/Bank?retryWrites=true&w=majority"
    );
};

app.use(express.json())

app.use("/users", userController)




//-------------Branch CRUD-------

app.post("/branch", async (req, res) => {
    try {
        const branch = await Branch.create(req.body)
        return res.send(branch);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/branch", async (req, res) => {
    try {
        const branch = await Branch.find().lean().exec();
        return res.send(branch);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/branch/:id", async (req, res) => {
    try {
        const branch = await Branch.findById(req.params.id).lean().exec();
        return res.send(branch);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.patch("/branch/:id", async (req, res) => {
    try {
        const branch = await Branch.findByIdAndUpdate(req.params.id);
        return res.send(branch);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


app.delete("/branch/:id", async (req, res) => {
    try {
        const branch = await Branch.findByIdAndDelete(req.params.id)
        return res.send(branch);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

//--------------Master A/C CRUD--------------
app.post("/master", async (req, res) => {
    try {
        const master = await MasterAccount.create(req.body)
        return res.send(master);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/master", async (req, res) => {
    try {
        const master = await MasterAccount.find().lean().exec();
        return res.send(master);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/master/:id", async (req, res) => {
    try {
        const user = await MasterAccount.findById(req.params.id).lean().exec();
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.patch("/master/:id", async (req, res) => {
    try {
        const user = await MasterAccount.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


app.delete("/master/:id", async (req, res) => {
    try {
        const user = await MasterAccount.findByIdAndDelete(req.params.id)
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

//----------savings A/C CRUD-------------

app.post("/savings", async (req, res) => {
    try {
        const saving = await SavingsAccount.create(req.body)
        return res.send(saving);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/savings", async (req, res) => {
    try {
        const savings = await SavingsAccount.find().lean().exec();
        return res.send(savings);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/savings/:id", async (req, res) => {
    try {
        const user = await SavingsAccount.findById(req.params.id).lean().exec();
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.patch("/savings/:id", async (req, res) => {
    try {
        const user = await SavingsAccount.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


app.delete("/savings/:id", async (req, res) => {
    try {
        const user = await SavingsAccount.findByIdAndDelete(req.params.id)
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

//-----------Fixed CRUD--------------

app.post("/fixed", async (req, res) => {
    try {
        const fixed = await FixedAccount.create(req.body)
        return res.send(fixed);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/fixed", async (req, res) => {
    try {
        const fixed = await FixedAccount.find().lean().exec();
        return res.send(fixed);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/fixed/:id", async (req, res) => {
    try {
        const user = await FixedAccount.findById(req.params.id).lean().exec();
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

app.patch("/fixed/:id", async (req, res) => {
    try {
        const user = await FixedAccount.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


app.delete("/fixed/:id", async (req, res) => {
    try {
        const user = await FixedAccount.findByIdAndDelete(req.params.id)
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})




app.listen(port, async function () {
    try {
        await connect()
        console.log(`listening on ${port}`);
    }
    catch (e) {
        console.log(e.message)
    }
})