const express = require('express').Router()
const router = express
const Lesson = require('./leson')

router.use(Lesson)


module.exports = router