const express = require('express');
const mysql = require('mysql');

//db
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'biblio'

});

//db cnx
db.connect((err)=>{
if(err){
    throw err;
}
console.log('Mysql connected...');
});

const app = express();

// select 
app.get('/getLivre',(req,res)=>{
    let sql='SELECT * FROM livre';

    let query = db.query(sql,(err,results)=>{
       if(err) throw err;
       console.log(results);
       res.send(results);
    });
});






app.listen('3030',()=>{
console.log('Server started on port 3030');
});