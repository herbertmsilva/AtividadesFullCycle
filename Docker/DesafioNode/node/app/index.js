const express = require('express')
const mysql = require('mysql')

const app=express()
const port=3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', async (req,res) =>{

    const connection = mysql.createConnection(config);
    const insert = `insert into people (name) values('herbert')`

    await connection.query(insert);

    const result =  connection.query('select * from people')

    connection.query('select * from people', (error, result)=>{
        connection.end()
        if (error) throw error
    
        let peopleHtml = '<h1>Full Cycle Rocks!!</h1>'
        peopleHtml = peopleHtml.concat('<table><tbody>')

        for(const row of result){
            peopleHtml +=`<tr><td>${row["Id"]}</td><td>${row["Name"]}</td></tr>`
        }

        peopleHtml += '</tbody></table>'

        res.send(peopleHtml)
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta '+port)
})