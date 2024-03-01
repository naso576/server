const express = require("express");
const cors = require("cors");

const app = express();


var corsOptions = {
    origin: "http://nktdc.vercel.app/",
    credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200,
      allowedHeaders :'content-type'
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  
  const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});