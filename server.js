const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json());  
app.use(cors());
// require("dotenv").config();
// const bodyParser = require('body-parser');

// Parse JSON and URL-encoded form data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); 

//Razorpay Route
const phonepeRoute = require('./routes/phonepe/phonepeRoute')
app.use("/api", phonepeRoute);

// Starting Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
//   headers: {accept: 'application/json', 'Content-Type': 'application/json'}
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });