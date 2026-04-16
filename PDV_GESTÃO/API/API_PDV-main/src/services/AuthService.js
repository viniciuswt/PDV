const db = require("../database/")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dbFicha = require("../database/dbFicha")
const AuthService = {
   
    login: async({email,password}) => {
      const loginAccount =async (database,table) => {
        const [user] = await database.query(`SELECT * FROM ${table} WHERE email = ?`,[email])
          
            if (user.length <= 0) {
                throw ("Usuário não existe")
            }
        
          const checkPassword = await bcrypt.compare(password,user[0].senha)
          if (!checkPassword) {
            throw ("Senha inválida")
          }
          const { senha: _,data: __, ...userLogin } = user[0]

          const secret = process.env.SECRET
          const token = jwt.sign({
            id: user[0].id
          },
          secret,
          {expiresIn:'168h'})
          return {token,user:userLogin}
      }
        
  
        return loginAccount(db,'operador')
          .catch((e) => {
            throw new Error(e)
          })
          
          
          
       
        

    },

    validateToken: async(token) => {
      try {
      const secret = process.env.SECRET
      const {id} = jwt.verify(token,secret)
      const [data] = await db.query('SELECT * FROM operador WHERE id = ?',[id])
      const {senha:_,data:__,...user} =  data[0]
       
      const [dataFicha] = await dbFicha.query('SELECT * FROM usuarios WHERE id = ?',[user.id_loja])
      const {nome:nomeLoja} = dataFicha[0]
      user.nomeLoja = nomeLoja
      return {user};
      }
      catch(e) {
        throw Error("Token não é válido")
      }
    },


}


module.exports = AuthService