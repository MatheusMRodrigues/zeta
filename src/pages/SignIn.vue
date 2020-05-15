<template>
  <q-page class="flex flex-center">
    <transition
      appear
      class="slower"
      enter-active-class="animated flipInY"
      leave-active-class="animated flipInY">
    <div class="text-center">
      <div class="logo-block">
        <q-icon name="img:statics/icons/logo.svg" size="10em" />
        <div class="logo-title app-font-medium text-red-5 q-mt-sm" style="-webkit-text-stroke: 1px #ef5350;">
          <span class="text-white">Z</span>ETA
        </div>
      </div>
      <div class="app-font-medium q-mb-sm q-mt-lg">
        <q-input
          standout="bg-grey-3"
          placeholder="Email"
          v-model="signInForm.mail"
          input-style="color: #ef5350;"
          ref="mail"
          lazy-rules
          :rules="[ val => isValidEmail(val) || 'Digite um email válido']">
          <template v-slot:prepend>
            <q-icon name="las la-envelope" color="red-5" />
          </template>
        </q-input>
      </div>
      <div class="app-font-medium">
        <q-input
          standout="bg-grey-3"
          placeholder="Senha"
          v-model="signInForm.password"
          input-style="color: #ef5350;"
          ref="password"
          lazy-rules
          :type="isPwd ? 'password' : 'text'"
          :rules="[ val => val.length >= 6 || 'Senhas contem no minimo 6 digitos']">
          <template v-slot:append>
            <q-icon
              color="red-5"
              :name="isPwd ? 'visibility' : 'visibility_off'"
              class="cursor-pointer q-mr-sm"
              @click="isPwd = !isPwd"
            />
          </template>
          <template v-slot:prepend>
            <q-icon name="las la-key" color="red-5" />
          </template>
        </q-input>
      </div>
      <div class="flex flex-left q-mt-md app-font text-grey-7">
        Esqueceu sua senha?
        <router-link to="" class="app-font-medium text-red-5 q-ml-xs"
          >CLIQUE AQUI</router-link
        >
      </div>
      <div class="q-mt-lg">
        <q-btn
          @click="submitForm()"
          class="auth-btn q-py-sm"
          unelevated
          color="red-5"
          text-color="white"
          label="ENTRAR"
        />
      </div>
      <div class="q-mt-sm app-font text-grey-7 q-mb-md">
        Nao possui uma conta?
        <a @click="$router.replace('/signup')" class="app-font-medium text-red-5 q-ml-xs">CRIAR UMA</a>
      </div>
    </div>
    </transition>
  </q-page>
</template>

<style>
a {
  text-decoration: none;
}
.q-field--standout.q-field--focused .q-field__control{
    background: #ffcdd2;
  }
.logo-title {
  font-size: 3em;
}
.auth-btn {
  width: 90vw;
}
</style>

<script>

import { mapActions } from 'vuex'

export default {
  name: "PageLogin",

  data() {
    return {

      isPwd: true,

      signInForm:{ 
        mail: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions('auth', ['loginUser']),

    submitForm () {
      this.$refs.mail.validate()
      this.$refs.password.validate()
      if(!this.$refs.mail.hasError && !this.$refs.password.hasError){
        this.loginUser(this.signInForm)
      }
      else{

      }
      
    },

    isValidEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>
