const express = require('express')
const { getList, getFile } = require('../controllers/data')

const router = express.Router()

router.get('/data', getList)
router.get('/data/:file', getFile)

module.exports = router