// Import the necessary modules/tools and set up
import express from "express";
import ejs from "ejs";
const PORT = process.env.PORT || 3000;
// import router from "./routes/homeRoute.mjs";

// Use express
const app = express();

// Serve static files
app.use(express.static("public")); 

// Middleware
// Parse from POST body
app.use(express.json());
app.use(express.urlencoded({ extended: true})); // to handle form data

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
app.get("/", (req, res) => {
    res.sendFile("home.html", { root : "public"});
});

// Route to form
app.get ("/form", (req, res) => {
    res.sendFile("form", {root : "views"});
})

// GET route to the form
app.get("/digital-card", (req, res)=> {
    res.render("form");
})

// Display the form
app.post("/digitalCard", (req, res) => {
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

// app.get("/", (req, res) => {
//     res.send("Welcome");
// })

// app.get("/digitalCard", (req, res) => {
//     res.render("card")
// }) 



// Start server
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})