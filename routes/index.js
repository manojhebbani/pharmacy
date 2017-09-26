const express = require('express');
var router    = express.Router();

router.get('/', ( req, res )=>{
  res.send("This is from route index.");
});

router.get('/about', (req,res) =>{
  res.send("from route index about method.");
});

module.exports = router;
