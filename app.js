var express = require('express')
var app = express()
var mysql = require('mysql')

var apiController = require('./controllers/apiController')
var htmlController = require('./controllers/htmlController')

var port = process.env.PORT || 3000



app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.use('/', function(req, res, next){
    console.log('Request URL: '+ req.url)

    var con = mysql.createConnection({
        host: "localhost",
        user: "test",
        password: "test",
        database: "db-tuto"
    })

    con.query('SELECT * FROM Users', function(err, rows){
        if(err) throw err;
        console.log(rows);
    })
    next()
})

htmlController(app)
apiController(app)

app.listen(port)