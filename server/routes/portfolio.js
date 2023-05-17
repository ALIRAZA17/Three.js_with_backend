const express = require('express')
const router = express.Router()

// Get the main page

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

module.exports = router
