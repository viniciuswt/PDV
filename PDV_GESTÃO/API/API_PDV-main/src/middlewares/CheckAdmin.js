const CheckAdmin =async (req,res,next) => {
    

    try {
      if (!req.user.admin) {
        throw err;
      }
        next()
    }

    catch(e) {
        return res.status(400).json({message:"Usuário não é administrador"})
    }
}
module.exports = CheckAdmin