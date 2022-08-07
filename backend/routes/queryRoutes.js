const express = require('express')
const router = express.Router()
const { getQueries, sendQuery, updateResponded, deleteQuery } = require('../controllers/queryController')
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect, getQueries).post(sendQuery).put(protect, updateResponded)
router.delete('/:id', protect, deleteQuery)


module.exports = router