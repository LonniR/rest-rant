const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
  
// GET /places
// app.get('/', (req, res) => {
//     res.render('places/index')
//   })
  

module.exports = router
