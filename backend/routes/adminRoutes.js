const express = require('express')
const router = express.Router()
const { loginAdmin, createAdmin } = require('../controllers/adminController')

router.post('/', loginAdmin)
router.post('/new', createAdmin)

module.exports = router