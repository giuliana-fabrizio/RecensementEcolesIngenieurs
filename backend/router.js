const controller = require("./controller.js");

const express = require("express");
const router = express.Router();


router.route("/getAllSchools").get(controller.getAllSchools);

router.route("/filterAllSchool").get(controller.filterAllSchools);

router.route("/getOneSchool/:nom").get(controller.getOneSchool);

router.route("/getAllRegions").get(controller.getAllRegions);

router.route("/addSchool").post(controller.addSchool);

router.route("/updateSchool").put(controller.updateSchool);

router.route("/deleteSchool/:nom").delete(controller.deleteSchool);

module.exports = router;