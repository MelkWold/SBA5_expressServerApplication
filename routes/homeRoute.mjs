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
.get ((req, res) => {
    const id = req.params.id;
    const data = userData.find((data)=> id == data.id)
    if (data){
            res.json(data);
    } else {
            res.status(400).send("No user Id found!")}   
})

.post((req, res) => {
    const body = req.body;
    const newUser = {
        id: userData.length + 1,
        fullName:body.fullName,
        title:body.title,
        summary:body.summary,
        email:body.email,
        phone:body.phone,
        photoUrl:body.photoUrl,
        skills:body.skills
    }
    userData.push(newUser);
    res.json(newUser);
})

.put ((req, res) => {
    const id = req.params.id;
    const body = req.body;
    // find the index of the user with the matching ID
    const userIndex = userData.findIndex(user => user.id == id);

    // If user is not found, return error
    if (userIndex === -1) {
        return res.status(404).json({message: "User not found"})
    }

    // Update the record
    userData[userIndex] = {
            id: id,
            fullName:body.fullName,
            title:body.title,
            summary:body.summary,
            email:body.email,
            phone:body.phone,
            photoUrl:body.photoUrl,
            skills:body.skills
    }

    // Return updated data
    res.json(userData[userIndex]);

})

.delete((req, res) => {
    const id = req.params.id;
    // find the index of the user with the matching ID
    const userIndex = userData.findIndex(user => user.id == id);

    // If user is not found, return error
    if (userIndex === -1) {
        return res.status(404).json({message: "User not found"})
    }
    // Remove the user at the index
    userData.splice(userIndex, 1);
    res.json({message: "User Deleted successfully.", remainingUsers: userData});
})
export default router;

