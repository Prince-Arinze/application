const express = require("express");
const path = require("path");

const port = prcess.env.PORT || 3400;

const app = express();

app.use(express.static(__dirname, "/client/build"));

app.get("/*", (req,res) => {
  res.sendFile(path.join( __dirname + '/client/build/index.html' ) )
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})