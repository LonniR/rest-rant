const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
// GET /places
// app.get('/', (req, res) => {
//     res.render('places/index')
//   })
  

module.exports = router
