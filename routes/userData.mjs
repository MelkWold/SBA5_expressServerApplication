import express from "express";
import userData from "../data/userData.mjs";
const userDataRouter = express.Router();

// Route for userData
userDataRouter
.route("/api/userData")
.get((req, res) => {
    res.json(userData);
})

// Create a new user
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
});

// GET user by id
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

// Update user by id
.put ((req, res) => {
    const id = req.params.id;
    const body = req.body;
    // find the index of the user with the matching ID
    const userIndex = userData.findIndex(user => user.id == Number(id));

    // If user is not found, return error
    if (userIndex === -1) {
        return res.status(404).json({message: "User not found"})
    }

    // Update the record
    userData[userIndex] = {
            id: Number(id),
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

// Delete user by id
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
});

// Filter users by title: I didn't see any need to use it, but the following code works to filter a user by their title(if needed)
// userDataRouter
// .route("/api/userData")
// .get((req, res) => {
//     const { title } = req.query;

//     if(!title) {
//         res.json(userData);
//     } 

//     const usersWithTitle = userData.filter(user => user.title && user.title.toLowerCase() === title.toLowerCase());

//     res.json(usersWithATitile);
    
// });

export default userDataRouter;