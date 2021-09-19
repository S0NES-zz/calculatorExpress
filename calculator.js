const express = require('express');
const bodyParser = require("body-parser");
const port = 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/styles'))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})
app.get("/calculator", (req, res) => {
  res.sendFile(`${__dirname}/calculator.html`)
})
app.get("/bmicalculator", (req, res) => {
  res.sendFile(`${__dirname}/bmiCalculator.html`)
})

app.post("/calculator", (req, res)=>{
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let op = req.body.operation;
  let result;
  switch (op){
    case "plus" :
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mult":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    default:
      res.error("Not a operation");
  }
  res.send(`The result of the calculation is ${result}`);
})
app.post("/bmicalculator", (req, res)=>{
  let num1 = parseFloat(req.body.weight);
  let num2 = parseFloat(req.body.height);
  let result = num1 / (num2 * num2);
  res.send(`Your BMI is ${result}`);
})

app.listen(port, ()=>{
 console.log(`Server started on port: ${port}`)
});

