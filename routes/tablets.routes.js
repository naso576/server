const tablets =require("../controllers/tablets.controller.js");
var router = require("express").Router();


router.get("/findTabletsList", tablets.findTabletsList);
router.get("/addTablet", tablets.addTablet);

module.exports = router;    
