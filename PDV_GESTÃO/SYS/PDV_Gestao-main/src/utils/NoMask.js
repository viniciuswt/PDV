
const replaceAll = (string, search, replace) => {
  return string.split(search).join(replace);
}

export const NoMask = {
    revertMoney: (value) => {
      
      
      if (!value) {
      }
      value = value.toString()
      value = value.replace('R$ ', '')
      value = replaceAll(value,'.', '')
      console.log(value)
      value = value.replace(',', '.')//8888.888,39
      value = (+value).toFixed(2)
  
      
      return +value
    },
  
    reverseFormatPercent: (value) => {
      value = value.toString()
      value = value.replace(',', '.')
      value = value.replace('%', '')
      value = parseFloat(value)
  
      return value
    },
  }
  