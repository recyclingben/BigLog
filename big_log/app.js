const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", require("express-handlebars")());
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.redirect("/home"));
app.get("/home", (req, res)       => res.render("home",       { title: "Home" }));
app.get("/welcome", (req, res)    => res.render("welcome",    { title: "I Have a Blog Now" }));
app.get("/school", (req, res)     => res.render("school",     { title: "Why I Don't Like School and What's Wrong About It" }));
app.get("/poem", (req, res)       => res.render("poem",       { title: "CSS" }));
app.get("/evil", (req, res)       => res.render("evil",       { title: "Please Don't Do This" }));
app.get("/branchless", (req, res) => res.render("branchless", { title: "Adventures in Branchless Computing" }));
app.listen(port);