// Import the necessary modules/tools
import express from "express";
import ejs from "ejs";
const PORT = process.env.PORT || 3000;
import router from "./routes/homeRoute.mjs"
// Use express
const app = express();


// Middleware
app.use(express.json());
app.use("/", router)
app.use(express.static("public"));


// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", "./views");



// Start server
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})