const AuthService = require("../services/AuthService")

const AuthController = {
  
    login: async(req,res) => {
        try {
        
            const {email,password} = req.body
            if (!email) {
                return res.status(422).json({message:"Email não preenchido"})
            }
            if (!password) {
                return res.status(422).json({message:"Senha não preenchida"})
            }

            const data =await AuthService.login({email,password})
    
            return res.status(200).json(data)

        }
        catch(e) {
            
            return res.status(400).json({message:e.message})
        }
    },

     getProfile: async (req, res) => {
		return res.json(req.user)
	},

    validateToken: async (req,res) => {
        try {
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(" ")[1]
            const data = await AuthService.validateToken(token)
          
            return res.status(200).json(data)
        }
        catch(e) {
            return res.status(400).json({message:e.message})
        }
    },

  
    
}

module.exports = AuthController