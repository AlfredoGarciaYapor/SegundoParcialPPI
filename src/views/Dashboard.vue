<template>
  <div>
    <div class="container py-5">
      <div class="row">

        <!-- Start lane -->
        <div class="col-12 col-lg-4" v-for="(list, key) in listas" :key="key">
          <ListaDeTareas :title="list.title" :description="list.description" :tareas="list.tareas" :index="key"/>
        </div>
        <div class="col-12 col-lg-2">
          <button class="btn btn-primary btn-block" @click="addList">Add List</button>
        </div>
        <!-- End lane -->
      </div>
    </div>
  </div>
</template>
<style lang="css" href="./assets/styles/styles.css"></style>

<script>
// @ is an alias to /src
import {mapState, mapMutations} from 'vuex'
// ES6 Modules or TypeScript
// main.js
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Tarea from '../components/Tarea.vue'
import ListaDeTareas from '../components/ListaDeTareas.vue'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);


export default {
  name: 'Dashboard',
  components: {
    ListaDeTareas
  },
  computed:{
    ...mapState(['listas'])
  },
  data() {
    return {

    }
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations(['addList'])
  },

}
</script>
