 const express = require("express");
 const cors = require("cors");
 const app = express();

//  const port = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log("Server listening on port 3001");
});