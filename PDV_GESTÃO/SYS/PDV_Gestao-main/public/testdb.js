const path = require('path');
const sqlite3 = require('sqlite3')
const isDev = require('electron-is-dev');

const db = new sqlite3.Database(  isDev ? 
  path.join(__dirname, 'db/teste.db')
: path.join(process.resourcesPath, 'db/teste.db'), (err) => {
    if (err) console.error('Database opening error: ', err);
});



exports.getAllProductsByName = async (name) => {
    const sql = `SELECT * FROM products where name like '${name}%' OR id like '${name}%'`
    return new Promise((resolve, reject) => {
        let result = []
        db.each(sql, (err, row) => {
          if(err) { reject(err) }
          result.push(row)
        }, () => {
        if (result.length === 0) {
            reject("Array vazio")
           
            }
          resolve(result)
        })
      })
     
    }

    exports.getAllProducts = async () => {
      const sql = "SELECT * FROM products"
      return new Promise((resolve, reject) => {
          let result = []
          db.each(sql, (err, row) => {
            if(err) { reject(err) }
            result.push(row)
          }, () => {
          if (result.length === 0) {
              reject("Array vazio")
             
              }
            resolve(result)
          })
        })
       
      }

exports.getByBarCode = async (id) => {
    const sql = `SELECT * FROM products where id = ${id}`
    return new Promise((resolve, reject) => {
        let result = []
        db.each(sql, (err, row) => {
          if(err) { reject(err) }
          result.push(row)
        }, () => {
          if (result.length === 0) {
            reject("Array empty")
          }
          resolve(result[0])
        })
      })
        
    }


      
exports.setProduct = async () => {
    const sql = "INSERT INTO products (name, price) VALUES ('Coca-cola',20.20)"
    db.run(sql);
}
