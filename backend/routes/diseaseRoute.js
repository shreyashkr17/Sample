const express = require('express');
const {createDisease, getDiseases, updateDisease, deleteDisease} = require('../controllers/diseaseController');

const router = express.Router();
router.route("/disease").get(getDiseases);
router.route("/disease/new").post(createDisease);
router.route("/disease/:id").put(updateDisease).delete(deleteDisease);
module.exports = router;