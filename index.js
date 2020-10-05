const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require("./models")
const cors = require('cors')
// let port = process.env.PORT;

app.use(bodyParser({extended : true}))
app.use(cors())

app.get('/',(req,res)=> {
    res.send('Hello')
})

require('./routes/competence')(app)
require('./routes/projet')(app)

// if (port == null || port == "") {
//     port = 8000;
//   }

models
    .sequelize
    .sync()
    .then(app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running')
    }))

