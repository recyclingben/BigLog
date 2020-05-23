const path = require("path");
const express = require("express");
const app = express();
const port = process.env.ENV == "release"
    ? 80
    : 3000;

app.engine("handlebars", require("express-handlebars")());
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.redirect("/home"));
app.get("/home", (req, res) => res.render("home"));
app.get("/school", (req, res) => res.render("school"));
app.listen(port);