import express from "express";
import userData from "../data/userData.mjs";
const router = express.Router();


// Set up a GET route for homepage
router
.route("/")
.get((req, res) => {
    res.sendFile("home.html", { root : "public"});
});

// Set routes for the form page
router
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
// Route for userData
router
.route("/userData")
.get((req, res) => {
    res.json(userData);
})


router
.route("/userData/:id")
.get ((req, res)=>{
    const id = req.params.id;
    const data = userData.find((data)=> id == data.id)
    if (data){
            res.json(data);
    } else {
            res.status(400).send("No user Id found!")}   
})

export default router;

