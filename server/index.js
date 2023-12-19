const express = require("express");
const stripe = require("stripe");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeInstance = stripe(stripeSecretKey);

app.post("/create-checkout-session", async (req, res) => {
  const MY_DOMAIN =
    "https://malias-bag-server-cynthia-tonuis-projects.vercel.app/";
  const MAIN_DOMAIN =
    "https://malias-aetzoa6ea-cynthia-tonuis-projects.vercel.app/";

  // Retrieve total amount and items from the request body
  const { totalAmount, itemCount } = req.body;

  // Ensure both totalAmount, itemCount, and productName are present and valid
  if (
    isNaN(totalAmount) ||
    totalAmount <= 0 ||
    !Number.isInteger(itemCount) ||
    itemCount <= 0
    // typeof productName !== "string" || // Ensure productName is a string
    // productName.trim() === "" // Ensure productName is not an empty string
  ) {
    return res.status(400).json({ error: "Invalid totalAmount, itemCount" });
  }

  const exchangeRate = 120;
  // Convert totalAmount to USD
  const totalAmountUSD = totalAmount / exchangeRate;

  const unitAmountCentsUSD = Math.round((totalAmountUSD * 100) / itemCount);

  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Total Amount in USD",
          },
          unit_amount: unitAmountCentsUSD,
        },
        quantity: itemCount,
      },
    ],
    mode: "payment",
    success_url: `${MAIN_DOMAIN}/success`,
    cancel_url: `${MAIN_DOMAIN}/cart`,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => {
  console.log("Server is running on port 4242");
});
