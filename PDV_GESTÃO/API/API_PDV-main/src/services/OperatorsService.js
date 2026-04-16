const db = require("../database")
const bcrypt = require('bcrypt')
const OperatorsService = {
  
   createOperator: async({name,admin,email,password,logged}) => {
       
            try {
                const [userExists] =await db.query('SELECT * FROM operador WHERE email = ?',[email])
        
               if (userExists.length > 0) {
                    throw ("Email já existe")
               }
        
            const salt = await bcrypt.genSalt(12)
            const passHash = await bcrypt.hash(password,salt)
            
            const [data] = await db.query('INSERT INTO operador(nome,admin,email,senha,id_loja) values (?,?,?,?,?)',[name,admin,email,passHash,logged]) 
            return {message:"Usuário cadastrado com sucesso",data}
           }
           
        catch(e) {
            throw Error(e)
        }
        },

    getAll: async({logged}) => {
        const [data] = await db.query('SELECT * FROM operador where id_loja = ?',[logged])
        return data
    },

    deleteOperators: async({idParam,logged}) => {
        const [data] = await db.query('DELETE from operador where id = ? AND id_loja = ?',[idParam,logged])
        return data
    }
}

module.exports = OperatorsService