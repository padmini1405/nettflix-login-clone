const express = require("express");
const cors = require("cors");
// require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const user = {
  email: "test@gmail.com",
  password: "123456",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.json({ success: true });
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

