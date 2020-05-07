<template>
  <q-page padding class="flex flex-center">
    <transition
      appear
      class="slower"
      enter-active-class="animated flipInY"
      leave-active-class="animated flipInY">
      <div class="text-center">
        <div class="logo-block">
          <q-icon name="img:statics/icons/logo.svg" size="10em"/>
          <div class="logo-title app-font-medium text-red-5 q-mt-sm" style="-webkit-text-stroke: 1px #ef5350;"><span class="text-white">Z</span>ETA</div>
        </div>
        <form @submit.prevent="submitForm">
          <q-stepper
            v-model="step"
            ref="stepper"
            contracted
            color="primary"
            keep-alive
            animated>

            <q-step
              :name="1"
              title="Create an ad group"
              caption="Optional"
              icon="las la-user"
              :done="step > 1">
              <div class="app-font-medium text-grey-7 q-mb-lg" style="margin-top: 14px">
                Preencha os campos a seguir para criar uma nova conta e ter acesso ao aplicativo :D
              </div>
              <div class="app-font-medium text-grey-7">
                Ao utilizar o aplicativo você declara que leu e aceitou os <span class="text-red-5">Termos de uso</span>
              </div>
              <div class="app-font-medium text-red-5 q-mt-sm">
                <q-checkbox v-model="terms" label="Estou ciente" />
              </div>
            </q-step>

            <q-step
              :name="2"
              title="Select campaign settings"
              icon="las la-user"
              :done="step > 2">
               <div class="app-font-medium">
                <q-input
                  standout="bg-grey-4"
                  placeholder="Usuário"
                  v-model="signUpForm.user"
                  input-style="color: #ef5350; width: 70vw"
                  ref="user"
                  :rules="[ val => val.length >= 6 || 'São necessários no minimo 6 digitos']">
                  <template v-slot:prepend>
                    <q-icon name="las la-user" color="red-5" />
                  </template>
                </q-input>
              </div>
            </q-step>

            <q-step
              :name="3"
              title="Create an ad group"
              caption="Optional"
              icon="las la-envelope"
              :done="step > 3">
              <div class="app-font-medium">
                <q-input
                  standout="bg-grey-4"
                  placeholder="Email"
                  v-model="signUpForm.mail"
                  input-style="color: #ef5350; width: 70vw"
                  ref="mail"
                  :rules="[ val => isValidEmail(val) || 'Digite um email válido']">
                  <template v-slot:prepend>
                    <q-icon name="las la-envelope" color="red-5" />
                  </template>
                </q-input>
              </div>
            </q-step>

            <q-step
              :name="4"
              title="Create an ad"
              icon="las la-key"
              :done="step > 4">
              <div class="app-font-medium">
                <q-input
                  standout="bg-grey-4"
                  type="password"
                  placeholder="Senha"
                  v-model="signUpForm.password"
                  input-style="color: #ef5350; width: 70vw"
                  ref="password"
                  :rules="[ val => val.length >= 6 || 'São necessários no minimo 6 digitos']">
                  <template v-slot:prepend>
                    <q-icon name="las la-key" color="red-5" />
                  </template>
                </q-input>
              </div>
            </q-step>

            <q-step
              :name="5"
              title="Create an ad group"
              caption="Optional"
              icon="las la-key"
              :done="step > 5">
              <div class="app-font-medium">
                <q-input
                  standout="bg-grey-4"
                  type="password"
                  placeholder="Confirme a senha"
                  v-model="signUpForm.passwordCheck"
                  input-style="color: #ef5350; width: 70vw"
                  ref="passwordCheck"                
                  :rules="[ val => val.length >= 6 || 'Precisa de 6']">
                  <template v-slot:prepend>
                    <q-icon name="las la-key" color="red-5" />
                  </template>
                </q-input>
              </div>
            </q-step>

            <q-step
              :name="6"
              title="Create an ad group"
              caption="Optional"
              icon="las la-level-up-alt">
              <q-btn
                class="auth-btn q-py-sm"
                type="submit"
                unelevated
                color="red-5"
                text-color="white"
                label="CRIAR CONTA" />
            </q-step>


            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn v-if="step < 6" @click="$refs.stepper.next(); canGo = false" :disable="!canGo" color="primary" :label="step === 6 ? 'Finish' : 'Proximo'" class="q-ml-sm" />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </form>
        <div class="q-mt-sm app-font text-grey-7">Já possui uma conta? <router-link to="/" class="app-font-medium text-red-5 q-ml-xs">ENTRAR</router-link></div>
      </div>
    </transition>
  </q-page>
</template>

<style>
  a{
    text-decoration: none;
  }
  .q-stepper{
    max-width: 90vw !important;
  }
  .q-stepper__step-inner{
    padding: 16px !important;
  }
  .q-field--standout.q-field--focused .q-field__control{
    background: #ffcdd2;
  }
  .logo-block{
    top: 0;
    transform: translateY(-5%);
  }
  .logo-title{
    font-size: 3em;
  }
  .auth-btn{
    width: 82vw;
    margin-bottom: 24px;
  }
</style>

<script>
export default {

  name: 'PageRegister',

  data(){
    
    return{

      step: 1,

      terms: false,

      canGo: false,

      signUpForm: {
        user: '',
        mail: '',
        password: '',
        passwordCheck: ''
      }
    }
  },

  watch: {

    terms: function () {
      if(this.terms == true){
        this.canGo = true
      }
      else{
        this.canGo = false
      }
    },

    'signUpForm.user': function () {
      this.$refs.user.validate()
      if(!this.signUpForm.user.length || this.$refs.user.hasError){
        this.canGo = false
      }
      else{
        this.canGo = true
      }
    },
    'signUpForm.mail': function () {
      this.$refs.mail.validate()
      if(!this.signUpForm.mail.length || this.$refs.mail.hasError){
        this.canGo = false
      }
      else{
        this.canGo = true
      }
    },
    'signUpForm.password': function () {
      this.$refs.password.validate()
      if(!this.signUpForm.password.length || this.$refs.password.hasError){
        this.canGo = false
      }
      else{
        this.canGo = true
      }
    },
    'signUpForm.passwordCheck': function () {
      this.$refs.passwordCheck.validate()
      if(!this.signUpForm.passwordCheck.length || this.$refs.passwordCheck.hasError){
        this.canGo = false
      }
      else{
        this.canGo = true
      }
    },
  },

  methods: {

    submitForm () {
      console.log('Foi!')
    },

    isValidEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }

}
</script>
