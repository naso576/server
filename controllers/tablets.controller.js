
const db = require("../models");
const TabletsList = db.tablets;



exports.addTablet = (req, res) => {

  const arr = JSON.stringify(req.body);
  const arr1 = JSON.parse(arr);
      console.log('asoerhzsd  '+JSON.stringify(req.body));
   const   tablet = new TabletsList ({
  
  
    
    tabletName : req.body.tabletName,
    Composition : req.body.Composition
  
   });
  
   tablet
   .save(tablet)
   .then(data => {
  
                  // console.log("values"+complaintsString);
                  res.setHeader("Access-Control-Allow-Origin", "*")
                  res.setHeader("Access-Control-Allow-Credentials", "true");
                  res.setHeader("Access-Control-Max-Age", "1800");
                  res.setHeader("Access-Control-Allow-Headers", "content-type");
                  res.setHeader("Content-Type", "application/json");
                  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  
                  })
                  .catch(err => {
                  if(err){         
                  
                  res.status(500).send({
                      message:
                      err.message || "Some error occurred while adding tablet."
                      
                  });
                  }
                  else
                  {
                  res.send('success');
  
                  }
  
                  });
                  // });
  }
  
  

exports.findTabletsList =(req,res) => {
console.log('calling')
    TabletsList.find()
    .then(data => {

        res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
      res.send(data);
     
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving DATA."

      });
      console.log('sdsddfg');
    });
  }
