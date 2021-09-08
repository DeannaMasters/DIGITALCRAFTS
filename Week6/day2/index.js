const express = require("express");
const app = express();
const PORT = 3002;
const student = {name: "Jordan" };


const students = [
  { name: "Jordan" },
  { name: "Whitney" },
  { name: "Tay" },
  { name: "Michael" },
  { name: "Calvin" },
  { name: "Kendall" },
  { name: "Patrick" },
];

const address = [
  { name: "123 Main St" },
  { name: "123 Main St" },
  { name: "123 Main St" },
  { name: "23 Tomball St" },
  { name: "2020 RightLeft St" },
  { name: "465 Right St" },
  { name: "123 Colorado St" },
];

const state = [
    { name: "GA" },
    { name: "FL" },
    { name: "TX" },
    { name: "WA" },
    { name: "PH" },
    { name: "LA" },
    { name: "TX" },
  ];
const es6Renderer = require("express-es6-template-engine");

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
    let list = `<ul>`;
    for (let student of studentss) {
      list += `<li>
              <p> ${student.name}</p>
          </li>
          `;
    }
    list += `</ul>`;
    console.log(list);
    res.render("home", {
    locals: {
      students: students,
      address, state
    },
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));