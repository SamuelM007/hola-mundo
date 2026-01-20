//Import the express module
import express from "express";

//Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3000;

// Define the root path ('/')
app.get("/", (req, res) => {
  // Send text as a response to the client
  res.send("Hola, Mundo!");
});

// State the server and tell it listen on the port
// specified above. Note the backticks!
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
