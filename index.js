var express = require('express');
var app = express();
//var app=require('express')();
var mysql = new require('mysql');
var con = mysql.createConnection({
    host: 'localhost',//192.168.1.142
    user: 'root',
    password: 'admin',
    database: 'dxcgroupdb'
});

var p = [];
var a = [];
var b = [];

con.connect(
    function (err) {
        con.query("select * from ntabs",
            function (err, res, fields) {
                res.forEach(e => {
                    var pp1 = e["bname"];
                    a.push(pp1);
                    var pp2 = e["bauthor"];
                    b.push(pp2);

                });
            }

        );
    }
);
app.get('/vals', function (req, res) {
    var finstr = '<ul border=1>'
    for (let i = 0; i < a.length; i++) {
        const a1 = a[i];
        const b1 = b[i];
        finstr += '<li style=\'background-color: red; border: 1px solid black \'>' + a1 + '</li> <ul> <li>' + b1 + '</li></ul>'
    }
    finstr += '</ul>';
    res.send(finstr);
});
app.listen(3000);
