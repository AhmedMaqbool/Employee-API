const express = require("express");

const {
  addEmployee,
  editEmployee,
  getEmployees,
  getEmployeeByName,
  editStatus,
} = require("../controller/employeeController");
const router = express.Router();

router.get("/getEmployees", getEmployees);
router.get("/getEmployeeByName", getEmployeeByName);
router.post("/addEmployee", addEmployee);
router.put("/editEmployee/:id", editEmployee);
router.put("/editStatus/:id", editStatus);

module.exports = router;
