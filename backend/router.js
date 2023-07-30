const controller = require("./controller.js");

const express = require("express");
const router = express.Router();


router.get("/getAllSchools", controller.getAllSchools);

router.get("filterAllSchool", controller.filterAllSchools);

router.get("getOneSchool", controller.getOneSchools);

router.get("getAllRegions", controller.getAllRegions);

router.post("addSchool", controller.addSchool);

router.put("updateSchool", controller.updateSchool);

router.delete("deleteSchool", controller.deleteSchool);