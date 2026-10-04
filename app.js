const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Student Budget Planner backend is working!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});