var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/init", (req, res) => {
  // start new game
    // calls for BOT/AI to generate ship locations

})

router.post("/setshiplocations", (req, res) => {
  // POST Human player ship locations

})

router.post("/humanguess", (req, res) => {
  // POST Human player guess

})

router.get("/botguess", (req, res) => {
  // GET BOT/AI player guess

})
 
router.delete("/cleargame", (req, res) => {
  // DELETE clear/reset game

})

module.exports = router;
