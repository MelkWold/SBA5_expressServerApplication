import express from "express";
import userData from "../data/userData.mjs";
const homeRouter = express.Router();


// Set up a GET route for homepage
homeRouter
.route("/")
.get((req, res) => {
    res.sendFile("home.html", { root : "public"});
});

// Set routes for the form page
homeRouter
.route("/digitalCard")
.get((req, res)=> {
    res.render("../views/form.ejs");
})

// Display the form
.post((req, res) => {
    const { fullName, title, summary, email, phone, skills, photoUrl } = req.body;

    // convert the skills to array
    const skillsArray = Array.isArray(skills)
        ? skills
        : (skills || "")
            .split (",")
            .map(s => s.trim())
            .filter(Boolean);
            
    res.render("card", {
        fullName,
        title,
        summary,
        email,
        phone,
        photoUrl,
        skills
    })
});


export default homeRouter;