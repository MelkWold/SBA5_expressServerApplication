import express from "express";
import userData from "../data/userData.mjs";
const homeRouter = express.Router();


// Set up a GET route for homepage
homeRouter
.route("/")
.get((req, res) => {
    res.sendFile("home.html", { root : "public"});
});


export default homeRouter;