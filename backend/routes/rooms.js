const express = require('express')
const {
    createRoom
} = require('../controllers/roomController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all room routes
router.use(requireAuth)

// CREATE a room
router.post('/room-creation', createRoom)


module.exports = router