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
          
          <q-separator color="red-5" inset />

          <q-list padding style="font-size: 1.1em">
            
            <q-item to="/menu" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-book-reader"/>
              </q-item-section>
              <q-item-section>
                Cardápio
              </q-item-section>
            </q-item>

            <q-item to="/" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="lar la-heart"/>
              </q-item-section>
              <q-item-section>
                Favoritos
              </q-item-section>
            </q-item>

            <q-item to="" exact class="q-py-lg" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="las la-user" />
              </q-item-section>
              <q-item-section>
                Meus dados
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

            <q-item class="fixed-bottom q-py-lg text-red-8 text-bold" clickable v-ripple>
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
            <q-avatar size="80px" class="q-mb-md q-pa-none col">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="col q-mt-sm" style="font-size: 1.2em">
              <div class="text-weight-bold text-primary app-font-medium">MATHEUS</div>
              <div name="profile-caption" class="text-caption">ADS</div>
              <div name="profile-caption" class="text-caption">Aluno</div>
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

export default {
  name: 'MainLayout',

  components: {
  
  },

  data () {
    return {
      drawer: false,
      
    }
  }
}
</script>

<style>
  .app-name{
    font-size: 2em;
  }
</style>
