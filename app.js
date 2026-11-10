const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

//lets the react site (on a different domain) request data from this server
app.use(cors());

//serves index.html, styles.css and the images folder
app.use(express.static("public"));

//list of finance apps shown on the Resources page of the react site
const apps = [
  {
    _id: 1,
    name: "Mint",
    category: "Budgeting",
    price: "FREE",
    description: "Free all-in-one budgeting, spending tracking, and bill reminders. Syncs with your bank automatically.",
    color: "",
    img_name: "images/mint.svg",
  },
  {
    _id: 2,
    name: "YNAB",
    category: "Budgeting",
    price: "PAID",
    description: "\"You Need A Budget\" — proactive budgeting app with a great student discount. Highly reviewed.",
    color: "",
    img_name: "images/ynab.svg",
  },
  {
    _id: 3,
    name: "Acorns",
    category: "Investing",
    price: "PAID",
    description: "Round up purchases and invest the spare change automatically. Great way to start investing with $0.",
    color: "gold",
    img_name: "images/acorns.svg",
  },
  {
    _id: 4,
    name: "Ally Bank",
    category: "Savings",
    price: "FREE",
    description: "High-yield savings account with 4–5% APY. No minimums, no fees. Keep your emergency fund here.",
    color: "purple",
    img_name: "images/ally.svg",
  },
  {
    _id: 5,
    name: "Credit Karma",
    category: "Credit",
    price: "FREE",
    description: "Free credit score monitoring, alerts, and personalized tips. Check your score without hurting it.",
    color: "",
    img_name: "images/creditkarma.svg",
  },
  {
    _id: 6,
    name: "Venmo / Cash App",
    category: "Transfers",
    price: "FREE",
    description: "Split bills, pay rent, and transfer money instantly. Use for splitting costs with roommates.",
    color: "gold",
    img_name: "images/venmo.svg",
  },
  {
    _id: 7,
    name: "GasBuddy",
    category: "Transportation",
    price: "FREE",
    description: "Find the cheapest gas stations near you. Can save $0.20–0.50 per gallon.",
    color: "red",
    img_name: "images/gasbuddy.svg",
  },
  {
    _id: 8,
    name: "Goodbudget",
    category: "Budgeting",
    price: "FREE",
    description: "Digital envelope budgeting — allocate money to categories at the start of the month.",
    color: "",
    img_name: "images/goodbudget.svg",
  },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//get request that sends the list of apps to the client
app.get("/api/apps", (req, res) => {
  res.json(apps);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
