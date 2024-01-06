// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require('cors');
// const app = express();
// const PORT = 3001

// app.use(cors());
// app.use(bodyParser.json());

// let buggies = [];

// app.get('/buggies', (req, res) => {
//     res.json(buggies);
// })

// app.post('/buggies', (req, res) => {
//     const newBuggy = {
//         id: Date.now().toString(),
//         color: req.body.color,
//         location: req.body.location,
//         date: req.body.date,
//     };

//     buggies.push(newBuggy)

//     res.json(newBuggy);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
// })

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors({
    origin: ['https://buggy-counter.vercel.app/'],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(bodyParser.json());

let buggies = [];

app.get('/buggies', (req, res) => {
  res.json(buggies);
});

app.post('/buggies', (req, res) => {
  const newBuggy = {
    id: Date.now().toString(),
    color: req.body.color,
    location: req.body.location,
    date: req.body.date,
  };

  buggies.push(newBuggy);

  res.json(newBuggy);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
