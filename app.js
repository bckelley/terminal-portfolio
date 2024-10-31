const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

// Routes for your application
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/src/html/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
