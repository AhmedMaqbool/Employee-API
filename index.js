const express = require("express");
const app = express();
const employeeRouter = require("./routes/employeeRoutes");

const PORT = 5000 || process.env.PORT;

app.use(express.json());

app.use("/api", employeeRouter);

app.listen(PORT, () => {
  console.log("App is listening on port 5000");
});
