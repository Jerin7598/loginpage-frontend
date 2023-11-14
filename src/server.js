var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");

const cors = require('cors');
const { Console } = require('console');
var app = express();
app.use(cors())
app.use(bodyParser.json())



const port = process.env.PORT || 5000;

app.get('/listUsers', function (req, res) {
  fs.readFile('user.json', 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/addUser', function (req, res) {
  // Read existing users from 'new.json'
  fs.readFile('user.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
  let existingData = JSON.parse(data);
  // Calculate the next index for the new data
      const newIndex = Object.keys(existingData).length;
    // Add the new data to the existing data with the new index
      existingData[newIndex] = req.body;
    // Convert the updated data back to JSON
      let json = JSON.stringify(existingData, null, 2);
 // Write the updated JSON back to 'new.json'
      fs.writeFile('user.json', json, 'utf8', function (err) {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(json); // Respond with the updated data
        }
      });
    }
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
