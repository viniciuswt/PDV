import {useEffect} from 'react'

export const KeyPressed = (callback, key) => {
    useEffect(() => {
      const keyPressHandler = (event) => {
        if (event.key === key) {
          callback()
       
        }
        
      }
      window.addEventListener('keydown', keyPressHandler)

      return () => {
        window.removeEventListener('keydown',keyPressHandler)
      }
    },[callback,key])
  }

  