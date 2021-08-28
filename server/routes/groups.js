const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get('/groups', (req, res) => {
    res.send("ok");
    //res.json(data);
  })
  return router;
}