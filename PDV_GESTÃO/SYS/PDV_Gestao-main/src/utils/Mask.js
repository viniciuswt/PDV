const { format: formatCurrency } = Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  
  const { format: formatPercent } = Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  
  export const Mask = {
    onlyDigits: (value) => {
      const decimal = Number(value.toString().replace(/\D/g, ''))
      return decimal
    },

    money: (value,allow) => {
      if (!allow){
      if (value < 0 || !value) {
        value = 0
      }}
     
      value = typeof value === 'number' ? value.toFixed(2) : !value.includes(',') ?parseFloat(value).toFixed(2) : value
      
      const decimal = Number(value.replace(/\D/g, '')) / 100
      return formatCurrency(decimal || 0).replace(' \xa0', '')
    },
  
    percent: (value) => {
      if (!value) {
        value = ''
      }
      value = typeof value === 'number' ? value.toFixed(2) : value
      const decimal = Number(value.replace(/\D/g, '')) / 100
      return `% ${formatPercent(decimal || 0).replace('\xa0', '')}`
    },
  }
  