import express from "express";

const router = express.Router();


// Set up a GET route

router
.route("/")
.get((req, res) => {
    res.render("card");
});


export default router;