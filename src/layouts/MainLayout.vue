<template>
  
  <q-layout view="hHh lpR fFf">
    
    <q-header class="bg-white shadow-4">
      
      <q-toolbar>

        <q-btn @click="drawer = !drawer" color="red-5" flat round dense icon="las la-bars"/>

        <q-space />

          <div class="text-grey-6 app-name app-font-medium"><span style="color: #ef5350">Z</span>ETA</div>

        <q-space />

        <div class="text-caption text-grey-5">v0.1</div>

      </q-toolbar>
    
    </q-header>
    
    <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="400"
        class="app-font"
      >
        <q-scroll-area style="height: calc(100% - 120px); margin-top: 120px;">

          <q-list padding style="font-size: 1.1em">
            
            <q-item to="/today" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-book-reader"/>
              </q-item-section>
              <q-item-section>
                Cardápio
              </q-item-section>
            </q-item>

            <q-item to="/feed" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-bullhorn">
                  <q-badge color="red-5" floating label="1"></q-badge>
                </q-icon>
              </q-item-section>
              <q-item-section>
                Avisos
              </q-item-section>
            </q-item>

            <q-item to="/favorites" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="lar la-heart"/>
              </q-item-section>
              <q-item-section>
                Favoritos
              </q-item-section>
            </q-item>

            <q-item to="/profile" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-user" />
              </q-item-section>
              <q-item-section>
                Perfil
              </q-item-section>
            </q-item>

            <q-item to="/settings" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-tools" />
              </q-item-section>
              <q-item-section>
                Configurações
              </q-item-section>
            </q-item>

            <q-item to="" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-question" />
              </q-item-section>
              <q-item-section>
                Sobre
              </q-item-section>
            </q-item>

            <q-item @click="logoutUser" class="vertical-bottom q-py-lg text-red-8 text-bold" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-sign-out-alt" />
              </q-item-section>
              <q-item-section>
                Sair
              </q-item-section>
            </q-item>

          </q-list>

        </q-scroll-area>

        <div class="absolute-top" style="height: 120px; margin-left: -5px;">
          <div class="absolute-bottom bg-transparent row">
            <q-avatar size="80px" font-size="52px" color="red-5" text-color="white" class="q-ml-lg q-mb-md q-mr-md">
              <q-img :src="userData.avatar" :ratio="1"/>
            </q-avatar>
            <div class="col q-mt-sm" style="font-size: 1.2em">
              <div class="text-weight-bold text-primary app-font-medium">{{userNameFormated}}</div>
              <div v-if="userData.course != 'Selecione seu curso'" name="profile-caption" class="text-caption">{{userData.course | course}}</div>
              <div name="profile-caption" class="text-caption">{{userData.role}}</div>
            </div>
          </div>
        </div>
      </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>

</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { LocalStorage } from 'quasar'
import { auth, db } from 'boot/firebase'

export default {
  name: 'MainLayout',

  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
  },
  course: function (value) {
      if (!value) return ''
      value = value.toString()
      if(value == 'Análise e Desenvolvimento de Sistemas'){
        return 'ADS'
      }
      else{
        return value
      }
    }
},

  data () {
    return {
      drawer: false,
      user: {}
    }
  },

  computed: {
    userNameFormated() {
      return(this.userData.userName ||"" ).split(" ")[0] 
    },  
    ...mapGetters('auth', ['userData'])   
  },

  mounted(){
    this.bindUserData()
  },

  methods: {
    ...mapActions('auth', ['logoutUser', 'bindUserData']),

  }
}
</script>

<style>
  .app-name{
    font-size: 2em;
  }
</style>
