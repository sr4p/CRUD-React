const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "passw0rd",
    database: "employees_crud"
})

app.get('/',(req, res) =>{
    res.send("FFFFF")
})

app.get('/employees',(req, res) =>{
    db.query("SELECT * FROM employees",(err, rows) =>{
        err ? console.log(err) : res.send(rows)
    })
})

app.post('/create',(req, res) =>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query("INSERT INTO employees (name,age,country,position,wage) VALUE(?,?,?,?,?)" , [name,age,country,position,wage],
    (err,result) => {
        (err) ? console.log(err) : res.send("Value inserted!")
    })
})

app.put('/update',(req, res) =>{
    const id = req.body.id;
    const wage = req.body.wage;

    db.query("UPDATE employees SET wage = ? WHERE id = ?",[wage,id],
    (err,result)=>{
        (err) ? console.log(err) : res.send(result)
    })
})

app.listen('3001', () =>{
    console.log('Server is running on port 3001.')
})