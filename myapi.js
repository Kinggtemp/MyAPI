//Backend javascript

const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.get("/goodbye", (req, res) => {
    res.send("Goodbye");
  });

  app.get("/alexo", (req, res) => {
    res.send("Hello Alex");
  });

app.get("/albums", (req, res) => {
    // read the JSON file
    fs.readFile("albums.json", "utf8", (err, data) => {
        // send the JSON file to the user
        res.send(data);
    });
});

  app.listen(8081, () => { 
    console.log("Server is running on port 8081");
});

app.get("/albums/:id", (req, res) => {
    // read
    fs.readFile("albums.json", "utf8", (err, data) => {
        // parse
        const albums = JSON.parse(data);
        // find the album
        const album = albums.find(album => album.id === Number(req.params.id));
        // send the album
        res.send(album);
    });

});