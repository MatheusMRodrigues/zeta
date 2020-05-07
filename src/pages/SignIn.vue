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
          placeholder="Usuário"
          v-model="user"
          input-style="color: #ef5350;"
          :rules="[ val => val.length >= 6 || 'São necessários no minimo 6 digitos']">
          <template v-slot:prepend>
            <q-icon name="las la-user" color="red-5" />
          </template>
        </q-input>
      </div>
      <div class="app-font-medium">
        <q-input
          standout="bg-grey-3"
          placeholder="Senha"
          v-model="password"
          input-style="color: #ef5350;"
          lazy-rules
          :rules="[ val => val.length >= 6 || 'São necessários no minimo 6 digitos']">
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
          to="/menu"
          class="auth-btn q-py-sm"
          unelevated
          color="red-5"
          text-color="white"
          label="ENTRAR"
        />
      </div>
      <div class="q-mt-sm app-font text-grey-7 q-mb-md">
        Nao possui uma conta?
        <router-link to="/signup" class="app-font-medium text-red-5 q-ml-xs">CRIAR UMA</router-link>
      </div>
    </div>
    </transition>
  </q-page>
</template>

<style>
a {
  text-decoration: none;
}

.logo-title {
  font-size: 3em;
}
.auth-btn {
  width: 90vw;
}
</style>

<script>
export default {
  name: "PageLogin",

  data() {
    return {
      user: "",
      password: ""
    };
  }
};
</script>
