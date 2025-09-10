import express from "express";
const formRouter = express.Router();

// Set routes for the form page
formRouter
.route("/form")
.get((req, res)=> {
    res.render("form");
})

export default formRouter;
