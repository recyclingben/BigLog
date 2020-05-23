const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", require("express-handlebars")());
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.redirect("/home"));
app.get("/home", (req, res)    => res.render("home"));
app.get("/welcome", (req, res) => res.render("welcome"));
app.get("/school", (req, res)  => res.render("school"));
app.get("/poem", (req, res)    => res.render("poem"));
app.listen(port);