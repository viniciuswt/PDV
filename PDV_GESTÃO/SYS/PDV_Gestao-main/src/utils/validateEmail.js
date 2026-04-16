export const validateEmail = (email) => {
    const isValiEmail = (val) => {
        return /\S+@\S+\.\S+/.test(val)
      }

      if (!isValiEmail(email)) throw Error('Formato de email inválido')
}