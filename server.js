const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
/* Builds 'pathing' for directories */
const path = require("path");

/* If in Development or Testing, require the 'dotenv' library to access environment variables */
if (process.env.NODE_ENV !== "production") require("dotenv").config();

/* STRIPE SECRET KEY */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/* Instantiate Express */
const app = express();

/* HEROKU sets up the PORT variable, otherwise run on local port 5000 (dev or testing) */
const port = process.env.PORT || 5000;

/* 
Converts the body of API requests to JSON,
Ensures urls are in proper format (no invalid characters or spaces)
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Cross Origin Request allows making requests between Frontend (origin is port 3000) and backend (origin is port 5000) */
app.use(cors());

/* 
Host Server
1. Express use the 'static' middleware to server the 'path' to the relative path 'client/build' (built when build script is run). All static files will be served.
2. All 'get' request sends static files, i.e. the 'index.html' that holds ALL frontend client code
*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});

/* STRIPE PAYMENT ROUTE */
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: StripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
