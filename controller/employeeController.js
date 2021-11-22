const connection = require("../db");
const { bodySchema } = require("../validationSchema");

const addEmployee = (req, res) => {
  const result = bodySchema.validate(req.body);
  if (result.error) {
    return res.send("error");
  }

  const { first_name, last_name, date_of_birth, gender, salary, status } =
    req.body;

  var sql =
    "INSERT INTO employee (First_name,Last_name,Date_of_birth,Gender,Salary,Status) VALUES (?,?,?,?,?,?)";
  connection.query(
    sql,
    [first_name, last_name, date_of_birth, gender, salary, status],
    function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    }
  );
  res.send("Employee Created");
};

const editEmployee = (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, date_of_birth, gender, salary, status } =
    req.body;

  const sql1 =
    "UPDATE employee SET First_name = ?,Last_name=?,Date_of_birth=?,Gender=?,Salary=?,Status=? WHERE id = ?";
  connection.query(
    sql1,
    [first_name, last_name, date_of_birth, gender, salary, status, id],
    function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    }
  );

  res.send("updated");
};

const getEmployees = (req, res) => {
  const sql2 =
    "SELECT CONCAT(First_name,' ',Last_name) AS Name,Date_of_birth,Gender,Salary,Status FROM employee";
  connection.query(sql2, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const getEmployeeByName = (req, res) => {
  const { first_name, last_name } = req.body;
  const sql4 =
    "SELECT First_name,Last_name FROM employee where First_name=? AND Last_name=?";
  connection.query(sql4, [first_name, last_name], function (err, results) {
    if (err) throw err;
    res.send(results);
  });
};

const editStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sql3 = "UPDATE employee SET Status=? WHERE id = ?";
  connection.query(sql3, [status, id], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });

  res.send("updated status");
};

module.exports = {
  addEmployee,
  editEmployee,
  getEmployees,
  getEmployeeByName,
  editStatus,
};
