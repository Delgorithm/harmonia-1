const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programsAction = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/programs", programsAction);

/* ************************************************************************* */

module.exports = router;
