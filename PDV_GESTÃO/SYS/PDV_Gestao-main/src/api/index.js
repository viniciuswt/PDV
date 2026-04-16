const BASE_URL = 'http://localhost:3001'

const requestOptionsToken = (token, method, infos) => {
  const head = {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    mode: 'cors',
  }
  if (infos) {
    head.body = JSON.stringify(infos)
  }
  return head
}

const api = {
  getSalesBox: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/salesBox`, requestOptionsToken(token))
    const data = response.json()
    return data
  },
  getOperators: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/operators`, requestOptionsToken(token))
    const data = response.json()
    return data
  },
  getProducts: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/products`, requestOptionsToken(token))
    const data = response.json()
    return data
  },
  getMethods: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/methods`, requestOptionsToken(token))
    const data = response.json()
    return data
  },
  getSales: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/sales`, requestOptionsToken(token))
    const data = response.json()
    return data
  },
  getTransactions: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/transactions`, requestOptionsToken(token))
    const data = response.json()
    return data
  },
  
  addSalesBox: async (infos) => {
    const token = localStorage.getItem('authToken')

    const response = await fetch(`${BASE_URL}/salesBox`, requestOptionsToken(token, 'POST', infos))
  
    if (!response.ok) {
      throw new Error('Falha na requisição')
    }
    const data = await response.json()
    return data
  },

  addOperator: async (infos) => {
    const token = localStorage.getItem('authToken')

    const response = await fetch(`${BASE_URL}/operators`, requestOptionsToken(token, 'POST', infos))
   
    if (!response.ok) {
      console.log(response.json())
      throw new Error('Falha na requisição')
    }
    const data = await response.json()
    return data
  },

  openSalesBox: async (infos) => {
    const token = localStorage.getItem('authToken')

    const response = await fetch(`${BASE_URL}/salesBox/open`, requestOptionsToken(token, 'PUT', infos))

    if (!response.ok) {
      throw await response.json().then((err) => err)
    }
    const data = await response.json()
    return data
  },

  
  closeSalesBox: async (infos) => {
    const token = localStorage.getItem('authToken')

    const response = await fetch(`${BASE_URL}/salesBox/close`, requestOptionsToken(token, 'PUT', infos))
    if (!response.ok) {
      throw await response.json().then((err) => err)
    }
    const data = await response.json()
    return data
  },

  deleteSalesBox: async (id) => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/salesBox/${id}`, requestOptionsToken(token, 'DELETE'))
   
    if (!response.ok) {
      
      throw await response.json().then((err) => err) }
      const data = response.json()
    return data
  },

  reinforce: async (infos) => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/salesBox/reinforce`, requestOptionsToken(token, 'PUT', infos))
    if (!response.ok) {
      throw await response.json().then((err) => err) }
    const data = await response.json()
    return data
  },

  sangria: async (infos) => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/salesBox/sangria`, requestOptionsToken(token, 'PUT', infos))
    if (!response.ok) {
      throw await response.json().then((err) => err) }
    const data = await response.json()
    return data
  },



  

  addSale: async (infos) => {
    const token = localStorage.getItem('authToken')
    console.log(token)
    const response = await fetch(
      `${BASE_URL}/sales`,
      requestOptionsToken(token, 'POST', infos)
      
    )
   
    if (!response.ok || response.status !== 200) {
      throw new Error('Falha na requisição')
    }

  
  },
  deleteSale: async (id) => {
    console.log(1)
    const token = localStorage.getItem('authToken')
    const response = await fetch(
      `${BASE_URL}/sales/${id}`,
      requestOptionsToken(token, 'DELETE')
    )
    const data = response.json()
    return data
  },
  

  deleteMadeProduct: async (id) => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(
      `${BASE_URL}/productmade/${id}`,
      requestOptionsToken(token, 'DELETE')
    )
    const data = response.json()
    return data
  },

  getAllMadeProducts: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/productmade`, requestOptionsToken(token))
    const data = response.json()
    return data
  },

  signIn: async (email, password) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      mode: 'cors',
      body: JSON.stringify({
        email,
        password,
      }),
    }

    const response = await fetch(`${BASE_URL}/auth/login`, requestOptions)
    return response.json()
  },

  validateToken: async (token) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: `Bearer ${token}`,
      },
      mode: 'cors',
    }
    const response = await fetch(`${BASE_URL}/auth/validateToken`, requestOptions)
    return response.json()
  },

  updateExpenses: async (infos) => {
    const token = localStorage.getItem('authToken')
    console.log(infos)
    const response = await fetch(
      `${BASE_URL}/auth/updateExpenses`,
      requestOptionsToken(token, 'PUT', infos)
    )
    const data = response.json()
    console.log(data)
    return data
  },

  getProfile: async () => {
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${BASE_URL}/auth/getProfile`, requestOptionsToken(token))
    const data = response.json()
    return data
  },
}

export default api
