import express from "express";
import userData from "../data/userData.mjs";
const userDataRouter = express.Router();

// Route for userData
userDataRouter
.route("/api/userData")
.get((req, res) => {
    res.json(userData);
})


userDataRouter
.route("/api/userData/:id")
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
export default userDataRouter;