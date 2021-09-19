const express = require('express');
const app = express();
port = 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.post()
app.listen(port, ()=>{
 console.log(`Server started on port: ${port}`)
});

