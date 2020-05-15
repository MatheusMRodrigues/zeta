<template>
  <q-page padding class="bg-grey-2">

     <div class="section-title q-py-sm row q-mb-xl">
        <q-icon name="las la-user" color="red-5" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">PERFIL</div>
      </div>
    
    <div class="app-font-medium text-red-5 animated zoomIn">
      <div class="text-center">
        <q-avatar size="150px" font-size="52px" color="red-5" text-color="white">
          <img :src="avatarSrc">
        </q-avatar>
      </div>
      <q-avatar @click="captureImage" class="edit-button" size="40px" font-size="30px" color="red-5" text-color="white" icon="las la-camera" />
      <div class="flex flex-center">
        <q-select
          class="input"
          input-style="color: #ef5350;"
          standout="bg-grey-3 text-red-5"
          label-color="red"
          v-model="role"
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
          v-model="course"
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
          <q-btn dense color="red-5" text-color="white" size="lg"><q-icon name="las la-save"/></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageProfileFill',

  data () {
    return{
      avatarSrc: 'statics/avatar-placeholder.png',
      role: 'Selecione sua ocupação',
      needCourse: false,
      course: 'Selecione seu curso',
      courseOptions: [
        'Google', 'Análise e Desenvolvimento de Sistemas', 'Agronomia', 'Agroindustria', 'Quimica'
      ],
      roleOptions: [
        'Discente', 'Docente', 'Servidor', 'Outro'
      ]

    }
  },

  watch :{
    role: function (val) {
      if(this.role == 'Discente'){
        this.needCourse = true
      }
      else{
        this.needCourse = false
        this.course = 'Selecione seu curso'
      }
    }
  },

  methods: {
    captureImage () {
      navigator.camera.getPicture(
        data => { // on success
          this.avatarSrc = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
          this.$q.notify('Could not access device camera.')
        },
        {
          // camera options
        }
      )
    }
  }

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
</style>
