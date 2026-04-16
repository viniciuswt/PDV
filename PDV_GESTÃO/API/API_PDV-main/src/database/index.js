const mysql = require('mysql2')


const connection = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
    connectionLimit:10
})


connection.getConnection((err) => {
    
    if (err) throw err;
    console.log("Connected database")
})

module.exports = connection.promise()