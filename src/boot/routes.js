import { LocalStorage } from 'quasar'

export default ({ router }) => {
    
    router.beforeEach((to, from, next) => {

        let loggedIn = LocalStorage.getItem('loggedIn')

        if(!loggedIn && to.path == '/signup' ) {
            next()
        }
        else if(!loggedIn && to.path !== '/signin'){
            next('/signin')
        }
        else{
            next()
        }

    })

}
