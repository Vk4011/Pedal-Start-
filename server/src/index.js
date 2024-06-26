const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const route = require("./routes/router");
const db = require("./config/db");
const errorHandler = require("./util/catche");
dotEnv.config();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use("/api", route);

app.get("/", (req, res) => res.json({ msg: "server is running successfully 💻" }));


app.use(errorHandler);

app.listen(port, () => {console.log(`\n\t server :  http://127.0.0.1:${port} \n`);db();});
