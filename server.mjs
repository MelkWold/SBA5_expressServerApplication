// Import the necessary modules/tools and set up
import express from "express";
import ejs from "ejs";
const PORT = process.env.PORT || 3000;
import userDataRouter from "./routes/userData.mjs";
import homeRouter from "./routes/homeRoute.mjs";
import globalErrorHandler from "./middleware/globalErrorHandler.mjs";

// Use express
const app = express();

// Serve static files
app.use(express.static("public")); 
app.use('/static', express.static("public"));

// Middleware
// Parse from POST body
app.use(express.json());
app.use(express.urlencoded({ extended: true})); // to handle form data

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
// Route for the home page, which is static
app.use("/", homeRouter);
app.use("/", userDataRouter) 


// Mount Global Error handler function
app.use(globalErrorHandler);


// Start server
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})