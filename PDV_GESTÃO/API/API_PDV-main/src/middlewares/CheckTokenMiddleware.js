const jwt = require('jsonwebtoken')
const db = require('../database')
const CheckToken =async (req,res,next) => {
   
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    
    if(!token) {
        return res.status(401).json({message:"Acesso negado"})
    }

    try{
        const secret = process.env.SECRET
        const {id} = jwt.verify(token,secret)
        const [data] = await db.query('SELECT * FROM operador WHERE id = ?',[id])
        if (data[0].length === 0) {
           throw new Error()
        }
      

        const {senha:_,data:__,...user} =  data[0]
        
        req.user = user
        next()
    }

    catch(e) {
        
        return res.status(400).json({message:"Token inválido"})
    }

}
module.exports = CheckToken