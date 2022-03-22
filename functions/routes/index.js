var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('cod', {
    isLoggedIn: true,
    title: [
      "Call Of Duty Mobile",
      "Get Ready For Battle",
      "Prepare Yourself"
    ],
    message: [
      "Welcome to CODM Hub!",
      "Join with your friends",
      "Enjoy the exhilarating games"
    ]
  });
});

module.exports = router;