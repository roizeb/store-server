require('dotenv').config();
require('./db');
// require('./DL/controllers/productsController')
// require('./DL/controllers/categoriesController')

const
    express = require("express"),
    app = express(),
    PORT = process.env.PORT

app.use(express.json())

app.use('/',require('./Router/productsRouter'))
app.use('/',require('./Router/categoriesRouter'))

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`))