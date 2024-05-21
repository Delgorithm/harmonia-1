const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programsAction");

router.get("/", browse);

module.exports = router;
