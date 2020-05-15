import { Notify } from 'quasar'

export function showErrorMessage(errorMessage){
    Notify.create({
        position: 'top',
        timeout: 3000,
        closeBtn: 'X',
        html: true,
        type: 'negative',
        message: errorMessage
      })
}