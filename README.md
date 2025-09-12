# SBA 318: Express Server Application

## Project Description
A Node.js + Express application for creating and sharing **digital business cards**. Users are prompted to enter basic information via a form and recieve styled, shareable card rendered with **EJS**. More work is being done to make the digital card downloadable. The project exposes RESTful API endpoints for managing users.

The list of items requested from the user (via a form?) are:
    1. Full Name
    2. Professional Title
    3. Professional summary (100 words)
    4. List of skills
    5. Photo URL
    6. Contact Information (Email and Phone)

## Features
The main features of the project are:
 - Static home page with introduction,
 - Form (/form) to submit card data,
 - Dynamic rendering of digital cards with **EJS** templates,
 - Restful API to manage user data ("GET", "POST", "PUT", "DELETE"),
 - Supports custom photo via URL and
 - Global Error Handling with an error handling middleware and logging with **Morgan**.

## Views
The following views are included in the project:
    1. **card.html/ejs** - dynamically rendered template
    2. **form.html/ejs** - collects data from users and redirects them to card.ejs upon submission
    3. **home.html** - static page welcoming users and giving instruction and redirecting to the card.ejs

## View routes
    **"/"** - redirects to the home page
    **"/form"** - EJS form for input
    **"/digitalCard"** - Generates digital card view

## API Endpoints

    | Method |     Endpoint          |       Description       |
    |--------|-----------------------|-------------------------|
    |  GET   |  `/api/userData`      |    Get all users        |
    |  GET   |  `/api/userData/:id`  |    Get user by ID       |
    |  POST  |  `/api/userData`      |    Create a user        |
    |  PUT   |  `/api/userData/:id`  |    Update a user        |
    | DELETE |  `/api/userData/:id`  |    Delete a user        |
    |  POST  |  `/digitalCard`       | Create a digital card   |


#### Programming Languages and Tech Stack used:
    - JavaScript
    - HTML
    - Cascading styling Sheet (CSS) 
    - Node.JS + Express
    - Embeded JavaScript (EJS)- for templating
    - Morgan- for logging
    - In-memory array (userData) as mock database.

## Reflection

 #### What could you have done differently during the planning stages of your project to make the execution easier?
`I feel like I have done a good job planning and executing the project, which allowed me to finish the core aspects of the project ahead of time. I will follow the same approach for future projects.`

 #### Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
`The requirements are reasonable and clear.`

 #### What would you add to or change about your application if given more time?
`I will include three additional features (functionality to download the digital card, photo uploading and storage capability, and adding QR codes for each card), but all of them require not just time, but additional tools.`

 #### Use this space to make notes for your future self about anything that you think is important to remember about this process or that may aid you when attempting something similar.
`Include the additional features to make to app more robust.`
