import express from "express";
import userData from "../data/userData.mjs";
const digitalCardRouter = express.Router();

// Display the form
digitalCardRouter
.route("/digitalCard")
.get((req, res) => {
    res.send(
        `<h1 style = "color: blue">Welcome! </h1>
        <h2>Please enter your information to receive your shareable digital business card.</h2> 
        <h3>Start <a href ="/form">here</a>.</h3>`
        );
})
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
        skills: skillsArray
    })
});

export default digitalCardRouter;