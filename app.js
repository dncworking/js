const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

//pridejimas
app.get("/api/v1/add/:number1/:number2", (req, res) => {
  const number1 = +req.params.number1;
  const number2 = +req.params.number2;
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({
      status: "error",
      message: "Both parameters must be valid numbers.",
    });
  }
  const result = number1 + number2;
  res.status(200).json({
    status: "success",
    data: `Answer is ${result}`,
  });
});

//atimtis
app.get("/api/v1/subtract/:number1/:number2", (req, res) => {
  const number1 = +req.params.number1;
  const number2 = +req.params.number2;
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({
      status: "error",
      message: "Both parameters must be valid numbers.",
    });
  }
  const result = number1 - number2;
  res.status(200).json({
    status: "success",
    data: `Answer is ${result}`,
  });
});

//dauginti
app.get("/api/v1/multiply/:number1/:number2", (req, res) => {
  const number1 = +req.params.number1;
  const number2 = +req.params.number2;
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({
      status: "error",
      message: "Both parameters must be valid numbers.",
    });
  }
  const result = number1 * number2;
  res.status(200).json({
    status: "success",
    data: `Answer is ${result}`,
  });
});

//dalinti
app.get("/api/v1/divide/:number1/:number2", (req, res) => {
  const number1 = +req.params.number1;
  const number2 = +req.params.number2;
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({
      status: "error",
      message: "Both parameters must be valid numbers.",
    });
  }
  if (Number(number2 === 0)) {
    return res.status(400).json({
      status: "fail",
      message: "Can't divide by zero",
    });
  }
  const result = number1 / number2;
  res.status(200).json({
    status: "success",
    data: `Answer is ${result}`,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
