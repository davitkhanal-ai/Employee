
//require
require("./models/db")

const express = require("express")
const path = require('path')
const exphbs = require("express-handlebars")
const bodyparser = require('body-parser')
const employeeController = require("./controllers/employeeController")

//function calling
var app = express()
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())

app.set("views", path.join(__dirname, "/views/"))
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + "/views/layouts"}))

//listening
app.listen(3000, ()=>{
    console.log("Server is up")
})

app.get("/",(req,res) => {
    res.render("./employee/addorEdit.hbs")
})

app.use("/employee", employeeController)