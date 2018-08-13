var express = require('express');
var router = express.Router();
const queries = require('../queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getAll14ers().then(fourteeners => {
    res.json(fourteeners)
  })
})
router.get('/:rank', (req, res) => {
  queries.getOne(req.params.rank).then(fourteeners => {
    res.json(fourteeners)
  })
})

module.exports = router;
