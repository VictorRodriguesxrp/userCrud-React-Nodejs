const express = require('express');
const app = express();
require("./database")

const routes  = require("./routes")

app.use(express.json());
app.use(routes);


app.listen(3001, () => console.log(`Server is running at port ${3001}`))