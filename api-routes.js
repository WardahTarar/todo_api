let router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    status: 'API its working',
    message: 'Welcome to RESTHub',
  })
})

module.exports = router