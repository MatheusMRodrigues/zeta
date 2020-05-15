<template>
  <q-page>
    <div class="flex flex-center container app-font-medium text-red-5 q-pa-md animated zoomIn delay-1s">
      <div>
        <div class="text-center icon">
          <q-icon
              name="las la-grin-alt"
              size="6rem"
              color="red-5"
            />
        </div>
        <div class="text text-center">{{username | capitalize}}, Você está quase lá!</div>
        <div class="text-center text-grey-7">Antes de começar a usar o aplicativo você precisa completar o seu perfil de usuário. É rapidinho!</div>
        <div class="text-center q-mt-md">
          <q-btn @click="routerReplace" color="red-5" text-color="white" size="md" label="Entendi, Vamos lá" />
        </div>
        <div class="text-center absolute-bottom q-mb-md">
          <div class="text-grey-7">Não é {{username | capitalize}}? <a @click="this.logoutUser" class="text-red-5">TROCAR DE USUÁRIO</a></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { LocalStorage } from 'quasar'

export default {
  name: 'PageCompleteProfile',

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },

  data () {
    return{
      username: null
    }
  },

  mounted(){
    this.username = LocalStorage.getItem('loggedUserName').split(" ")[0]
  },

  methods: {
    ...mapActions('auth', ['logoutUser']),
    routerReplace () {
      this.$router.replace('/profilefillform')
    }
  }
}
</script>

<style>
  .container{
    height: 100vh;
  }
  .text{
    font-size: 1.5rem;
  }
</style>
