<template>
  <q-page padding class="bg-grey-2">

     <div class="section-title q-py-sm row q-mb-xl">
        <q-icon name="las la-user" color="red-5" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">PERFIL</div>
      </div>
    
    <div class="app-font-medium text-red-5 animated zoomIn">
      <form @submit.prevent="submitForm">
        <div class="text-center">
          <q-avatar size="150px" font-size="52px" color="red-5" text-color="white">
            <q-img :src="userProfileForm.avatarSrc" :ratio="1"/>
          </q-avatar>
        </div>
        <q-avatar class="edit-button" size="40px" font-size="30px" color="red-5" text-color="white" icon="las la-camera" >
          <q-menu
            auto-close
            transition-show="scale"
            transition-hide="scale"
            anchor="center middle"
            self="center middle">
            <q-list style="min-width: 100px">
              <q-item clickable @click="captureImageFromCamera">
                <q-item-section>Abrir camera</q-item-section>
              </q-item>
              <q-item clickable @click="captureImageFromGallery">
                <q-item-section>Abrir galeria</q-item-section>
              </q-item>
              <q-item v-if="userProfileForm.avatarSrc != 'statics/avatar-placeholder.png'" clickable @click="removeAvatar">
                <q-item-section>Remover foto</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
        <div class="username flex flex-center row q-mb-lg">
          <q-input
            class="input"
            v-model="userProfileForm.username"
            @input="val => { userProfileForm.username = val.toUpperCase() }"
            dense
            ref="userName"
            lazy-rules
            :rules="[ val => val.length > 0 || 'Nome de usuário é necessário']"
            input-style="text-align: center; color: #ef5350;" />
        </div>
        <div class="flex flex-center">
          <q-select
            class="input"
            input-style="color: #ef5350;"
            standout="bg-grey-3 text-red-5"
            label-color="red"
            v-model="userProfileForm.role"
            :options="roleOptions"
            label="Ocupação">
            <template v-slot:prepend>
              <q-icon name="las la-user-tie"/>
            </template>
          </q-select>
        </div>
        <div class="q-mt-md flex flex-center">
          <q-select
            class="input"
            standout="bg-grey-3 text-red-5"
            label-color="red"
            v-model="userProfileForm.course"
            :disable = !needCourse
            :options="courseOptions"
            label="Curso">
            <template v-slot:prepend>
              <q-icon name="las la-graduation-cap"/>
            </template>
          </q-select>
        </div>
        <div class="q-mt-md row">
          <q-space/>
          <div style="margin-right: 10px">
            <q-btn class="app-font-medium" type="submit" :ripple="false" flat dense text-color="red-5" label="SALVAR" size="lg"></q-btn>
          </div>
        </div>
      </form>
    </div>
  </q-page>
</template>

<script>
import { LocalStorage } from "quasar"
import { mapActions } from "vuex"
import { auth } from 'boot/firebase'

export default {
  name: 'PageProfileFill',

  data () {
    return{
      needCourse: false,
      userProfileForm:{
        avatarSrc: 'statics/avatar-placeholder.png',
        username: '',
        role: 'Selecione sua ocupação',
        course: 'Selecione seu curso',
      },
      courseOptions: [
        'Análise e Desenvolvimento de Sistemas', 'Agronomia', 'Agroindustria', 'Quimica'
      ],
      roleOptions: [
        'Discente', 'Docente', 'Servidor', 'Outro'
      ]

    }
  },

  mounted(){
    this.userProfileForm.username = auth.currentUser.displayName
  },

  watch :{
    'userProfileForm.role': function (val) {
      if(this.userProfileForm.role == 'Discente'){
        this.needCourse = true
      }
      else{
        this.needCourse = false
        this.userProfileForm.course = 'Selecione seu curso'
      }
    }
  },

  methods: {
    ...mapActions('auth', ['updateUser', 'updateUserFirstTime']),
    captureImageFromCamera () {
      navigator.camera.getPicture(
        data => { // on success
          this.userProfileForm.avatarSrc = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
        
        },
        {
          quality: 20, allowEdit: true,
          correctOrientation: true,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA
        }
      )
    },
    captureImageFromGallery () {
      navigator.camera.getPicture(
        data => { // on success
          this.userProfileForm.avatarSrc = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
        
        },
        {
          quality: 20, allowEdit: true,
          correctOrientation: true,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        }
      )
    },

    removeAvatar () {
      this.userProfileForm.avatarSrc = 'statics/avatar-placeholder.png'
    },

    submitForm () {
      this.$refs.userName.validate()
      if(!this.$refs.userName.hasError){
        this.updateUserFirstTime(this.userProfileForm)
      }
      else{
        console.log('Tem erros')
      }
    }
  },

}
</script>

<style>
  .edit-button{
    top: 0;
    transform: translate(55vw, -5vh);
  }
  .input{
    width: 90vw;
  }
  .section-title {
    font-size: 1.5em;
    border-bottom: solid 3px #ef5350;
  }
  .username{
    font-size: 1.2rem;
  }
</style>
